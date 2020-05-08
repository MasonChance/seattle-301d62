'use strict';
// global $

// jquery the function is so important, that it gets the $ as its variable name, anyone could have claimed this, but jquery won it


// jquery getters (gets things)
const personTemplate = $('#personTemplate');

console.log(personTemplate);
// jquery when it finds ANYTHING it returns an array like object
// it is not an array

// jquery setters change things
const h1Element = $('h1');
console.log(h1Element);
h1Element.text('Marlene was here'); // text used as a setter
console.log(h1Element.text()); // text used as a getter

console.log('id', h1Element.attr('id'));// method attr used as a getter
h1Element.attr('id', 'gingerTheDog'); // method attr used as a setter

// $.prototype.attr = function(attrName, newAttrValue){
//   if(newAttrValue){
//     //set the attribute to something new
//   } else {
//     // return the attribute
//   }
// }

// all jquery methods return the thing that the method was ran on

const divs = $('div');
console.log('divs', divs);
const divs2 = divs.text('haha i changed you'); // the return value of this i the jquery obj that the text method was run on.
console.log('divs2', divs2);

divs.text('lets go back to this').attr('class', 'red').fadeOut(10000);

console.log($('form').children());


console.log($('h1').nextUntil($('form')));

$('h1').on('click', function(){
  $('h1').attr('class', 'red');
  $('h1').css('color', 'blue');
  $('form').toggle();
});

$('form').on('submit', function(event){
  event.preventDefault();

  // this === event.target
  console.log(this.number.value);
  console.log( $(this) );
  // $(this) is analagous to event.target, but it is the jquery version
});

$('body').on('click', 'div', function(){
  console.log($(this).text());
});






