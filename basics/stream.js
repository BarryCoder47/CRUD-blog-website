const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// //on is event lister for data
// readStream.on('data', (chunk) =>{
//     console.log('------NEW CHUNK --------');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(chunk);
// })


//piping (write data to another)
readStream.pipe(writeStream);
