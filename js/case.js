/*stape-1
addEventListener nea id call kora
get value inside the inputField(inpitField)
convert the  String to an Integer
increment the previous value
then set the newCaseNumer




*/

function updateCaseNumber(isIncress, elementID) {

    const caseNumberfield = document.getElementById(elementID);
    const caseNumberString = caseNumberfield.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newcaseNumber;
    if (isIncress) {
        newcaseNumber = previousCaseNumber + 1;

    }
    else {
        newcaseNumber = previousCaseNumber - 1;

    }

    caseNumberfield.value = newcaseNumber;
    return newcaseNumber;


}

function updateCaseTotalNumber(valueid, number, Idnumber) {
    const casTotalPrice = valueid * number;
    const caseTotaoElement = document.getElementById(Idnumber);
    caseTotaoElement.innerText = casTotalPrice;

}
function getTextElementById(valueID) {
    const phoneTotalElement = document.getElementById(valueID);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentphntotal = parseInt(currentPhoneTotalString);
    return currentphntotal;
}
function CalculationEasy(elementIdvalue, value) {
    const subTotalElement = document.getElementById(elementIdvalue);
    subTotalElement.innerText = value;
}
function Subcalculation() {
    const currentphntotalValue = getTextElementById('case-total');
    const currentblacktotal = getTextElementById('black-total');
    const currentTotal = currentphntotalValue + currentblacktotal;
    CalculationEasy('Sub-total', currentTotal);
    //TEX
    const tex = (currentTotal * 0.1).toFixed(2);
    const currenttex = parseFloat(tex);
    CalculationEasy('tax', tex);
    //FinalTotal
    const FinalAmount = currentTotal + currenttex;
    CalculationEasy('Total', FinalAmount);


}
function TEX() {

}
document.getElementById('btn-case-plous').addEventListener('click', function () {
    const newCasNumber = updateCaseNumber(true, 'case-number-fild');
    updateCaseTotalNumber(newCasNumber, 59, 'case-total');
    //subcalculation
    Subcalculation();



})
document.getElementById('btn-case-minus').addEventListener('click', function () {

    const newCasNumber = updateCaseNumber(false, 'case-number-fild');
    updateCaseTotalNumber(newCasNumber, 59, 'case-total');
    //subcalculation
    Subcalculation();

})
document.getElementById('btn-black-plas').addEventListener('click', function () {
    const newCasNumber = updateCaseNumber(true, 'black-number-fild');
    updateCaseTotalNumber(newCasNumber, 1219, 'black-total');
    //subcalculation
    Subcalculation();


})
document.getElementById('btn-black-minus').addEventListener('click', function () {

    const newCasNumber = updateCaseNumber(false, 'black-number-fild');
    updateCaseTotalNumber(newCasNumber, 1219, 'black-total');
    //subcalculation
    Subcalculation();
})