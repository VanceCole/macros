let report = {};
let output = '';
function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}

// Foundry Details
report.System = {
  Foundry: game.data.version,
  System: `${game.system.id} version ${game.system.data.version}`,
};

report.User = {
  Role: Object.keys(CONST.USER_ROLES)[game.user.role],
}

report.Scene = {
  Walls: canvas.walls.placeables.length,
  Lights: canvas.lighting.placeables.length,
  Tokens: canvas.tokens.placeables.length,
  Dimensions: `${canvas.dimensions.width} x ${canvas.dimensions.height}`,
  Background: `${canvas.background?.img?.texture?.width} x ${canvas.background?.img?.texture?.height}`,
}

report.Database = {
  Actors: game.actors.size,
  Items: game.items.size,
  Scenes: game.scenes.size,
  Journals: game.journal.size,
  Tables: game.tables.size,
}

// Module details
let ct = 0;
game.modules.forEach(m => {
  if (m.active) ct++;
});

report.Modules = {
  Total: game.modules.size,
  Enabled: ct,
}

// Browser Details
report.Browser = {
  Platform: navigator.platform,
  Vendor: navigator.vendor,
  Agent: navigator.userAgent,
}

// Browser Details
let gl = canvas.app.renderer.gl;
if (gl) {
  report.WebGL = {
    Context: gl.constructor.name,
    GL_Vendor: gl.getParameter(gl.VENDOR),
    Renderer: gl.getParameter(gl.RENDERER),
    WebGL_Version: gl.getParameter(gl.VERSION),
    MAX_TEXTURE_SIZE: gl.getParameter(gl.MAX_TEXTURE_SIZE),
    MAX_RENDERBUFFER: gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
  }
} else {
  report.WebGL = {
    Context: 'FAILED TO GET WEBGL CONTEXT'
  }
}

// If chromium browser we can check memory stats
if (performance?.memory) {
  report.Memory = {
    Heap_Limit: formatBytes(performance?.memory.jsHeapSizeLimit),
    Heap_Total: formatBytes(performance?.memory.totalJSHeapSize),
    Heap_Used: formatBytes(performance?.memory.usedJSHeapSize),
  }
}

for (const [k1, v1] of Object.entries(report)) {
  output += `${k1}:\n`;
  for (const [k2, v2] of Object.entries(v1)) {
    output += `  ${k2}: ${v2}\n`;
  }
}

let d = new Dialog({
  title: `Debug Output`,
  content: `<textarea readonly style="height: 500px" type="text" id="debugmacro">${output}</textarea>`,
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

d.options.width = 600;
d.position.width = 600;
d.render(true);
