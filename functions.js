function getCO(phoneNum) {
    var controlOffice;
    try {
        controlOffice = between(phoneNum, ")", "-");
        controlOffice = controlOffice.trim();
        if (controlOffice.length == 3 && Number(controlOffice) && controlOffice.charAt(1) != "e") {
            return controlOffice;
        }
        else {
            throw new Error("Invalid CO code: " + controlOffice);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}
/**
 * Removes part of a string after a substring
 * @throws {Error} If start is not found
 * @param   {string} string The original string
 * @param   {string} start  The starting string
 * @returns {string} The remaining string
 */
function after(string, start) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    return string.slice(startAt);
}
/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode) && areaCode.charAt(1) != "e") {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Returns a line code from a phone number (###) ###-####
 * @throws {Error} If format is incorrect
 * @param   {string} phoneNum The phone number
 * @returns {string} The line code
 */
function getLineCode(phoneNum) {
    var lineCode;
    try {
        lineCode = after(phoneNum, "-");
        areaCode = lineCode.trim();
        if (lineCode.length == 4 && Number(lineCode) && lineCode.charAt(1) != "e" && lineCode.charAt(2) != "e") {
            return lineCode;
        }
        else {
            throw new Error("Invalid line code: " + lineCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}
/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getLineCode(phoneNum);
        outputText = "Your line code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Displays whether a given phone number is valid
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayValidation(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    try {
        var areaCode = getAreaCode(phoneNum);
        var lineCode = getLineCode(phoneNum);
        var controlOffice = getCO(phoneNum);
        outputText = "Valid phone number: " + phoneNum;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

function displayCO(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var controlOffice = getCO(phoneNum);
        outputText = "Your CO code is " + controlOffice;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
