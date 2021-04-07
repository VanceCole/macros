// Update selected walls to given values
let updates = canvas.walls.controlled.map(w => {
  return {
    '_id': w.id,
    door: 0,
    dir: 0,
    ds: 0,
    move: 1,
    sense: 1,
    sound: 1,
  }
});
canvas.walls.updateMany(updates)