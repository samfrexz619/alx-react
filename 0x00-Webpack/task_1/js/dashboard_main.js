import $ from 'jquery';
import debounce from 'lodash/debounce';

function updateCounter () {
  let counter = parseInt($('#count').text()) || 0;
  counter++;
  $('#count').text(`${counter} clicks on the button`);
};

$(function () {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('<p>').attr('id', 'count').appendTo('body');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', debounce(updateCounter, 500));
});
