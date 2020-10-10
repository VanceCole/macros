/**
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

/* ---------------------------------------------------- */

/**
 * Very simple dialog to prompt confirmation
 * after user clicks button, confirmation will be boolean for yes/no
 */
let confirmation = await Dialog.confirm({
  title: 'Example Confirm',
  content: `<p>Are you sure?</p>`,
});

/* ---------------------------------------------------- */

/**
 * Very simple dialog to request a user input
 * Requires 0.7x
 */
let myValue = await Dialog.prompt({
  content: `<input type="text">`,
  callback: (html) => html.find('input').val() 
})

/* ---------------------------------------------------- */

/**
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
      <div class="form-group">
        <label for="exampleSelect">Example Select</label>
        <select name="exampleSelect">
          <option value="option1">Option One</option>
          <option value="option2">Option Two</option>
          <option value="option3">Option Three</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleColor">Example Color</label>
        <input class="color" type="text" name="exampleColor" value="#ff6400">
        <input type="color" value="#ff6400" data-edit="exampleColor">
      </div>
      <div class="form-group">
        <textarea name="exampleText" placeholder="Enter Text"></textarea>
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
        let input = html.find('[name="exampleInput"]').val();
        let select = html.find('[name="exampleSelect"]').val();
        let color = html.find('[name="exampleColor"]').val();
        let text = html.find('[name="exampleText"]').val();
        console.log(input, select, color, text);
      }
    },
  },
  default: 'yes',
  close: () => {
    console.log('Example Dialog Closed');
  }
}).render(true)

/* ---------------------------------------------------- */

/**
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