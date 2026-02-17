/* 
 * Created by Austin
 * Requires ./Colors.js & ./Conversions.js
 * TODO: Connect browserify or related
 * https://cdn.jsdelivr.net/gh/AustinSDK/Javascript-Modules@latest/modules/TuiCssImagesModule.js
*/
let colors = { // simple override
    "black-168": "#000000",
    "blue-168": "#0000A8",
    "green-168": "#00A800",
    "cyan-168": "#00A8A8",
    "red-168": "#A80000",
    "purple-168": "#A800A8",
    "yellow-168": "#A8A800",
    "white-168": "#A8A8A8",
    "orange-168": "#A85600",
    "black-255": "#000000",
    "blue-255": "#0000FF",
    "green-255": "#00FF00",
    "cyan-255": "#00FFFF",
    "red-255": "#FF0000",
    "purple-255": "#FF00FF",
    "yellow-255": "#FFFF00",
    "white-255": "#FFFFFF",
    "orange-255": "#FFA800",
    "black": "#000000",
    "white": "#FFFFFF"
  }
  function renderImage(img, parent, px=5, sx=10){
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const pixelSize = px;
    const width = Math.floor(img.width / pixelSize);
    const height = Math.floor(img.height / pixelSize);

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(img, 0, 0, width, height);

    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data

    const container = parent
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    container.style.gap = '0px';
    container.style.fontSize = "7px"
    container.style.width = `${width*sx}px`
    container.style.height = `${height*sx}px`

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      let rgb = rgbToHex(r,g,b);

      let color = getClosestColor(rgb,colors);

      const pixelDiv = document.createElement('div');
      pixelDiv.style.width = sx+"px";
      pixelDiv.style.height = sx+'px';
      pixelDiv.style.backgroundColor = `${colors[color]}`;
      
      container.appendChild(pixelDiv);
    }
  }

  // document.addEventListener("DOMContentLoaded",e=>{ // Example script
  //   let img = new Image();
  //   img.src = `https://static.vecteezy.com/system/resources/thumbnails/045/806/718/small/print-test-cmyk-calibration-illustration-with-color-test-for-cyan-magenta-yellow-black-and-many-colors-vector.jpg`;
  //   img.crossOrigin = "anonymous";

  //   img.addEventListener("load",e=>{
  //     renderImage(img, document.querySelector(".container"),10,5)
  //   })
  // })
