'use strict';

//website should render dogimages
// name, image_url, hobbies



function DogImage(name, image_url, hobbies){
  this.name = name;
  this.image_url = image_url;
  this.hobbies = hobbies;
}
// we would like to render this to the page
DogImage.prototype.renderWithJquery = function(){
  // in vanilla js we would create a div, then a p tag and img, and p tag and wire them together
  const $dogTemplateClone = $('li:first-child').clone(); // returns an exact copy in jquery of the targetted element
  console.log($dogTemplateClone);

  // i am going to change the elements in the clone
  // selects the p tag inside the jquery element it is called on
  $dogTemplateClone.find('p').text(this.hobbies);
  $dogTemplateClone.find('h4').text(this.name);
  $dogTemplateClone.find('img').attr('src', this.image_url);

  // cd p, touch, .., touch
  // $dogTemplateClone.find('p').text(this.hobbies).parent().find('h4')

  // final result is append the clone
  $('ul').append($dogTemplateClone); // method for appendding is append, it is like appendChild
};

// const odie = new DogImage('Odie', 'https://vignette.wikia.nocookie.net/garfield/images/a/ac/OdieCharacter.jpg/revision/latest?cb=20161218045212', 'Odie does stuff');
// odie.renderWithJquery();

// const clifford = new DogImage('Clifford', 'https://vignette.wikia.nocookie.net/animated-video-games-muscular/images/8/85/Clifford.jpg/revision/latest?cb=20170219230418', 'Being big and red');
// clifford.renderWithJquery();


// $('li:first-child').hide();


// getting data from a json file
// go to that file and get its contents, then run the callback function
$.get('data.json', function(potatoData){ // potatoData is the parameter where jquery.get will put the data from the other file
  console.log(potatoData);
  potatoData.forEach(thing => {
    console.log(thing);
    // thing.renderWithJquery();
    //(re)constitute our object
    // pass them through the constructor
    const newDog = new DogImage(thing.name, thing.image_url, thing.hobbies);
    console.log(newDog);
    newDog.renderWithJquery();
  });
});



// Process to build this app
//  build a template (one list item)
//  define a constructor - based off of the data in the json file
//  define a render prototype method that
//     clone the template, target the first child,
//     replace its content (the img, h4, ptag)
//
//  pull the data from the json file
//  run those literals through the constructor
//  run the render method











// TODO: on ready
