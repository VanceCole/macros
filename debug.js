// Foundry Details
let output = `System:
  Foundry: ${game.data.version}
  System: ${game.system.id} version ${game.system.data.version}
`
// User details
output += `User:
  Role: ${Object.keys(CONST.USER_ROLES)[game.user.role]}
`;

// Scene Details
output += `Scene Details:
  Walls: ${canvas.walls.placeables.length}
  Lights: ${canvas.lighting.placeables.length}
  Tokens: ${canvas.tokens.placeables.length}
  Dimensions: ${canvas.dimensions.width} x ${canvas.dimensions.height}
  Background: ${canvas.background?.img?.texture?.width} x ${canvas.background?.img?.texture?.height}
`;

// Module details
let ct = 0;
game.modules.forEach(m => {
  if (m.active) ct++;
});

output += `Modules:
  Total: ${game.modules.size}
  Enabled: ${ct};
`;

// Browser Details
let gl = canvas.app.renderer.gl;
output += `Browser:
  
  WebGL: ${gl}`;
if (gl) {
output += `
  WebGL Version: ${gl.getParameter(gl.VERSION)} 
  MAX_TEXTURE_SIZE: ${gl.getParameter(gl.MAX_TEXTURE_SIZE)}
`;
}

let d = new Dialog({
  title: `Debug Output`,
  content: `<textarea style="height: 500px" type="text" id="debugmacro">${output}</textarea>`,
  buttons: {
    copy: {
      label: `Copy to clipboard`,
      callback: () => {
        $("#debugmacro").select();
        document.execCommand('copy');
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Close`
    },
  },
  default: "close",
  close: () => {}
});

d.render(true);
