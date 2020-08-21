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
let token = duplicate(actor.data.token);
token.x = Math.round(local.x);
token.y = Math.round(local.y);
canvas.tokens.createMany(token);
