import { fireEvent, render, waitFor } from '@testing-library/react';
import { screen } from "shadow-dom-testing-library";
import '@testing-library/jest-dom'
import { Enquete } from './Enquete'

// One (optional) additional package:
// A higher level of abstraction for fireEvent
// (in case fireEvent isn't cutting it for you anymore)
// https://github.com/testing-library/user-event
import userEvent from '@testing-library/user-event';


describe('Submitting the Enquete', () => {
  beforeEach(() => {
    // Because submitEnquete uses window.alert
    global.alert = jest.fn();
  })

  it('calls window.alert', async () => {
    const rendered = render(<Enquete />);
    const btn = await screen.findByShadowRole('button');
    expect(btn).toBeInTheDocument()

    fireEvent.click(rendered.getByText(/Submit/));
    expect(global.alert).toHaveBeenCalled();
  })

  it('disables the button once clicked', async () => {
    const rendered = render(<Enquete />);
    let btn = await screen.findByShadowRole('button');
    expect(btn).toBeEnabled()

    fireEvent.click(rendered.getByText(/Submit/));

    btn = await screen.findByShadowRole('button');
    expect(btn).toBeDisabled()
  })

  it.skip('alerts your name', async () => {
    const rendered = render(<Enquete />);

    const nameInput = await screen.findByShadowPlaceholderText('Your name')
    fireEvent.change(nameInput, {target: {value: 'HACKERMAN'}})
    fireEvent.click(rendered.getByText(/Submit/));

    expect(global.alert).toHaveBeenCalledWith(expect.stringContaining('name'));
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

  it('does not hide the enquete and shows an error if the backend call fails', () => {})
})
