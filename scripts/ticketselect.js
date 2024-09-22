function clickAddButton() {
    const flexDivs = Array.from(document.querySelectorAll('div')).filter(div => {
        const style = window.getComputedStyle(div);
        return style.display === 'flex' && style.flexDirection !== 'column';
    });

    for(let element of flexDivs){
        if (element.textContent && element.textContent.includes('P2')){
            const addButton = element.querySelector('[data-id="add-tickets"]');
            try {
                addButton.click();
            } catch (error) {
                continue; 
            }
            const nextElement = addButton.nextElementSibling;
            const childElements = nextElement.children;
    
            const addElement = childElements[2];
    
            for(let i = 0; i < 7; i++) {
                addElement.click();
            }
        }
    }

    setTimeout(() => {
        console.log('Executed after 50ms');
    }, 50);

    const proceedButton = document.getElementById("booking-proceed-button");
    proceedButton.click();
}

let addButtonInterval = setInterval(clickAddButton, 100);
