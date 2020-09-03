/**
 * Using update() to update a single entity
 * this example toggles the hidden property of the
 * first selected unit
 */
let token = canvas.tokens.controlled[0];
token.update({
  hidden: !token.data.hidden
})

/**
 * Using updateMany() to update all tokens on a scene
 * this example sets the hidden property to false,
 * revealing any hidden units
 */
let updates = canvas.tokens.placeables.map(token => {
  return {
    _id: token.id,
    hidden: false  
  }
});
canvas.tokens.updateMany(updates);