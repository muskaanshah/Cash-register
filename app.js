var btnNext = document.getElementById("next");
var opBill = document.getElementById("outputBill");
var billamt = document.getElementById("bill");
var btnCheck = document.getElementById("check");
var cashamt = document.getElementById("cash");
var opChk = document.getElementById("outputCheck");


btnNext.addEventListener("click", validate1);
btnCheck.addEventListener("click", validate2);

function validate1() {
    const bills = billamt.value;
    if (bills <=0)
        opBill.innerText = "Enter valid bill amount";
    else {
        document.getElementById("checkDiv").style.display = "block";
        opBill.style.display = "none";
    }  
}

function validate2() {
    const chkBill = billamt.value;
    const chkCash = cashamt.value;
    if (chkCash < chkBill) 
        opChk.innerText = "Sorry! Cash given lesser than bill amount";
    else if (chkCash <=0 || chkBill <=0 )
        opChk.innerText = "Sorry! Invalid cash or bill amount";
    else 
        console.log("Checking");
}