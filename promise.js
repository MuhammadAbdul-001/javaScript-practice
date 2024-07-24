// const myReceipt = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('Here is your ice cream Sir')
//     }, 2000);
// });
// myReceipt.then((resolveValue)=>{
//     console.log(resolveValue);
// })

// const rejectMyReceipt = new Promise((resolved, reject)=>{
//     setTimeout(()=>{
//         reject('You  rejected this code')
//     },4000)
// });
// rejectMyReceipt.catch(reject=>console.log(reject));


// //EXERCISES
// //console.log('Program Started');
// let newPromise = new Promise((resolved, reject)=>{
//     setTimeout(() => {
//         resolved('step one complete')
//     }, 2000);
// });
// //console.log(newPromise);
// //console.log('Program in progress');
// // newPromise.then((value)=>{
// //     console.log(value);
// //     return 'Step 2 completed'
// // }).then((value)=>{
// //     setTimeout(() => {
// //         console.log(value);
// //     }, 3000);
// // });

// //EX#
// console.log('Program Started');
// let exThree = new Promise((resolved, reject)=>{
//     setTimeout(() => {
//         resolved ({data: 'Hello friend', error:null})
//     }, 2000);
// })
// console.log(exThree);
// exThree.then((value)=>{
//     console.log(value);
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve('First promise chain fulfil')
//         }, 2000);
//     })
// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve('second promise chain fulfil')
//         }, 2000);
//     })
// }).then((value)=>{
//     console.log(value);
// });

// const Promise1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(10)
//     }, 4000);
// });
// const Promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(20)
//     }, 6000);
// });
// Promise.all([Promise1, Promise2]).then(value=>{
//     console.log(value)
//     console.log(value[0]+value[1]);
// })

// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = ()=>{
//         callback(script)
//     }
//     document.head.append(script)
// }

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => console.log(commits[0].commit.author.name));


  //commits => console.log(commits[0].author.login)


  // fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  // .then(response => response.json())
  // .then(response => console.log(response.author))


let theNew = new Promise((resolve, reject)=>{
  reject(new Error('This code was rejected'))
});
theNew.catch(rejectValue => {
  console.log(rejectValue.message);
}) //okay

//SAME AS
let withThrow = new Promise((resolve, reject)=>{
  throw (new Error('This code was rejected again'))
});
withThrow.catch(rejectValue => {
  console.log(rejectValue.message);
}) //okay

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));
// console.log(requests);
// let urls = [1, 2, 3, 4];
// let smt = urls.map(url=> url*2);
// console.log(smt);

let smt = fetch('https://api.github.com/users/iliakan')
smt.then(sm=>console.log(sm.status, sm.json()))

Promise.race([
  new Promise((resolve, reject)=> setTimeout(()=>{resolve(1)},3000)),
  new Promise((resolve, reject)=> setTimeout(()=>{reject(2)},300)),
  new Promise((resolve, reject)=> setTimeout(()=>{resolve(3)},500))
]).then(value=> console.log(value)).catch(err=>console.log(err))
