function clickBookButton() {
    const bookButton = document.getElementById("synopsis-book-button");
  
    if (bookButton) {
      console.log("Book button found. Clicking the button.");
      bookButton.click();
    } else {
      console.error("Button not found.");
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    clickBookButton();
  });
  

setInterval(clickBookButton, 100);