let leftBox = document.getElementById("left-box")
let rightBox = document.getElementById("right-box")

let arr = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z",
    "!","@","#","$","%","^","&","*","(",")","-","_",
    "=","+","[","]","{","}","|",";",":","'",'"',
    ",",".","<",">","?","/"
]

function generatePasswords() {
    leftBox.textContent = generatePassword()
    rightBox.textContent = "eg<" + generatePassword()
}

function generatePassword() {
    let password = ""
    for (let i = 0; i < 16; i++) {
        let rand = Math.floor(Math.random() * arr.length)
        password += arr[rand]
    }
    return password
}
