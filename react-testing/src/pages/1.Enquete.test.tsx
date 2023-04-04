import { fireEvent, render, waitFor } from '@testing-library/react';
import { screen } from "shadow-dom-testing-library";
import '@testing-library/jest-dom'
import { Enquete } from './Enquete'

// One additional package:
// A higher level of abstraction for fireEvent
// (in case fireEvent isn't cutting it for you anymore)
// https://github.com/testing-library/user-event
// ATTN: user.type() works better than fireEvent.change for the Web Components 😉
import userEvent from '@testing-library/user-event';


describe('Submitting the Enquete', () => {
  beforeEach(() => {
    // Because submitEnquete uses window.alert
    global.alert = jest.fn();
  })

  it('calls window.alert (Mocking)', async () => {
    const rendered = render(<Enquete />);
    const btn = await screen.findByShadowRole('button');
    expect(btn).toBeInTheDocument()

    fireEvent.click(rendered.getByText(/Submit/));
    expect(global.alert).toHaveBeenCalled();
  })

  describe('disable the button once clicked', () => {
    it('using fireEvent.click', async () => {
      const rendered = render(<Enquete />);
      let btn = await screen.findByShadowRole('button');
      expect(btn).toBeEnabled()

      fireEvent.click(rendered.getByText(/Submit/));

      btn = await screen.findByShadowRole('button');
      expect(btn).toBeDisabled()
    })

    it('using the user-event companion library', async () => {
      const user = userEvent.setup()
      const rendered = render(<Enquete />)
      await user.click(rendered.getByText(/Submit/))
      // There is also dblClick & tripleClick

      const btn = await screen.findByShadowRole('button');
      expect(btn).toBeDisabled()

      // Full userEvent API:
      // import { click, dblClick, tripleClick, hover, unhover, tab } from '../convenience';
      // import { keyboard } from '../keyboard';
      // import { copy, cut, paste } from '../clipboard';
      // import { pointer } from '../pointer';
      // import { clear, deselectOptions, selectOptions, type, upload } from '../utility';
    })
  })

  it('alerts your name', async () => {
    const user = userEvent.setup()
    const rendered = render(<Enquete />)

    const nameInput = await screen.findByShadowRole('textbox')
    await user.type(nameInput, 'HACKERMAN')
    // More on user keyboard events:
    // https://testing-library.com/docs/user-event/keyboard

    await user.click(rendered.getByText(/Submit/));
    expect(global.alert).toHaveBeenCalledWith(expect.stringContaining('HACKERMAN'))
  })

  it('captures the other enquete form data too', () => {})

  it('uses fetch to POST the data to /api/enquete', async () => {
    // await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
  })

  it('hides the enquete and shows a different card after submitting', () => {
    // https://testing-library.com/docs/dom-testing-library/api-async
    // waitForElementToBeRemoved(document.querySelector('div.getOuttaHere')).then(() =>
    //   console.log('Element no longer in DOM'),
    // )
  })

  it('does not hide the enquete but shows an error if the backend call fails', () => {})
})
