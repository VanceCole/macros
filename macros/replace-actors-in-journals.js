(async () => {
  let myfind = game.actors.getName('My NPC');
  let myreplace = game.actors.getName('My PC');
  if (myfind === null || myreplace === null) {
    ui.notifications.error('Could not find one of the actors');
    return;
  }
  let regex = new RegExp(`\@Actor\\[${myfind.id}\\]{${myfind.name}}`, 'g');
  game.journal.entries.forEach(async j => {
    let content = j.data.content;
    if (content.indexOf(myfind.id) === -1) return;
    let newcontent = content.replace(regex, `@Actor[${myreplace.id}]{${myreplace.name}}`);
    await j.update({'content': newcontent});
  });
})();
