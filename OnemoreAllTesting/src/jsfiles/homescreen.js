function showAlert(value) {

    switch (value.id) {
        case "blue_bn":
            showPrompt();
            break;

        case "reset_btn":
            removeChild();
            break;
    }
}



function showPrompt() {
    var age = prompt('Enter your age my friend !');
    alert("Your age is " + age);

    var dynamicDiv = document.getElementById('dynamic-div');
    var header = document.createElement('h1');
    header.setAttribute('id', 'header_i');
    header.appendChild(document.createTextNode(age));

    dynamicDiv.appendChild(header).innerHTML();
}

function removeChild() {
    var divdyamic = document.getElementById('dynamic-div');
    var header_new = document.getElementById('header_i');
    divdyamic.remove(header_new);
}