/*
 * Load a json file via fetch
 */
fetch('/modules/myModule/module.json')
  .then(response => response.json())
  .then(data => {
    // Do something with the file
    console.log(data)
  });

/*
 * Load a json file via fetch using await
 * (Await is only valid inside an async function)
 */
let response = await fetch('/modules/myModule/module.json');
let data = await response.json();
console.log(data);
