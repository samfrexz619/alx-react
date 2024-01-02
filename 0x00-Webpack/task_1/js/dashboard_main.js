import $ from 'jquery';
import debounce from 'lodash/debounce';

function addElements () {
  $('<p>').text('Holberton Dashboard').appendTo('body');
  $('<p>').text('Dashboard data for the students').appendTo('body');
  $('<button>').text('Click here to get started').appendTo('body');
  $('<p>').attr('id', 'count').appendTo('body');
  $('<p>').text('Copyright - Holberton School').appendTo('body');
};

function updateCounter () {
  const counter = parseInt($('#count').text()) || 0;
  counter++;
  $('#count').text(`${counter} clicks on the button`);
};

$(function () {
  addElements();
  $('button').on('click', debounce(updateCounter, 100));
});
