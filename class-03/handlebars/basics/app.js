/* global Handlebars, $ */
'use strict';

// Looks a ton like a template literal
// it is basically a template literal, set up as a function
// doesWhat is like a parameter, it will get filled in
var templatePotato = Handlebars.compile('Handlebars <b>{{doesWhat}}</b>');
// execute the compiled template and print the output to the console
// console.log(templatePotato({ doesWhat: 'rocks!' }));
// console.log(templatePotato({ doesWhat : 'is super dooper'}));
// console.log(templatePotato());

var templateGreeting = Handlebars.compile('Yo wazzup, {{name}}. How is your mother, {{mothersName}}. Can you get her to bake {{bakeryDish}} for the upcoming food drive, thanks {{name}}'); // declaration
// name, mothersName, bakeryDish are now all parameters
console.log('Yo wazzup, {{name}}. How is your mother, {{mothersName}}. Can you get her to bake {{bakeryDish}} for the upcoming food drive, thanks {{name}}');
console.log(templateGreeting(
  {
    name : 'Montana',
    mothersName : 'Ellen',
    bakeryDish : 'Apple Crisp',
  }
));
console.log(templateGreeting(
  {
    name: 'Dave',
    mothersName: 'Daveia',
    bakeryDish: 'Banana Bread',
  }
));

var result = templateGreeting(
  {
    name: 'David',
    mothersName : 'Diaaaaanot',
    bakeryDish : 'Cake Neopolitan'
  }
);

console.log(result);


function Dog(name, color, boneCount){
  this.name = name;
  this.color = color;
  this.boneCount = boneCount;
  this.keyword = 'cute';
}

Dog.prototype.handlebarsHi = function(){
  // dogTemplate is now a function
  const dogTemplate = Handlebars.compile('my name is {{name}}, I am a {{color}} puppy. My human gave me {{boneCount}} bones. yeah! {{boneCount}} bones!!!!. Did I mention my name is {{name}}');
  const greeting = dogTemplate(this);


  // const greeting = dogTemplate(
  //   {
  //     name: this.name,
  //     color: this.color,
  //     boneCount: this.boneCount
  //   }
  // );
  console.log(greeting); // this would be an append

};

Dog.prototype.renderWithJquery= function(){
  // find the target, clone it, replace the values
  const clone = $('li:first-child').clone();

  clone.find('h2').text(this.name);
  clone.find('p:nth-child(2)').text(`${this.name} is a big ${this.color} dog with ${this.boneCount} bones`);
  clone.find('p:nth-child(3)').text(`${this.boneCount} bones is a lot of bones`);

  $('ul').append(clone);

};

Dog.prototype.renderWithHandlebars = function() {
  const dogTemplate = Handlebars.compile($('#dogTemplate').html()); // declare the function

  const result = dogTemplate(this); // pass the object through the function

  $('ul').append(result); // append the returned html
};

// text/x-handlebars-template

const ginger = new Dog('Ginger', 'red', 5);
const rufus = new Dog('Rufus', 'eggshell', 99);

ginger.handlebarsHi();
rufus.handlebarsHi();

// ginger.renderWithJquery();
// rufus.renderWithJquery();

ginger.renderWithHandlebars();
rufus.renderWithHandlebars();


function attribution(){
  //1. compile function
  //2 call it, pass it an object as its argument
  //3 put it somewhere
  const template = Handlebars.compile($('#attribution').html());// make the function

  const result = template({company : 'Code Fellows'}); // call it with an object that matches the keys in the template

  $('body').append(result); // append it
}

attribution();
