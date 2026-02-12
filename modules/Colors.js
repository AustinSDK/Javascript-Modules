/*
 * Programmed by Austin, with help of ai.
 * JSDelivr Link: https://cdn.jsdelivr.net/gh/AustinSDK/Javascript-Modules@main/modules/Colors.js
*/
function getClosestColor(color, colors){ // {"blue-168": "#hex"} // as hex
    function hexToString(hexx) {
        // Convert hex to decimal number directly
        return parseInt(hexx, 16).toString();
    }

    function splitHexRGB(hex) {
        hex = String(hex).replace("#", "");

        let r = hex.substring(0, 2);
        let g = hex.substring(2, 4);
        let b = hex.substring(4, 6);

        r = hexToString(r);
        g = hexToString(g);
        b = hexToString(b);

        return `${r},${g},${b}`;
    }

    function getDistance(rgb1,rgb2){
        rgb1 = rgb1.split(",")
        rgb2 = rgb2.split(",")
        return Math.sqrt(
            Math.pow(
                rgb1[0]-rgb2[0],
                2
            ) + Math.pow(
                rgb1[1]-rgb2[1],
                2
            ) + Math.pow(
                rgb1[2]-rgb2[2],
                2
            )
        )
    }
    
    let smallestKey = null;
    let smallestDistance = 9999;
    for (_key of Object.keys(colors)){
        let _color = colors[_key];
        let distance = getDistance(splitHexRGB(color),splitHexRGB(_color))
        if (smallestDistance > distance){
            smallestDistance = distance;
            smallestKey = _key;
        }
    }
    return smallestKey
}
