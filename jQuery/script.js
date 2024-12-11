// hide the links and change it to a new nav menu when page resizes

//1. create select items and append dynamically
// thus jq object is not part of DOM
var $select = $("<select></select>");
// now appedn it in the menu
$("#menu").append($select);

//2. Cycle over each a link in html and create a mew select option and append in select
$("#menu a").each(function(){
var $anchor = $(this);
// create an option
  
var $option = $("<option></option>");
  
  // now here again we need to check the anchor if it has the class selected. if so we want to alter the option to have selected attr
  
if($anchor.parent().hadClass("selected")){

  // in thus case when you resize the page and seect the option from dropdown and click button, it will redlect the selected value page.
  
  // if support is selected amd you click button, page will display Button
$option.prop("selected", true);
  
}
  // set the option val yo the href
  $option.val($anchor.attr("href"));
// oow set option text to be rqual to anchor text
  
  $option.text($anchor.text());
  
  $select.append($option);

});

//3. then create a button/
var $button = $("<button>Show</button>");
// append it to the menu
$("#menu").append($button);

// click event
$button.click(function(){
  // get the option value here
  window.location = $select.val();

});
//on select of the option value and button click it will go the desire html