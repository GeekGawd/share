function clickFirstTimePill() {
    const timePills = document.querySelectorAll('[data-id="time-pill"]');

    if (timePills.length > 0) {
  
      timePills[0].click();

      const proceedButton = document.querySelector('[data-id="proceed-date-time"]');
      proceedButton.click();
    }
  }
  
setInterval(clickFirstTimePill, 100);
