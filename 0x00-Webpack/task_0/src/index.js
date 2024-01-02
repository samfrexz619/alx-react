const $ = require('jquery');

$(document).ready(function (){
  const para1 = $("<p>Holberton Dashboard</p>");
  const para2 = $("<p>Dashboard data for the students</p>");
  const para3 = $("<p>Copyright - Holberton School</p>");
  
  $("body").append(para1, para2, para3)
});
