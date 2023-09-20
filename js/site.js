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

function copyToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText("abalan0326@gmail.com");
}

function showClipboardMessage() {
    // Swal.fire({
    //     text: "abalan0326@gmail.com",
    //     confirmButtonText: "Copy"
    // }).then(function (result) {
    //     copyToClipboard();
    // });

    Swal.fire({
        html: '<br />abalan0326@gmail.com ',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="bi bi-clipboard"></i> Copy',
    }).then(function (result) {
        copyToClipboard();

        if (result.value === true) {
            Swal.fire({
                html: "<br />Copied to Clipboard!"
            })
        }
    })
}