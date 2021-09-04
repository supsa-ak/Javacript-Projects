// console.log('js proj 3 sep calculator');

function computeLoan(){
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest_rate').value;
    const months = document.querySelector('#months').value;
    // const interest = (amount * (interest_rate * 0.01)) / months;
    // let payment = ((amount / months) + (amount * (interest_rate * 0.01))).toFixed(2); //
    // console.log('hi');
    let payment = (((amount) + ( (amount * (interest_rate * 0.01)) )) /months);
    // console.log('this is amount', amount);
    // console.log('this is int rate', interest_rate);
    // console.log('this is months', months);
    // console.log('ans is ',  (((amount) + ( (amount * (interest_rate * 0.01)) ) /months)))
    console.log('p is ', payment);
    console.log('amt si ',amount);
    console.log('intere rate si ',interest_rate);
    console.log('month is', months);
    
    // console.log('interesrt is ',   (amount * (interest_rate * 0.01)) );

    // document.querySelector('#payment').innerHTML = `EMI = ${payment}`;
}