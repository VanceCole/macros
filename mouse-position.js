// Add listener to game board and report mouse click locations
canvas.app.stage.addListener('pointerdown', event => {
  let pos = event.data.getLocalPosition(canvas.app.stage);
  console.log(`x: ${pos.x}, y: ${pos.y}`);
});

/*
 * Example of getting mouse position when
 * macro is triggered by keyboard event
 * 
 * Creates token of given actor at mouse coordinates
 */
let myActor = "Steve";

let mouse = canvas.app.renderer.plugins.interaction.mouse;
let local = mouse.getLocalPosition(canvas.app.stage);

let actor = game.actors.getName(myActor);
canvas.tokens.dropActor(actor, {
  x: Math.round(local.x),
  y: Math.round(local.y)
});
