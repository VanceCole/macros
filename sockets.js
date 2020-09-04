/**
 * Example for using socket events in a module
 * 
 * Note: you **MUST** set in your module manifest:
 *   "socket": true
 * 
 * Example assumes you have created a module called 'mymodule'
 */

// Create a socket event handler to listen to incomming sockets and dispatch to callbacks
game.socket.on(`module.mymodule`, (data) => {
  if (data.operation === 'myEvent') handleMyEvent(data);
  if (data.operation === 'myOtherEvent') handleMyOtherEvent(data);
});

// Emit a socket event
game.socket.emit('module.mymodule', {
  operation: 'myEvent',
  user: game.user.id,
  content: 'Hello',
});

function handleMyEvent(data) {
  console.log(`User [${data.user}] says: ${data.content}`);
}
function handleMyOtherEvent(data) {
  // do something
}
