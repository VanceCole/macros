class MyFormApplication extends FormApplication {
  constructor(exampleOption) {
    super();
    this.exampleOption = exampleOption;
  }

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['form'],
      popOut: true,
      template: `myFormApplication.html`,
      id: 'my-form-application',
      title: 'My FormApplication',
    });
  }

  getData() {
    // Return data to the template
    return {
      msg: this.exampleOption,
      color: 'red',
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
  }

  async _updateObject(event, formData) {
    console.log(formData.exampleInput);
  }
}

window.MyFormApplication = MyFormApplication;

/**
 * To open your application
 */

new MyFormApplication('example').render(true);

/**
 * myFormApplication.html
 */
<form class="flexcol">
  <div class="form-group">
    <label for="exampleInput">Example Input</label>
    <input type="text" name="exampleInput" style="color: {{color}}" value="{{msg}}">
  </div>
  <footer class="sheet-footer flexrow">
    <button type="submit" name="submit">
        <i class="fa fa-check"></i> OK
    </button>
  </footer>
</form>
