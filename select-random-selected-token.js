// Selects one random token from amongst all selected
let tks = canvas.tokens.controlled;
let r = Math.floor(Math.random()*tks.length);
let sel = tks[r];
canvas.tokens.selectObjects(sel);