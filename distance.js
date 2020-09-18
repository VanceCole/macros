/**
 * Get euclidean distance between two placeable objects
 */
let a = canvas.tokens.placeables[0];
let b = canvas.tokens.placeables[1];
let dist = canvas.grid.measureDistance(a, b);

/**
 * Gets distance between two placeable objects
 * for example, tokens, using 5e grid rules
 * @param {Placeable} one 
 * @param {Placeable} two 
 */
function get5eGridDist(one, two) {
  let gs = canvas.grid.size;
  let d1 = Math.abs((one.x - two.x) / gs);
  let d2 = Math.abs((one.y - two.y) / gs);
  let dist = Math.max(d1, d2);
  dist = dist * canvas.scene.data.gridDistance;
  return dist;
}
let a = canvas.tokens.placeables[0];
let b = canvas.tokens.placeables[1];
let dist = get5eGridDist(a, b);


/**
 * Gets distance between two placeable objects
 * for example, tokens, using 5e ALTERNATE grid rules (5-10-5 movement rule)
 * @param {Placeable} one 
 * @param {Placeable} two 
 */
function get5eGridDistAlt(one, two) {
  let gs = canvas.grid.size;
  let d1 = Math.abs((one.x - two.x) / gs);
  let d2 = Math.abs((one.y - two.y) / gs);
  let maxDim = Math.max(d1, d2);
  let minDim = Math.min(d1, d2);
  let dist = (maxDim + Math.floor(minDim / 2)) * canvas.scene.data.gridDistance;
  return dist;
}
let a = canvas.tokens.placeables[0];
let b = canvas.tokens.placeables[1];
let dist = get5eGridDistAlt(a, b);
