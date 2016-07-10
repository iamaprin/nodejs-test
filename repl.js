/**
 * author:  iamaprin
 * time: 2016/7/10 21:00
 */

/*
const repl = require('repl');
var msg = 'message';
repl.start('> ').context.m = msg;

replServer.on('exit', () => {
    console.log('Received "exit" event from repl!');
    process.exit();
});
*/

const repl = require('repl');

function initializeContext(context) {
    context.m = 'test';
}

var r = repl.start({prompt: '>'});
initializeContext(r.context);

r.on('reset', initializeContext);