import { useState } from "react";
import {
  WiredCard, WiredButton, WiredInput, WiredCheckbox,
  WiredRadio, WiredRadioGroup
} from '../components/wrappers/WiredElements';


export function SampleCard() {
  const [name, setName] = useState('')

  function handleClick() {
    window.alert(`Hello ${name}!`);
  }

  return (
    <WiredCard elevation={5}>
      <h1>I am a Form</h1>
      <section>
        <WiredInput placeholder="Your name" value={name} onChange={evnt => setName(evnt.target?.value)} />

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
        <h4>Question 2</h4>
        <span style={{marginRight: 18}}>Are you happy using that framework?</span>
        <WiredCheckbox /> YES!

        <br />
        <br />
        <WiredButton elevation={2} onClick={handleClick}>
          Submit
        </WiredButton>
      </section>
    </WiredCard>
  );
}
