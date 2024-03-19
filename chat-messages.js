// Send chat message
ChatMessage.create({ content: 'Hello World!' });

// Send chat message under an alias
ChatMessage.create({ content: "Blah blah blah", speaker: { alias: "Steve" } });

// Send chat message emote as a given actor
let actr = game.actors.getName('Ancient Red Dragon');
ChatMessage.create({
  speaker: {actor: actr},
  content: "...turns his head toward Steve",
  type: CHAT_MESSAGE_TYPES.EMOTE
});

// Whisper to player by id
ChatMessage.create({
  content: `Hello`,
  whisper: ["2UAYUrmMnLCEBiJm"]
});

// Whisper players by name
ChatMessage.create({
  content: `Hello`,
  whisper: ChatMessage.getWhisperRecipients('Steve', 'Stella'),
});

// Whisper GM(s)
ChatMessage.create({
  content: `Hello`,
  whisper: ChatMessage.getWhisperRecipients('GM'),
});
