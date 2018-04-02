class Square extends HTMLElement {
static get observedAttributes() {return ['w', 'l', 'c']; }

constructor() {
super();
var shadow = this.attachShadow({mode: 'open'});
//you can create a complex component by adding in many different elements.
var div = document.createElement('div'); //div is the square and is built in the update function
var style = document.createElement('style'); //need a style node in the update function to build the inline style
shadow.appendChild(style);
shadow.appendChild(div);
	}

connectedCallback() {
updateStyle(this);
	}

attributeChangedCallback(name, oldValue, newValue) {
updateStyle(this);
	}
}
customElements.define('custom-square', Square);

//this builds the element on the page as a series of dom nodes
function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('w') + 'px;' +     
                          ' height: ' + elem.getAttribute('l') + 'px;' +
                          ' background-color: ' + elem.getAttribute('c');
    }
  }
}

// Create a custom square element
square = document.createElement('custom-square');
square.setAttribute('w','500');
square.setAttribute('l','100');   //hook up setAttribute commands to the design system property box.
square.setAttribute('c','slateblue');
//note: you can build the custom component imperativly in code or declaritivly on the page with attributes
//document.body.appendChild(square);

   

 