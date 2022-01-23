// File sync synchronous approachclear
const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')// if we dont use utf8 encoding, it returns buffer
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second);
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' } //by using this we append to file
 
)

console.log(' first writefile gets executed only then this log gets executed')
console.log('starting the next one')
