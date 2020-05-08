/* global $ Handlebars */
'use strict';
// {
// "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
//   "title": "UniWhal",
//     "description": "A unicorn and a narwhal nuzzling their horns",
//       "keyword": "narwhal",
//         "horns": 1
//   },

function HornImage (img, title, descr, keyword, horns, page){
  this.img = img;
  this.title = title;
  this.descr = descr;
  this.keyword = keyword;
  this.horns = horns;
  this.page = page;
  HornImage.all.push(this);
}

HornImage.shownImages = 'page-1';

HornImage.prototype.render = function(){
  // have html x
  // compile the template function with the html
  const template = Handlebars.compile($('#horn-template').html());
  // call the template function
  const result = template(this);
  // put the result on the page
  $('main').append(result);
};

HornImage.all = [];



function handleJsonData(everythingFromTheJSONFile, pageNumber){
  console.log(everythingFromTheJSONFile);
  everythingFromTheJSONFile.forEach(val => handleConstructingHornImages(val, pageNumber));
  // TODO: grab a dynamic page
  // I need a variable for the page

  // ==== I now have data, lets render ======
  HornImage.all.forEach(imgRusset => imgRusset.render());


}

function handleConstructingHornImages(obj, page){
  // TODO: get access to page// if i need a var in a function, make a param for it
  new HornImage(obj.image_url, obj.title, obj.description, obj.keyword, obj.horns, page);
}


// ===== switch pages ======

const handleSwitchFiles = () => {
  // $('section').toggle();
  $('section').hide();
  if(HornImage.shownImages === 'page-1'){
    HornImage.shownImages = 'page-2';
    $('.page-2').show();
  } else {
    HornImage.shownImages = 'page-1';
    $('.page-1').show();
  }

  //we could increment the 1 in page-1 as a more dynamic version
};



$('#switch').on('click', handleSwitchFiles);

$.get('page-1.json', jsonData => {
  handleJsonData(jsonData, 'page-1');
});
$.get('page-2.json', jsonData => {
  handleJsonData(jsonData, 'page-2');
  $('.page-2').hide(); // this is the last thing, put it as the last thing in the callback function
});



$('#sort').on('click', () => {
  $('main').empty();
  // TODO: need to sort them
  HornImage.all.sort((left, right) => {
    if(left.horns > right.horns){
      return 1;
    } else if (left.horns < right.horns){
      return -1;
    } else {
      return 0;
    }
  });

  HornImage.all.forEach(img => img.render());
  $('section').hide();
  $(`.${HornImage.shownImages}`).show();
});
