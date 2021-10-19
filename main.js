// //setting default attribute to disabaled for less button
// document.querySelector(".less").setAttribute("disabled", "disabled");
// document.querySelector(".rateLess").setAttribute("disabled", "disabled");
//taking value to increment and decrement input value
// let valueCount;

// let investVal = 500;
// //setting invest value
// let investVal = 500;

// function totalInv(){
//     let total =valueCount * investVal;

//     console.log(total)
// }

// function addFunc() {
//   document.getElementById("principalText").stepUp(500);
// }
console.log("This Script Is not meant for Commercial Use... cONTENT cREATOR rEZAK aLI");
let displayTotal = document.querySelector(".totalInvestment");
let displayMaturity = document.querySelector(".futureValue");

function calculate() {
  // document.getElementById("principalText").stepUp(500);
  let principal = document.getElementById("principalText").value;

  console.log("principle" + " " + principal);

  var period = document.getElementById("noofyears").value;
  //  var freq = parseFloat(document.getElementById("frequency").value);
  var freq = 1;
  var rateofreturn = document.getElementById("rateText").value;
  if (isNaN(principal)) {
    alert("Please enter Amount Invested in each Installment");
  } else if (isNaN(period)) {
    alert("Please enter No of Years");
  } else if (isNaN(freq)) {
    alert("Please enter Frequency");
  } else if (isNaN(rateofreturn)) {
    alert("Please enter Rate of Return");
  } else {
    var instalment_amount = principal;
    var no_of_compounding_periods = (12 / freq) * period;
    var int_rate_per_period = rateofreturn / (12 / freq) / 100;
    var total_amount_invested = period * instalment_amount * 12;
    var expected_amount_on_maturity =
      instalment_amount * ((Math.pow(1 + int_rate_per_period, no_of_compounding_periods) - 1) / int_rate_per_period) * (1 + int_rate_per_period);

    let amtExpect = Math.round(expected_amount_on_maturity);

    nfObject = new Intl.NumberFormat("en-IN");
    outputTotal = nfObject.format(total_amount_invested);
    outputMaturity = nfObject.format(amtExpect);
    displayTotal.innerHTML = `₹${outputTotal}`;
    displayMaturity.innerHTML = `₹${outputMaturity}`;

    //   document.getElementById(
    //     "totalInvested"
    //   ).value = total_amount_invested.toFixed(2);

    //   document.getElementById(
    //     "expectedAmount"
    //   ).value = expected_amount_on_maturity.toFixed(2);
    //   let diff = expected_amount_on_maturity - total_amount_invested;
    //   console.log(diff);
    //   console.log(expected_amount_on_maturity);
  }
}

//plus button
document.querySelector(".add").addEventListener("click", function () {
  //getting value of input

  document.getElementById("principalText").stepUp(500);
  let principal = document.getElementById("principalText").value;

  // valueCount = document.querySelector(".principalText").value;

  // //input value incremented by 1
  // valueCount.stepUp(500);

  // //setting increment input value
  // document.querySelector(".principalText").value = valueCount;

  if (principal > 1) {
    document.querySelector(".less").removeAttribute("disabled");
    document.querySelector(".less").classList.remove("disabled");
  }
  calculate();
});

//Minus button
document.querySelector(".less").addEventListener("click", function () {
  //getting value of input
  document.getElementById("principalText").stepDown(500);
  let principal = document.getElementById("principalText").value;
  // valueCount = document.querySelector(".text").value;

  // //input value incremented by 1
  // valueCount--;

  // //setting increment input value
  // document.querySelector(".text").value = valueCount;

  if (principal == 500) {
    document.querySelector(".less").setAttribute("disabled", "disabled");
  }
  calculate();
});

//select button
document.querySelector("#noofyears").addEventListener("change", function () {
  noOfYears = document.querySelector("#noofyears").value;
  calculate();
});

//RATEplus button
document.querySelector(".rateAdd").addEventListener("click", function () {
  //getting value of input

  document.getElementById("rateText").stepUp(1);
  let rate = document.getElementById("rateText").value;

  // valueCount = document.querySelector(".principalText").value;

  // //input value incremented by 1
  // valueCount.stepUp(500);

  // //setting increment input value
  // document.querySelector(".principalText").value = valueCount;

  if (rate > 1) {
    document.querySelector(".rateLess").removeAttribute("disabled");
    document.querySelector(".rateLess").classList.remove("disabled");
  }
  calculate();
});

//RATEMinus button
document.querySelector(".rateLess").addEventListener("click", function () {
  //getting value of input
  document.getElementById("rateText").stepDown(1);
  let rate = document.getElementById("rateText").value;
  console.log(rate);
  // valueCount = document.querySelector(".text").value;

  // //input value incremented by 1
  // valueCount--;

  // //setting increment input value
  // document.querySelector(".text").value = valueCount;

  if (rate == 1.5) {
    document.querySelector(".rateLess").setAttribute("disabled", "disabled");
  }
  calculate();
});

document.querySelector("#principalText").addEventListener("change", function () {
  calculate();
});

document.querySelector("#rateText").addEventListener("change", function () {
  calculate();
});
