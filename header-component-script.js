/*fedex-header || properties & attributes: h_width, h_height, h_backgroundcolor, h_border*/

class Header extends HTMLElement {
static get observedAttributes() {return ['h_width', 'h_height', 'h_backgroundcolor', 'h_border']; }

constructor() {
super();
var shadow = this.attachShadow({mode: 'open'});
var div = document.createElement('div');  
var style = document.createElement('style');  
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
customElements.define('fedex-header', Header);

function updateStyle(elem) {
  var shadow = elem.shadowRoot;
  var childNodes = shadow.childNodes;
  for(var i = 0; i < childNodes.length; i++) {
    if(childNodes[i].nodeName === 'STYLE') {   //building the inline element style
      childNodes[i].textContent = 'div {' +
                          ' width: ' + elem.getAttribute('h_width') + 'px;' +     
                          ' height: ' + elem.getAttribute('h_height') + 'px;' +
                          ' background-color: ' + elem.getAttribute('h_backgroundcolor') + ';' +
						  ' border: ' + elem.getAttribute('h_border') +
						 ';}'
						   
    }
  }
}
header = document.createElement('fedex-header');
header.setAttribute('h_width','500');
header.setAttribute('h_height','100');    
header.setAttribute('h_backgroundcolor','slateblue');
header.setAttribute('h_border','thick solid silver');
 
//note: you can build the custom component imperativly in code or declaritivly on the page with attributes
//document.body.appendChild(header);

   

 