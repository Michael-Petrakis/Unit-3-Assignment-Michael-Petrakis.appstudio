function Compare(pass1, pass2) {
  if (pass1 == pass2) {
  console.log(`The passwords are the same.`)
  }
else {
  console.log(`The passwords are not the same.`)
  }
}

let password1 = prompt("Enter a password:")
let password2 = prompt("Re-enter a password:")

let passwordCompare = Compare(password1,password2)