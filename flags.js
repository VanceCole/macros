// Create module flag on a scene
await canvas.scene.setFlag('myModule', 'myFlag', 'myValue');

// Retrieve module flag on a scene
let x = canvas.scene.getFlag('myModule', 'myFlag');

// Unset a module flag on a scene
await canvas.scene.unsetFlag('myModule', 'myFlag');

