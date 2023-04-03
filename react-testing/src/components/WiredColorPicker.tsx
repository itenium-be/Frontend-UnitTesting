import { WiredCombo } from "./wrappers/WiredCombo";
import { WiredItem } from "./wrappers/WiredItem";

export function WiredColorPicker() {
  return (
    <WiredCombo>
      <WiredItem>red</WiredItem>
      <WiredItem>green</WiredItem>
    </WiredCombo>
  )
}

// export const WiredCombo = createComponent({
//   tagName: 'wired-combo',
//   events: {
//     onselected: 'selected'
//   }
// });
