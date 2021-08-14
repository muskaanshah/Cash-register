var btnNext = document.getElementById("next");
var errorBill = document.getElementById("outputBill");
var billamt = document.getElementById("bill");
var btnCheck = document.getElementById("check");
var cashamt = document.getElementById("cash");
var errorCheck = document.getElementById("outputCheck");
var tablereturnchange = document.querySelector("table");
var noofnotes = document.querySelectorAll(".noofnotes");

btnNext.addEventListener("click", validate1);
btnCheck.addEventListener("click", validate2);

var notesavailable = [2000, 500, 100, 20, 10, 5, 1];

function validate1() {
    errorBill.style.display = "none";
    document.getElementsByTagName("img")[0].style.display="none";
    if (Number(billamt.value) <=0) {
        errorBill.innerText = "Enter valid bill amount";
        errorBill.style.display = "block";
        document.getElementsByTagName("img")[0].style.display="block";
    }
    else {
        document.getElementById("checkDiv").style.display = "block";
    }  
}

function validate2() {
    tablereturnchange.style.display = "none";
    errorCheck.style.display = "block";
    document.getElementsByTagName("img")[1].style.display="block";
    if (Number(cashamt.value) < Number(billamt.value)) {
        errorCheck.innerText = "Sorry! Cash given lesser than bill amount";
    }
    else if (Number(cashamt.value) <=0 || Number(billamt.value) <=0 )
    {
        errorCheck.innerText = "Sorry! Invalid cash or bill amount";
    }
    else if (Number(cashamt.value) == Number(billamt.value))
    {
        errorCheck.innerText = "No change to be returned";
    }
    else {
        document.getElementsByTagName("img")[1].style.display="none";
        tablereturnchange.style.display = "inline-table";
        changetoreturn = cashamt.value - billamt.value;
        amountreturned(changetoreturn);
        errorCheck.innerText = "Change to be returned is ₹" + changetoreturn;
    }
}

function amountreturned (change) {
    for (i=0; i<notesavailable.length; i++) {
        var note = Math.floor(change/notesavailable[i]);
        noofnotes[i].innerText = note;
        var change = change % notesavailable[i];
    }

}