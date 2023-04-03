import { useState } from 'react';
import { WiredCheckbox, WiredDivider, WiredInput, WiredSpinner } from './wrappers/WiredElements';


export function Loading() {
  const [running, setRunning] = useState(true)
  const [color, setColor] = useState('red')

  return (
    <>
      Loading...
      <br />
      <WiredSpinner spinning={running} duration={1000} style={{color}} />


      <WiredDivider style={{marginTop: 20}} />


      <div style={{paddingTop: 32}}>
        <h3>Change Properties</h3>
        <WiredCheckbox checked={running} onChange={() => setRunning(!running)} /> Running?
        <br />

        Duration:
        <WiredInput placeholder="1500" style={{width: 100}} />

        <br />
        Color:
        <WiredInput placeholder="Pick a web color" value={color} onChange={evnt => setColor(evnt.target.value)} style={{width: 100}} />
      </div>
    </>
  )
}
