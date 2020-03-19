import { LitElement, html } from 'lit-element';

const actions = ['foo', 'bar', 'baz'];

class ExampleComponentController extends LitElement {
  buttonClicked(e) {
    console.log(`Click event data: ${e.detail.eventCategory}|${e.detail.eventAction}`);
  }

  formSubmitted(e) {
    console.log(`Submit event data: ${e.detail.eventCategory}|${e.detail.eventAction}`);
  }

  render() {
    return html`
      <example-component
        .eventActions=${actions}
        .eventCategory="CustomTracker"
        @buttonClicked=${this.buttonClicked}
        @formSubmitted=${this.formSubmitted}></example-component>
    `;
  }
}

customElements.define('example-component-controller', ExampleComponentController);
