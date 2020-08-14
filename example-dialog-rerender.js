// Dialog that re-renders when button is clicked rather than closing
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