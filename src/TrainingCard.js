// dependencies / things imported
import { LitElement, html, css } from 'lit';

// EXPORT (so make available to other documents that reference this file) a class, that extends LitElement
// which has the magic life-cycles and developer experience below added
export class TrainingCard extends LitElement {
  // a convention I enjoy so you can change the tag name in 1 place
  static get tag() {
    return 'rename-me';
  }

  // HTMLElement life-cycle, built in; use this for setting defaults
  constructor() {
    super();
    this.need = 'all need to succeed';
    this.cardData = [
      {
        name: 'Ethan',
        image: './image/abc.jpg',
        age: '20',
        hometown: 'Downingtown, PA',
        major: 'Cybersecurity',
      },
      {
        name: 'Khory',
        image: './image/abc.jpg',
        age: 'tbd',
        hometown: 'tbd',
        major: 'tbd',
      },
      {
        name: 'Perry',
        image: './image/abc.jpg',
        age: 'tbd',
        hometown: 'tbd',
        major: 'tbd',
      },
      {
        name: 'Andrew',
        image: './image/abc.jpg',
        age: 'tbd',
        hometown: 'tbd',
        major: 'tbd',
      },
    ];
    this.name = '1';
    this.image = '2';
    this.age = '3';
    this.powernum = '4';
    this.power = '5';
  }

  // properties that you wish to use as data in HTML, CSS, and the updated life-cycle
  static get properties() {
    return {
      need: { type: String, reflect: true },
      cardData: { type: Array },
      name: { type: String },
      image: { type: String },
      age: { type: String },
      powernum: { type: String },
      power: { type: String },
    };
  }

  // updated fires every time a property defined above changes
  // this allows you to react to variables changing and use javascript to perform logic
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === 'need' && this[propName] === 'joy') {
        this.classList.add('joyful');
      }
    });
  }

  // Lit life-cycle; this fires the 1st time the element is rendered on the screen
  // this is a sign it is safe to make calls to this.shadowRoot
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
  }

  // HTMLElement life-cycle, element has been connected to the page / added or moved
  // this fires EVERY time the element is moved
  connectedCallback() {
    super.connectedCallback();
  }

  // HTMLElement life-cycle, element has been removed from the page OR moved
  // this fires every time the element moves
  disconnectedCallback() {
    super.disconnectedCallback();
  }

  // CSS - specific to Lit
  static get styles() {
    return css`
      :host {
        display: block;
      }
      :host([need='joy']) {
        color: yellow;
        background-color: black;
      }
    `;
  }

  // HTML - specific to Lit
  render() {
    return html`
      <h1>Make me awesome</h1>
      <ul>
        ${this.cardData.map(item => html`<li>${item.name}</li>`)}
      </ul>
      <slot></slot>
    `;
  }

  // HAX specific callback
  // This teaches HAX how to edit and work with your web component
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`../lib/rename-me.haxProperties.json`, import.meta.url).href;
  }
}
