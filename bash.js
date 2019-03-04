process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    let cmdString = data.toString().split(" ");
    let cmd = cmdString[0];
    console.log(cmd)
    if (cmd == 'pwd'){
      console.log('test')
      let pwd = process.cwd();
      console.log(pwd)
    }
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt >');

})

