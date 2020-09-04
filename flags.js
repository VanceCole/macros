// Create module flag on a scene
await canvas.scene.setFlag('myModule', 'myFlag', 'myValue');

// Retrieve module flag on a scene
let x = canvas.scene.getFlag('myModule', 'myFlag');

// Unset a module flag on a scene
await canvas.scene.unsetFlag('myModule', 'myFlag');

// React to changes to flag
Hooks.on('updateScene', (scene, data) => {
  if (hasProperty(data, 'flags.myModule')) {
    console.log(data);
  }
});

// Flags can be arrays, objects, numbers etc as well
// Anything that can be stringified
let data = {
  myString: 'hello',
  myNum: 42,
  myBool: true,
  myArray: ['a','b','c']
}
await canvas.scene.setFlag('myModule', 'myFlag', data);
