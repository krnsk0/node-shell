let pwdFunc = require('./pwd');
let lsFunc = require('./ls');
let catFunc = require('./cat');
let curlFunc = require('./curl');

// callback function to print output and loop
const done = output => {
  console.log(output);
  process.stdout.write('prompt > ');
};

// run the prompt
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
  // command pieces
  let cmdString = data
    .toString()
    .split(' ')
    .map(e => e.trim());
  let cmd = cmdString[0];
  let args = cmdString.slice(1);

  // code to run commands
  if (cmd === 'pwd') {
    pwdFunc(done);
  } else if (cmd === 'ls') {
    lsFunc(done);
  } else if (cmd === 'cat') {
    catFunc(done, args[0]);
  } else if (cmd === 'curl') {
    curlFunc(done, args[0]);
  }
});
