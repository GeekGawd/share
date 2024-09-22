function clickBookButton() {
    const bookButton = document.getElementById("synopsis-book-button");
  
    if (bookButton) {
      bookButton.click();
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    clickBookButton();
  });
  

setInterval(clickBookButton, 100);