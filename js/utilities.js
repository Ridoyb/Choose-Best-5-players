//Common function for get input field value
function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
  }
//Common function for get inner text of the field for replace
  function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
  }

  //Common function set & replace inner text value
  function setTextaValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value.toFixed(2);
  }

  //Error handling function
  function wrongInputCheck(value,field){
    if(value < isNaN(value) || 0 ===true){
        alert("Error!! Please enter a valid number!!! The input can not be negetive or character.");
        const valueAfterWrongInput = '0000';
        setTextaValueById(field,valueAfterWrongInput);
    }
  }