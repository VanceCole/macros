// Send chat message
ChatMessage.create({ content: 'Hello World!' });

// Send chat message under an alias
ChatMessage.create({ content: "Blah blah blah", speaker: { alias: "Steve" } });

// Send chat message emote as a given actor
let actor = game.actors.getName('Ancient Red Dragon');
let speaker = ChatMessage.getSpeaker({ actor });
ChatMessage.create({
  speaker,
  content: "...turns his head toward Steve",
  type: CHAT_MESSAGE_TYPES.EMOTE
},
{ chatBubble: true });