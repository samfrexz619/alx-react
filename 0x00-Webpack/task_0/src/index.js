const $ = require('jquery');

function addParagraphs () {
  $('<p>').text('Holberton Dashboard').appendTo('body');
  $('<p>').text('Dashboard data for the students').appendTo('body');
  $('<p>').text('Copyright - Holberton School').appendTo('body');
};

$( function () {
  addParagraphs();
});
