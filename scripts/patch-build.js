const fs = require('fs');

fs.copyFile('docs/index.html', 'docs/404.html', (err) => {
    if (err) {
        console.error('index.html -> 404.html copy failed:');
        throw err;
    }
});
