/*
 * Create and share an image popout
 */
let actor = game.actors.getName('Steve');
let ip = new ImagePopout(actor.data.img, { uuid: actor.uuid });
ip.render(true); // Display for self
ip.shareImage(); // Display to all other players
