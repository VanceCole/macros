// Add 10 temp hp to tokens within 10 units of selected 
let thp = 10;
let dist = 10;
let sel = canvas.tokens.controlled[0];
canvas.tokens.placeables.forEach(token => {
  let d = canvas.grid.measureDistance(sel, token);
  if (d < dist && token.data.disposition === 1) {
    let curthp = token.actor.data.data.attributes.hp.temp;
    if (curthp < thp || curthp == "") {
      token.actor.update({"data.attributes.hp.temp" : thp});
      console.log(`Adding ${thp} temp hp to ${token.name}`);
    }
  }
});
