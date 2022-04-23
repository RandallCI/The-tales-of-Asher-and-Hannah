// Page navigation javascript





//Navigate through the pages of story one.
//Check if the DOM has been loaded before querying for HTML elements..
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
//Navigate through the story titles.
//Check if the DOM is loaded before querying for HTML elements.
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('li').forEach(function(li) {
    li.onclick = function() {
      if (document.querySelector('#home')) {
        window.location.href = '/cover_page.html';
      }
      if (document.querySelector('#tale_one')) {
        window.location.href = 'The_first_tale/story_one_page_one.html';
      }
     
    }
  })
})