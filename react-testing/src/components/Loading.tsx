import { WiredCheckbox, WiredDivider, WiredInput, WiredSpinner } from './wrappers/WiredElements';


export function Loading() {
  return (
    <>
      Loading...
      <br />
      <WiredSpinner spinning duration={1500} style={{color: 'red'}} />
      <WiredDivider style={{marginTop: 20}} />
      <AdjustWiredSpinner />
    </>
  )
}



function AdjustWiredSpinner() {
  return (
    <div style={{paddingTop: 32}}>
      <h3>Change Properties</h3>
      <WiredCheckbox checked={true} /> Running?
      <br />

      Duration:
      <WiredInput placeholder="1500" style={{width: 100}} />

      <br />
      TODO: WiredColorPicker
    </div>
  )
}
