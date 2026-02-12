/*
 * Created by Austin
 * https://cdn.jsdelivr.net/gh/AustinSDK/Javascript-Modules@latest/modules/conversions.js
*/
function hexToString(hexx) {
  // Convert hex to decimal number directly
  return parseInt(hexx, 16).toString();
}
const rgbToHex = (r, g, b) => `
  #${[r, g, b].map(
    v => v.toString(
      16
    ).padStart(
      2, '0'
    )
  ).join('')
   }';
