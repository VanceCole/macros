/**
 * Example provided by @cole
 * 
 * Cast ray and detect wall collisions between 2 tokens
 */
const A = canvas.tokens.placeables.find(t => t.name === "Renee");
const B = canvas.tokens.placeables.find(t => t.name === "Brutus");

const ray = new Ray({ x: A.x, y: A.y }, { x: B.x, y: B.y });
const collisions = WallsLayer.getWallCollisionsForRay(ray, canvas.walls.blockVision);

const collided = collisions.length > 0;

console.log(collided)