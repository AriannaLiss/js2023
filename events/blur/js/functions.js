export {blur}

const blur = (e) => {
    printInputValues(e);
    validation(e)
}

const printInputValues = (e) => {
    const p = document.getElementById("test");
    p.innerText += e.target.value + "\n";
}

const validation = (e) => {
    if (e.target.id == "price") { 
        checkPrice(e.target);
        return;
    } 
    (((e.target.type === "tel") && (e.target.value.length == e.target.getAttribute("data-length"))) 
        || ((e.target.type !== "tel") && (e.target.value.length <= e.target.getAttribute("data-length")))) 
            ? makeGreenBorder(e.target)
            : makeRedBorder(e.target)
}

const checkPrice = (price) => {
    cleanBorder(price);
    if (price.value > 0 || price.value === '0'){
        showPrice(price)
    } else if (price.value < 0) {
        deletePrice();
        showWrongPriceMsg(true);
    } else if (price.value === ''){
        deletePrice();
        price.value = '';
    }
}

const showPrice = (price) => {
    document.getElementById("priceView")
        ? document.getElementById("spanPrice").innerText = price.value
        : createPriceView(price);
    price.classList.add("green-text");
    showWrongPriceMsg(false);
}

const createPriceView = (price) => {
    const priceView = document.createElement('div');
    const span = document.createElement("span");
    const del = document.createElement("div");
    
    priceView.id = "priceView";
    span.id = "spanPrice";
    del.id = "deletePrice";

    span.innerText = `You've set price ${price.value}`;
    del.innerText = "X";
    del.addEventListener("click",deletePrice);

    priceView.appendChild(span);
    priceView.appendChild(del);

    price.parentNode.insertBefore(priceView,price);
}

const deletePrice = () => {
    const priceView = document.getElementById("priceView");
    if (priceView) {
        priceView.parentElement.removeChild(priceView);
    }
    const price = document.getElementById("price");
    price.classList.remove("green-text");
}

const showWrongPriceMsg = (toShow) => {
    const wrongPrice = document.getElementById("wrongPrice");
    if (toShow) {
        wrongPrice.classList.remove("hide")
        document.getElementById("price").classList.add("red-border");
    } else {
        wrongPrice.classList.add("hide")
    }
}

const makeGreenBorder = (tag) => {
    tag.classList.add("green-border")
    tag.classList.remove("red-border")
}

const makeRedBorder = (tag) => {
    tag.classList.remove("green-border")
    tag.classList.add("red-border")
}

const cleanBorder = (tag) => {
    price.classList.remove("green-border");
    price.classList.remove("red-border");
}
