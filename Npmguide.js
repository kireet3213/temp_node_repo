// npm- comes with node
// np-- version

// local dependency- use it only in this particular project
// npm -i <packagename>

//global dependency- use it in any project
//npm install -g

//package.json- manifest file that stores important information about the project
//npm init (step by step)
// npm init -y (everything default)

const _ = require('lodash')
const items= [1,[45,[458,[781]]]]
const newitems= _.flattenDeep(items)
console.log(newitems);