let counter = 0;

function increamentCounter() {
    counter++;
    console.log(counter);
}

// setInterval(increamentCounter, 1000)

const fs = require('fs');


const data = "Harshakdfjaldsfkjakfdj"
fs.writeFile('a.txt', data, function(err) {
    console.log(err);
})

fs.readFile('a.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
    }
    console.log(data);
})

let a = 0;
function syncSleep() {
    for (let index = 0; index < 10000000; index++) {
        a++;
    }
}

syncSleep();