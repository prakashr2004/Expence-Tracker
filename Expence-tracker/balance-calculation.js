var text = document.getElementById("inputtext")
var inputAmount = document.getElementById("inputamout")
var Balance = document.getElementById("blanceamount")
var postiveAount = document.getElementById("Addamount")
var negativeAmmount = document.getElementById("Loseamount")
var submit = document.getElementById("submit")
var Mainlist = document.getElementById("ul")
var r;
var d;
var oi = 0
var helo = 0
var POSTIVETOTAL = 0
var NEGATIVETOAL = 0

submit.addEventListener("click", () => {

    if (text.value.trim() == "" && inputAmount.value.trim() == "") {
        alert("PLESS ENTER YOUR INFORMATION & AMOUNT")
    }
    else {

        var textValue = text.value
        var inputAmountValue = inputAmount.value
        var div = document.createElement("div")
        div.setAttribute("id", "list")
        var parenDiv = document.createElement("div")
        parenDiv.setAttribute("id", "liItem")
      
        var dangerSimple = document.createElement("li")
        dangerSimple.setAttribute("class", "cen")
        dangerSimple.setAttribute("id", "danger")
        dangerSimple.setAttribute("onclick", "cancel(this)")
        dangerSimple.innerHTML = "x"
        var TexVal = document.createElement("li")
        TexVal.innerHTML = textValue
        var AmountPara = document.createElement("li")
        AmountPara.innerHTML = inputAmountValue
        parenDiv.append(dangerSimple, TexVal, AmountPara)
        Mainlist.append(parenDiv)
        text.value = ""
        inputAmount.value = ""

        // parenDiv.addEventListener('mousover',()=> {
        //     // dangerSimple.classList.add('hover');
        //     console.log('hi');
        // });
        // parenDiv.addEventListener('mousout',()=> {
        //     // dangerSimple.classList.remove('hover');
        // });
    }
    calculatin(AmountPara)
})


function calculatin(amount) {
    number = Number(amount.innerHTML)
    if (number >= 0) {
        var c = POSTIVETOTAL += number
        postiveAount.innerHTML = c
        // style.borderRight="2px solid green"
    }
    else if (number <= 0) {
        var n = NEGATIVETOAL -= number
        negativeAmmount.innerHTML = n

    }
    d = Number(postiveAount.innerHTML)
    r = Number(negativeAmmount.innerHTML)
    Balance.innerHTML = d - r

}


function cancel(parent) {
    var trElement = parent.parentElement.lastElementChild
    less = Number(trElement.innerHTML)
    hi(less)
    parent.parentElement.remove();

}
function hi(minize) {
    var Pval = Number(postiveAount.innerHTML)
    var Nval = Number(negativeAmmount.innerHTML)
    if (minize > 0) {
        oi = Pval - minize
        postiveAount.innerHTML = oi
    }
    else if (minize < 0) {
        // console.log(minize)
        helo = minize + Nval
        negativeAmmount.innerHTML = helo
        console.log(helo)
    }

    var P = Number(postiveAount.innerHTML)
    var N = Number(negativeAmmount.innerHTML)

    Balance.innerHTML = P - N
}

Mainlist.addEventListener("mouseover", () => {

})
