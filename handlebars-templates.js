/**
 * Example using handlebars templates in a module
 */

// Preload and/or register handlebars templates and/or partials
Hooks.once('init', () => {
  loadTemplates([
    'modules/mymodule/templates/my-template.html',
    'modules/mymodule/templates/my-partial.html'
  ]);
});

// Pass values to handlebars template and get rendered result
let myGreeting = 'Hello';
let myUser = 'Steve';
const myHtml = await renderTemplate(`/path/to/my-handlebars.html`, { myGreeting, myUser });


// my-template.html
<div class="my-template">
  <h1>{{ myGreeting }}, {{ myUser }}</h1>
  {{> 'modules/mymodule/templates/my-partial.html' }}
</div>

// my-partial.html
<p>This is a partial, {{ myUser }}.</p>

// Result
<div class="my-template">
  <h1>Hello, Steve</h1>
  <p>This is a partial, Steve.</p>
</div>

/**
 * Example getting and inject html from handlebars template
 *   to existing application
 */
// Whatever application hook, renderMeasuredTemplateConfig is just an example
Hooks.on('renderMeasuredTemplateConfig', async (app, html) => {
  // Example value you want to pass to your handlebars template
  const myVar = 'Example value to be passed to handlebars';
  // Path to module templates
  const tpl = '/modules/mymodule/templates/my-handlebars.html';
  // Get the handlebars output
  const myHtml = await renderTemplate(tpl, { myVar });

  // Find form elements and inject their counterparts
  // Slightly complicated example here to show how to find a form element when
  //   it only has a name and not a class or ID, but any jQuery selector works
  const target = $(html).find('[name="fillColor"]').parent();
  // Inject your handlebars template (can also use .before() of course)
  target.after(myHtml);
});