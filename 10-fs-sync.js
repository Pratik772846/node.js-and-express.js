const {readFileSync,writeFileSync}=require('fs');


// same as above
// const fs=require('fs');
// fs.read
console.log('start')
const first = readFileSync('./content/subfolder/first.txt','utf8')
const second = readFileSync('./content/subfolder/second.txt','utf8')

// console.log(first,second)
writeFileSync(
    './content/subfolder/result-sync.txt',
    `Here is the result : ${first} , ${second}`,
    {flag:'a'} //rewrites the same line again
)
console.log('done')
console.log('starting the next task')