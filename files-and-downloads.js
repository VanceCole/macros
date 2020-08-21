// Download file to client
saveDataToFile(JSON.stringify({ test: 'hello' }), "application/json", "test.json");

// Read file from client
const input = $('<input type="file">')
input.on("change", async () => {
  const file = input[0].files[0];
  if (!file) return;
  let contents = await readTextFromFile(file)
  console.log(contents);
});
input.trigger('click');