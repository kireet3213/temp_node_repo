//file sync asynchronous approach
const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => { //if we remove utf-8 encoding we will get buffer in result 
  if (err) {
    console.log(err)
    return
  }
  const first = result
  //console.log(first);
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task') // o/p== start
// starting next task
// done with this task
// in async approach before file handling first it logs 'starting next task' 