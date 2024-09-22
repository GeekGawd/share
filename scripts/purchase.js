function setNativeValue(element, value) {
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    prototypeValueSetter.call(element, value);

    element.dispatchEvent(new Event('input', { bubbles: true }));
}

function clickBookButton() {

    var input = document.querySelector('input[name="pincode"]');
    setNativeValue(input, '500049');
    
    var button = document.querySelector('#homedelivery-check-pincode-button');
    button.click();

    // Set value for the first input (Line 1)
    setTimeout(() => {
        var line1 = document.querySelector('input[name="line1"]');
        setNativeValue(line1, 'B3-1006, Myscape Sanctuary');
    }, 200);

    // Set value for the second input (Line 2)
    setTimeout(() => {
        var line2 = document.querySelector('input[name="line2"]');
        setNativeValue(line2, 'Bikshapati Nagar');
    }, 200);

    // Set value for the third input (Landmark)
    setTimeout(() => {
        var landmark = document.querySelector('input[name="landmark"]');
        setNativeValue(landmark, 'Near Novo Hotel');
    }, 200);


    // setTimeout(() => {
    //     const lastNameInput = document.querySelector('input[name="lastName"]');
    //     setNativeValue(lastNameInput, 'Singh');
    // }, 200);

    // setTimeout(() => {
    //     const mobileInput = document.querySelector('input[name="mobile"]');
    //     setNativeValue(mobileInput, '7017453065');
    // }, 200);


    setTimeout(() => {
        var proceedButton = document.querySelector('#homedelivery-proceed-to-pay-button');
        proceedButton.click();
    }, 1000);


}
  
setTimeout(function() {
    console.log("suyash was here")
    clickBookButton();
}, 500);
  