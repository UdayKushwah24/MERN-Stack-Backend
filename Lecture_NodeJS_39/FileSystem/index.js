let fs = require("fs");
// console.log(fs);

// by using 'fs' object
// we will perform CRUD (CREATE, READ, UPDATE, DELETE).

// CREATE OR WRITE in fs------------------------
let data1 = "File system in node js";
// let data1 = "File system ";
/* fs.writeFile('file1.txt', data1, {
    encoding: "utf-8",
    flag:'w'
}, (err) => {
    if (err) {
        throw err;
    } else {
        console.log('file written successfully..');
    }
}) */

// or

// let data2 = "File system in node js using another method";
// fs.writeFileSync("file1.txt", data2);

// ======================================

// READ in fs
/* fs.readFile(
  "file1.txt",
  {
    encoding: "utf-8", // to avoid buffer
    flag: "r",
  },
  (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  }
); */

// or

// let data = fs.readFileSync("file1.txt");
// console.log(data);
// console.log(data.toString()); // convert the buffer to string(readable form)

// UPDATE =======================================
// fs.appendFile('file1.txt', 'the data is updated', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log(' update data successfully \n');

// })
//or
// fs.appendFileSync('file1.txt','data update using appendfilesync method')

// DELETE or unlink the file-----------------------

// fs.unlink("file1.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('data delete successfully...');
// });

// or

// fs.unlinkSync('file1.txt')
