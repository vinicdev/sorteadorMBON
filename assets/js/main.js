let result = [];
let numberInitial = 0;
let numberFinal = 0;
let incrementNumber = 0;
let resultText = document.querySelector('#result');
let previousResult = document.querySelector('#previousResult');

function getNumber() {
    numberFinal = document.querySelector('#finalNumber').value; 
    
    $('.container__initial').addClass('hide');

    if(incrementNumber === 0) {
        removeContainer();
    }

    getRandom(numberFinal);
}

function removeContainer() {
    $('.container__box').addClass('hide');
    $('.raffleBtn').addClass('show');
    incrementNumber++;
}

function getRandom(max) {
    const randomNumber = Math.floor(Math.floor(Math.random() * max + 1)); 

    if(randomNumber === 0) {
        getNumber();
    } else {
        verifyNumber(randomNumber);   
    }

}

function verifyNumber(testNumber) {
    if(result.length != 0) {
        let resultVerify = result.includes(testNumber);

        if(resultVerify == false) {
            result.push(testNumber);
            getPrint(testNumber);
        } else {
            getNumber();
        }
    } else {
        result.push(testNumber);
        getPrint(testNumber);
    }
}

function getPrint(valueFinal) {
    $('.container__textResult').addClass('show');
    
    let changingPosition = result.slice(0).reverse();
    const data = changingPosition.map((num) => {
        return `
            <li>
                ${num}
            </li>
        `
    })
    .join(' - ');

    resultText.innerHTML = valueFinal;
    previousResult.innerHTML = data;
}