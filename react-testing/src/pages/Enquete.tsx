import { useState } from "react";
import {
  WiredCard, WiredButton, WiredInput, WiredCheckbox,
  WiredRadio, WiredRadioGroup
} from '../components/wrappers/WiredElements';


export function Enquete() {
  const [name, setName] = useState('')
  const [disabled, setDisabled] = useState(false)

  function submitEnquete() {
    setDisabled(true);

    // TODO capture the other form fields
    const data = {
      name,
    };

    // TODO: use fetch to call our backend?
    window.alert(JSON.stringify(data));
  }

  return (
    <>
      <div className="col-6">
        <WiredCard elevation={5}>
          <h1>I am a Form</h1>
          <section data-testid="form-section">
            <WiredInput
              value={name}
              onChange={evnt => setName(evnt.target?.value)}
              placeholder="Your name"
            />

            <br />
            <br />
            <h4>Question 1</h4>
            Which do you like most:
            <br />
            <WiredRadioGroup>
              <WiredRadio style={{marginRight: 20}}>Angular</WiredRadio>
              <WiredRadio style={{marginRight: 20}}>React</WiredRadio>
              <WiredRadio style={{marginRight: 20}}>Vue</WiredRadio>
              <WiredRadio style={{marginRight: 20}}>Wired Elements</WiredRadio>
            </WiredRadioGroup>


            <br />
            <br />
            <h4 title="Check YES!!">Question 2</h4>
            <span style={{marginRight: 18}}>Are you happy using that framework?</span>
            <WiredCheckbox /> YES!

            <br />
            <br />
            <WiredButton disabled={disabled} elevation={2} onClick={submitEnquete}>
              Submit
            </WiredButton>

            <div style={{visibility: 'hidden'}}>
              <label htmlFor="username-input">Username</label>
              <input type="text" id="username-input" className="inpt" required />
            </div>
          </section>
        </WiredCard>
      </div>
      <div className="col-6">
        <WiredCard elevation={3}>
          <h1>Exercises 2</h1>
          <p>See <code>0.Enquete.test.tsx</code></p>
          <p>
            After submitting the form, hide the enquete and
            display a "Thank You" WiredCard instead!
          </p>
          <p>
            All the form data has to be submitted to our
            backend. Show a success/error message after
            submitting the form.
          </p>
        </WiredCard>
      </div>
    </>
  );
}
