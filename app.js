var btnNext = document.getElementById("Next");
var opContainer = document.getElementById("outputCont");
var billamt = document.getElementById("bill").value;

btnNext.addEventListener("click", validate1);

function validate1() {
    console.log(Number(billamt));
}