// takes in and controlls the other functions
function getValues() {
    let userString = document.getElementById('userString').value;

    let revString = reverseString(userString);

    displayString(revString);

}
// model of data
function reverseString(input) {
    // input ='apple' strArray = ['a' 'p' 'p' 'l' 'e']
    let revString = '';

    for (let index = input.length - 1; index >= 0; index--) {

        let letter = input[index];

        revString = revString + letter;
    }

    return revString;
    }

// view
function displayString(output) {
    document.getElementById('results').textContent = output;

    let alertBox = document.getElementById('alert');

    alertBox.classList.remove('invisible');
}