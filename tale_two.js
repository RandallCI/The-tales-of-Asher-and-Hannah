


//Navigate through the pages of story one.
//Check if the DOM has been loaded before querying for HTML elements..
document.addEventListener('DOMContentLoaded', function() {

   
 document.querySelectorAll('button').forEach(function(button) {
    button.onclick = function() {
       
       if (document.querySelector('#book_two_page_one')) {
       
         window.location.href = 'story_two_page_two.html';
       } else if (document.querySelector('#book_two_page_two')) {
        window.location.href = 'story_two_page_three.html';
       }  else if (document.querySelector('#book_two_page_three')) {
        window.location.href = 'story_two_page_four.html';
       }  else if (document.querySelector('#book_two_page_four')) {
        window.location.href = 'story_two_page_five.html';
       }  else if (document.querySelector('#book_two_page_five')) {
        window.location.href = 'story_two_page_six.html';
       }  else if (document.querySelector('#book_two_page_six')) {
        window.location.href = 'story_two_page_seven.html';
       }  else if (document.querySelector('#book_two_page_seven')) {
        window.location.href = 'story_two_page_eight.html';
       } else if (document.querySelector('book_two_page_eight')) {
        window.location.href = 'story_two_page_nine.html';
       } else if (document.querySelector('#book_two_page_nine')) {
        window.location.href = "/cover_page.html";
        alert("The End! Well done!");
     }
   }
})

});
  