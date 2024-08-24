const fs = require('fs');

fs.readFile('a.txt', 'utf-8', function(err, data) {
    let cleanerData = data.split(' ');
    console.log(cleanerData);
    clear = cleanerData.filter(function(item) {
        return item != "";
    })
    console.log(clear.join(' '));

    fs.writeFile('a.txt', clear.join(' '), function(err) {
        console.log('Successfully');
    })
})