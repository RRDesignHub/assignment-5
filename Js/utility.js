function getInputValueById(id){
  const inputValue = document.getElementById(id).value;
  const inputNum = parseFloat(inputValue);

  return inputNum;
}

function getTextValueById(id){
  const inputValue = document.getElementById(id).innerText;
  const inputNum = parseFloat(inputValue);

  return inputNum;
}