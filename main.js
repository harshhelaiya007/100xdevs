const fs = require('fs');

function readFileFn(cb) {
    fs.readFile("a.txt", 'utf-8', function (error, data) {
        cb(data);
    })
}

function onDone(data) {
    console.log('onDone : ==', data);    
}
// readFileFn(onDone)

function promisified() {
    return new Promise((resolve) => {
        fs.readFile("a.txt", 'utf-8', function (error, data) {
            resolve(data);
        })
    })
}

promisified().then((data) => {
    console.log(data);
    console.log('=======================');

})

// => Pending,  resolved
var promiseNew = new Promise(function (resolve) {
    resolve('aksdfjaskdjfn')
});

function onDoneNew() {
    console.log(promiseNew); 
}

promiseNew.then(function() {
    onDoneNew()
})

// Promise

// Promise
