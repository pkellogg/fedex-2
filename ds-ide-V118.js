//UTILITY SCRIPTS FOR DESIGN SYSTEM IDE
//3-27-2018 
//PRK 
//called by the ok button in property sheet.  This also uses the global cc which is the color selected from the picker

//ATTRIBUTES
function elementStyle(fxwidth,fxheight,fxbackcolor,fxselelement) { 
document.getElementById(fxselelement).setAttribute("width", fxwidth);
document.getElementById(fxselelement).setAttribute("height", fxheight);
document.getElementById(fxselelement).setAttribute("c", cc);
}

//setting content of slots...called by the ok button in the property box
function textSlot1(fxselelement) 
{
var str = fxselelement;
var res = str.charAt(0);
 //alert(fxselelement);
switch (res) {
    case "H":
	const myInfoBox = document.querySelector('#' + fxselelement);
	myInfoBox.children[1].innerText = $('#setTitle1').val();
	myInfoBox.children[2].innerText = $('#setTitle2').val();
	myInfoBox.children[3].innerText = $('#setTitle3').val();
	break; 
		
	case "C":
    document.getElementById('cardslot1').innerHTML = $('#setTitle1').val();
	document.getElementById('cardslot2').innerHTML = $('#setTitle2').val();
	document.getElementById('cardslot3').innerHTML = $('#setTitle3').val();
    break; 
} 
} 

$(function(){         
$("#image_uploads").change(function(e){ 
 
var selImage = document.getElementById('trashcan').innerHTML;
var id2 = document.getElementById(selImage).id;
var str1 =  "$('#";   
var str2 = "')";
var str3 =  ".attr('src',this.files[0].name)"; 
var res = str1 + id2 + str2 + str3;
//alert(res); 
res;
});
});
 
/*var d = new Date();
timeStamp = "H"  + d.getTime();
var str1 =  '<fedex-header id=';
var str2 =' class="fxheaderclass" onclick="myFunction(this)">';
var res = str1 +  timeStamp  + str2;*/

/*$(function(){        
 
$("#image_uploads").change(function(e){ 

 if(document.getElementById('trashcan').innerHTML == 'fxheaderid'){ 
$('#headerimage').attr('src',this.files[0].name);
}

if(document.getElementById('trashcan').innerHTML == 'fxcardid'){ 
$('#cardimage').attr('src',this.files[0].name);
}

});
});*/
 

//TABS	
$( function() {
    $( "#tabs" ).tabs();
  } );

//SELECTIONS
//Called from inline script in each element with a click on the object  
function myFunction(xx) {
	
    document.getElementById("trashcan").innerHTML = $(xx).attr('id');
	document.getElementById("selecteditem").innerHTML = "<span style='color:white;'>Selected Item ID:</span>" + " " + $(xx).attr('id');
	yy = null;
	yy = $(xx).attr('id');
	//alert(yy);
	uu = document.getElementById('trashcan').innerText;
	//document.getElementById(yy).style.border = 'medium dotted green';
	}

//called from clicking the ok button in the size property sheet
//yy = selected item coming from myFunction
function setsize(pp , kk){
//$("#fxheaderid").width(tt);
//alert("setsize");
$( '#' + yy ).width(pp);
$( '#' + yy ).height(kk);
oo =  yy;
 
//document.getElementById("fxheaderid").style.border = "none";
document.getElementById(oo).style.border = "none";
 
}
 
(function( $ ) {
    'use strict';
})( jQuery );     //protects the jquery shorthand selector $ namespace from other who use it 

var droptarget  //declares a global variable.  It must be declared outside a function to be global 
var mdlGrid

function buildGrid(){
//$("body").append('<DIV class="content-grid mdl-grid" id="mdlGrid"><div id="stuff8" class="mdl-cell mdl-cell--12-col tom paul"></div><div id="stuff9" class="mdl-cell mdl-cell--6-col tom paul" ></div><div id="stuff10" class="mdl-cell mdl-cell--6-col tom paul"></div><div id="stuff"  class="mdl-cell mdl-cell--5-col tom paul" ></div><div id="stuff2" class="mdl-cell mdl-cell--4-col tom paul"></div><div id="stuff3" class="mdl-cell mdl-cell--3-col tom paul"></div><div id="stuff4" class="mdl-cell mdl-cell--5-col tom paul"></div><div id="stuff5" class="mdl-cell mdl-cell--2-col tom paul"></div><div id="stuff6" class="mdl-cell mdl-cell--2-col tom paul"></div><div id="stuff7" class="mdl-cell mdl-cell--3-col tom paul"></div>');
location.reload();
} 

function grid(){
if($('#gridCheck').prop('checked'))
{
buildGrid();
}
else
{
mdlGrid = $('#mdlGrid').remove();
}

}


  

function toggleDisplay(divId) {
 $("#"+divId).toggle();
}

//TOOLTIPS
 //$( function() {

     //$( document ).tooltip();

   //} );

/*$( function() {

    $( document ).tooltip({
		items: "img, [data-geo], [title]",
		content: function() {
		var element = $( this );
		if ( element.is( "[data-geo]" ) ) {
			return "<img src='header.png'><br/><div style='font-size:12px;padding:10px;);'>This is a header.  It's a new HTML 5 tag and can be used in any section on the page. While it's most often used at the top of a section, it can be used within the body of a section. Click on the text to add your own title.</div>";
			}
		}
	});
	} );*/
	
//jQUERY MENU
$( function() {

    $( "#menu" ).menu();

  } );
  
var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open()
{  jsddm_canceltimer();
   jsddm_close();
   ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

function jsddm_close()
{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{  closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
      closetimer = null;}}

$(document).ready(function()
{  $('#jsddm > li').bind('mouseover', jsddm_open)
   $('#jsddm > li').bind('mouseout',  jsddm_timer)});

document.onclick = jsddm_close;

$( init );


function init() {
	 

$('#headericon').draggable( {
 cursor: 'move',
 helper:headerHelper
  })
  
  $('#buttonicon').draggable( {
 cursor: 'move',
 helper:buttonHelper
  })
  
$('#switchicon').draggable( {
 cursor: 'move',
 helper:mdlSwitchHelper
  })
  
  $('#slidericon').draggable( {
 cursor: 'move',
 helper:mdlSliderHelper
  })
  
  $('#squarecardicon').draggable( {
 cursor: 'move',
 helper:SquareCardHelper
  })
  
  $('#textareaicon').draggable( {
 cursor: 'move',
 helper:textAreaHelper
  })
  
$('#paragraphicon').draggable( {
 cursor: 'move',
 helper:paragraphHelper
  })
  
$('#checkboxicon').draggable( {
 cursor: 'move',
 helper:checkboxHelper
  })
  
  $('#radioicon').draggable( {
 cursor: 'move',
 helper:radioHelper
  })
  
  $('#tableicon').draggable( {
 cursor: 'move',
 helper:tableHelper
  })
  
   $('#dropmenuicon').draggable( {
 cursor: 'move',
 helper:dropMenuHelper
  })
  
  $('#navlisticon').draggable( {
	cursor: 'move',
	helper:navlistHelper
	})
  
$('#leaderboardicon').draggable( {
	cursor: 'move',
	helper:navlistHelper
	})

	
//GET ID OF DROP TARGET AND HIGHLIGHT DROPTARGET BORDER IN RED 
 $(function() {
$("body").droppable({
     over: function(event, ui) {
     $('#display').html( 'body' );
     droptarget =  document.getElementById('display').innerHTML;
	 }
});
}); 

//OVER 
$(function() {
$(".mdl-cell").droppable({
     over: function(event, ui) {
	 
     $('#display').html( this.id ).prepend("#");
       droptarget =  document.getElementById('display').innerHTML;
	 nn = this.id;
	 document.getElementById(nn).style.border = "thin red solid";
	  
}
});
});

//OUT 
$(function() {
$(".mdl-cell").droppable({
     out: function(event, ui) {
	 nn = this.id;
	 document.getElementById(nn).style.border = "thin gray solid";
	 }
});
});  
$('body').droppable({drop: handleDropEvent});
} 



 
 
 