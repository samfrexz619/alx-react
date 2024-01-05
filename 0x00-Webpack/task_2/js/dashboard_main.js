import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'


function updateCounter () {
  let counter = parseInt($('#count').text()) || 0;
  counter++;
  $('#count').text(`${counter} clicks on the button`);
};

let debounce = _.debounce(updateCounter, 500);

$(function () {
  $('body').append('<div id="logo"></div>');  
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('<p>').attr('id', 'count').appendTo('body');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', debounce);
});
