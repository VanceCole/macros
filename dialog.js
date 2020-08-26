/*
 * Very simple dialog to display info
 */
let d = new Dialog({
  title: 'Example',
  content: `Hello World!`,
  buttons: {
    ok: {
      icon: '<i class="fas fa-check"></i>',
      label: 'Ok',
    },
  }
}).render(true);

/*
 * Example dialog that requests user input, then uses the value
 */
let d = new Dialog({
  title: 'Example',
  content: `
    <form class="flexcol">
      <div class="form-group">
        <label for="exampleInput">Example Input</label>
        <input type="text" name="exampleInput" placeholder="Enter Value">
      </div>
    </form>
  `,
  buttons: {
    no: {
      icon: '<i class="fas fa-times"></i>',
      label: 'Cancel'
    },
    yes: {
      icon: '<i class="fas fa-check"></i>',
      label: 'Yes',
      callback: (html) => {
        let val = html.find('input[name="exampleInput"]').val();
        console.log(`ExampleInput value was: ${val}`);
      }
    },
  },
  default: 'yes',
  close: () => {
    console.log('Example Dialog Closed');
  }
});
d.options.width = 300;
d.position.width = 300;
d.render(true);

/*
 * Dialog that re-renders (stays open) when button is clicked
 * rather than closing
 */
let myContent = function (val) {
  return `
  <div class="main">
    <div class="headline">
      Attack information:
    </div>
    <div class="plain-text">
      <div class="actor" id="currentActor">${val}</div>
    </div>
  </div>
  `
}

let myDialog = new Dialog({
  title: `Example Dialog`,
  content: myContent('Default Value'),
    buttons: {
      update: {
        label: "Update",
        callback: () => {
          myValue = `Example random value: ${Math.random()*100}`;
          myDialog.data.content = myContent(myValue);
          myDialog.render(true);
        }
      }
    },
  },
  {
    id: 'test'
  }
).render(true);