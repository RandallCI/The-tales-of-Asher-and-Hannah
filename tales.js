// Page navigation javascript






//Check if the DOM has been loaded before doing these actions.
document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('button').forEach(function(button) {
        button.onclick = function() {
           if (document.querySelector('#to_page_two')) {
             window.location.href = 'story_one_page_two.html';
           } else if (document.querySelector('#to_page_three')) {
            window.location.href = 'story_one_page_three.html';
           }  else if (document.querySelector('#to_page_four')) {
            window.location.href = 'story_one_page_four.html';
           }  else if (document.querySelector('#to_page_four')) {
            window.location.href = 'story_one_page_four.html';
           }  else if (document.querySelector('#to_page_five')) {
            window.location.href = 'story_one_page_five.html';
           }  else if (document.querySelector('#to_page_six')) {
            window.location.href = 'story_one_page_six.html';
           }  else if (document.querySelector('#to_page_seven')) {
            window.location.href = 'story_one_page_seven.html';
           } else {
            window.location.href = 'story_one_page_one.html';
           }
       
     }
    })
})