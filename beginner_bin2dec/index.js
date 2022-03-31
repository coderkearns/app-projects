function convertBinaryToDecimal(target) {
    if (!validateInput(target.value)) {
        return outputText("Invalid input");
    }
    const binary = target.value.split(" ");
    let output = []
    for (let binNumber of binary) {
        if (binNumber.length > 0) {
            output.push(parseInt(binNumber, 2));
        }
    }
    outputText(output.join(" "));
}

function outputText(text) {
    document.getElementById("output").innerHTML = text;
}

function validateInput(input) {
    if (input == "") return true
    // The function should contain only 0s,1s and spaces
    // The function should not contain any other characters
    return /^[0-1\s]+$/.test(input);
}
