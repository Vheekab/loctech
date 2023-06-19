let toggleProducts2 = document.getElementById("products-toggle")

function showToggle2() {
    toggleProducts2.style.display = "block"
}

function hideToggle2() {
    toggleProducts2.style.display = "none"
}

let email = "victor@gmail.com"
let password = 123456

let myEmail = document.getElementById("email-value")
let myPassword = document.getElementById("password-value")
let afterForget = document.getElementById("after-forget")

function signInFunction() {
    let emailVal = myEmail.value
    let passwordVal = myPassword.value

    if (emailVal == email && passwordVal == password) {
        afterForget.style.display = "none"
        window.location = '/index.html'
    }
    
    else {
        afterForget.style.display = "block"
    }
}

let showDrop1 = document.getElementById("footer-dropdown1")
let showDrop2 = document.getElementById("footer-dropdown2")
let showDrop3 = document.getElementById("footer-dropdown3")
let showDrop4 = document.getElementById("footer-dropdown4")

function showDropdown1() {
    if (showDrop1.style.display === "none") {
        showDrop1.style.display = "block"
    }

    else {
        showDrop1.style.display = "none"
    }
}

function showDropdown2() {
    if (showDrop2.style.display === "none") {
        showDrop2.style.display = "block"
    }

    else {
        showDrop2.style.display = "none"
    }
}

function showDropdown3() {
    if (showDrop3.style.display === "none") {
        showDrop3.style.display = "block"
    }

    else {
        showDrop3.style.display = "none"
    }
}

function showDropdown4() {
    if (showDrop4.style.display === "none") {
        showDrop4.style.display = "block"
    }

    else {
        showDrop4.style.display = "none"
    }
}

let hiddenMenu = document.getElementById('hidden-menu')

function hamburgerMenu() {
    if (hiddenMenu.style.display === "none") {
        hiddenMenu.style.display = "block"
    }

    else {
        hiddenMenu.style.display = "none"
    }
}

function returnHome() {
    window.location = '/index.html'
}