// Long method :---

function resultColor(color1 , color2) {
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("orange");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;

        case "blue":
            switch (color2) {
                case "red":
                    console.log("purple");
                    break;
                case "yellow":
                    console.log("green");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;

        case "yellow":
            switch (color2) {
                case "blue":
                    console.log("green");
                    break;
                case "red":
                    console.log("orange");
                    break;
                default:
                    console.log("Invalid color combination");
                    break;
            }
            break;
        default:
            console.log("Invalid color combination");
            break;
    }
}


resultColor("red", "blue");    // Output: purple
resultColor("yellow", "blue");  // Output: green
resultColor("red", "yellow");  // Output: orange
resultColor("red", "green");    // Output: Invalid color combination


console.log("****************************************************");

// Short ethod :---
function colorMixer(color1 , color2) {
    switch (`${color1}-${color2}`) {
        case "red-blue":
        case "blue-red":
            console.log("purple");
            break;
        
        case "red-yellow":
        case "yellow-red":
            console.log("orange");
            break;
        case "blue-yellow":
        case "yellow-blue":
            console.log("green");
            break;
        default:
            console.log("Invalid color combination");
            break;
    }
}

colorMixer("red", "blue");    // Output: purple
colorMixer("yellow", "blue");  // Output: green
colorMixer("red", "yellow");  // Output: orange
colorMixer("red", "green");    // Output: Invalid color combination