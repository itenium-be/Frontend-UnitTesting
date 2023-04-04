// The philosophy of the testing-library is to emulate the
// behavior of the user.
// So no calling "setName" but instead firing an onChange event
// And not checking props but instead verifying the generated HTML
import { fireEvent, render } from '@testing-library/react';

// Because the WiredElements are thin wrappers around
// Web Components, and because Jest doesn't (yet) have
// Shadow-DOM support, we need an additional package...
// https://github.com/testing-library/dom-testing-library/issues/413
import { screen } from "shadow-dom-testing-library";

// Import additional DOM expect matchers:
// expect(el).toBeEnabled(), etc
// https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// The React component we're testing
import { Enquete } from './Enquete'


describe('Submitting the Enquete', () => {
  it('finds the shadow <button>', async () => {
    render(<Enquete />);

    // QUERIES
    // getBy: one match or throws
    // queryBy: like getBy but for 0 matches it returns null
    // findBy: like getBy but returns a Promise
    // xxxAllBy: Returns an array. queryAllBy returns [] instead of null
    // --> See the table at: https://testing-library.com/docs/queries/about#types-of-queries

    // getByRole: the preferred way
    // link, article, aside/complementary, blockquote
    // https://www.w3.org/TR/html-aria/#docconformance

    // Here comes the shadow-dom-testing-library into play
    // The WiredButton doesn't actually render a html <button>
    expect(screen.queryByRole('button')).toBeNull();

    // The Shadow-DOM hasn't been created yet?
    expect(screen.queryByShadowRole('button')).toBeNull();

    // And there we go:
    const btn = await screen.findByShadowRole('button');
    expect(btn).toBeInTheDocument();

    // The radios seem to have been rendered as checkboxes too 😃
    const inputs = await screen.findAllByShadowRole('checkbox')
    expect(inputs).toHaveLength(5)

    // One of the radios
    const radio = inputs[0]
    expect(radio).toHaveStyle({marginRight: 20})

    // The checkbox
    const checkbox = inputs[4];
    expect(checkbox).not.toBeChecked() // Also: toBePartiallyChecked
  })

  it('findByLabel', () => {
    const rendered = render(<Enquete />);

    // The second preferred way: label.htmlFor<->input.id
    const fakeInput = rendered.getByLabelText('Username')
    expect(fakeInput).toHaveClass('inpt')
    expect(fakeInput).toBeRequired()
    expect(fakeInput).toBeInvalid()
    expect(fakeInput).not.toHaveFocus();

    // Fire an event emulating what a user would do
    // https://testing-library.com/docs/dom-testing-library/api-events/
    fireEvent.change(fakeInput, {target: {value: 'HACKERMAN'}})
    expect(fakeInput).toBeValid()

    // I added this hidden in the form with regular Html
    // because the "id" is not correctly set on the
    // input field in the WiredElements..
    expect(fakeInput).not.toBeVisible()
  })

  it('findByPlaceholder', async () => {
    render(<Enquete />);
    const nameInput = await screen.findByShadowPlaceholderText('Your name')
    expect(nameInput).toHaveAttribute('type', 'text')

    fireEvent.change(nameInput, {target: {value: 'user-entered-value'}})
    expect(nameInput).toHaveValue('user-entered-value')
    expect(nameInput).toHaveDisplayValue('user-entered-value')
    // more control: https://github.com/testing-library/jest-dom#tohaveformvalues

    // Could also use:
    // getByText('click me').focus();
    // fireEvent.keyDown(document.activeElement || document.body);
  })

  it('getBytitle', async () => {
    const rendered = render(<Enquete />);
    const question2 = await rendered.findByTitle('Check YES!!')
    expect(question2).toHaveAttribute('title', expect.any(String))
  })

  it('getByTestId', async () => {
    const rendered = render(<Enquete />);

    // And finally,
    // The least preferred method of selecting something
    const formSection = await rendered.findByTestId('form-section')
    expect(formSection).toContainHTML('<h4>Question 1</h4>')

    const h4 = rendered.getByText('Question 1')
    expect(h4).toHaveTextContent('Question 1')
    expect(formSection).toContainElement(h4)
  })

  it('can use regex', async () => {
    const rendered = render(<Enquete />);
    let btns = rendered.queryAllByText(/Submit/i)
    expect(btns).toHaveLength(3)

    // Or partial, insensitive matching
    btns = rendered.queryAllByText('Submit', {exact: false})
    expect(btns).toHaveLength(3)

    // Or match with a fn
    btns = rendered.queryAllByText((content, element) => element?.tagName.toLowerCase() === 'wired-button' && content.startsWith('S'))
    expect(btns).toHaveLength(1)
  });

  it('has extra query options', async () => {
    const rendered = render(<Enquete />)
    let inputs = rendered.queryAllByRole('textbox')
    expect(inputs).toHaveLength(0)

    const byRoleOptions = {hidden: true};
    inputs = rendered.queryAllByRole('textbox', byRoleOptions)
    expect(inputs).toHaveLength(1)
  });

  it.skip('has (visual) debugging tools', async () => {
    const btn = await screen.findByShadowRole('button');

    // Not sure what's going on, do a pretty DOM print:
    screen.debug(btn)

    // Or, open interactively in your browser!
    // It will log an url. This is very useful
    screen.logTestingPlaygroundURL()
    // Checkout https://testing-playground.com/ for an example

    // There is also a Chrome extension:
    // https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano/related
  });

  it('can still do things the old school way', () => {
    // Can be handy, but rely on the other functions first!
    const {container} = render(<Enquete />)
    const section = container.querySelector('[data-testid="form-section"]')
    expect(section).toBeInTheDocument();
  })
})
