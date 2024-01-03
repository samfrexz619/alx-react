const $ = require('jquery');

$(function(){
  let para1 = $("<p>Holberton Dashboard</p>");
  let para2 = $("<p>Dashboard data for the students</p>");
  let para3 = $("<p>Copyright - Holberton School</p>");

  $("body").append(para1, para2, para3);
});
