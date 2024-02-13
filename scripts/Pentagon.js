function calculatePentagonArea(){
const perimeter = getInputValueById('Pentagon-perimeter')
const apothem = getInputValueById('Pentagon-apothem')
const area = 0.5 * perimeter *apothem;
setInnerTextById('Pentagon-area',area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const innerText = inputField.value;
    const value = parseFloat(innerText);
    return value;
}
function setInnerTextById(elementId,area){
    const element = document.getElementById(elementId)
    element.innerText=area;

}