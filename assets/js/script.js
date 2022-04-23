$(document).ready(function () {
    //display current day & time.
   var span = document.getElementById('currentDay');

   function time() {
     var d = moment().format('MMMM Do YYYY, h:mm:ss a');
     span.textContent = d 
   }
 