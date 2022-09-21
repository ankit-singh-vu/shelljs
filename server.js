// var asyncshell = require('async-shelljs');


// // let a =asyncshell.exec("ls"); 
// let a =asyncshell.exec("cd abc"); 
// console.log(JSON.stringify(a))
// console.log(a)
// console.log(a.stdout)
// console.log(a.stderr)
// console.log(a.code)


// ----------------------- with await


// var asyncshell = require('async-shelljs');
// f1();

// async function f1(){
// // let a =asyncshell.exec("ls"); 
// let a =await asyncshell.exec("cd abc"); 
// console.log(JSON.stringify(a))
// console.log(a)
// console.log(a.stdout)
// console.log(a.stderr)
// console.log(a.code)
// }




// --------------------

// var shell = require('shelljs');


// let b =shell.exec("ls"); 
// // let b =shell.exec("cd abc"); 
// console.log(JSON.stringify(b))
// console.log(b)
// console.log(b.stdout)
// console.log(b.stderr)
// console.log(b.code)


// --------------------with await

var shell = require('shelljs');
f1();
async function f1(){
    let b =await shell.exec("ls"); 
    // let b =shell.exec("cd abc"); 
    console.log(JSON.stringify(b))
    console.log(b)
    console.log(b.stdout)
    console.log(b.stderr)
    console.log(b.code)
}
