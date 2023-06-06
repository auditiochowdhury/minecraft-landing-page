// alert('asdsa')
// let question = prompt("Who's There?")
// if(question === 'Admin'){
//     let adminQuestion = prompt('Password?')
//     if(adminQuestion==='TheMaster'){
//         alert('Welcome!')
//     }else if(adminQuestion === '' || adminQuestion === null){
//         alert('canceled')
//     }else{
//         alert('wrong password')
//     }
// }else if(question ==='' || question === null){
//     alert("Canceled")
// }else{
//     alert('I dont know you')
// }

function add7(n){
    return n + 7
}

function multiply(a, b){
    return a * b
}

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

// function capitalize(str){
//     let newStr = str.toUpperCase()[0]
//     return newStr + str.slice(1).toLowerCase()
    
// }

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

    
}

function lastLetter(string){
    return string.slice(-1)
}
