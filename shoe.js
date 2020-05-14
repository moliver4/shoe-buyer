  
const click = (id) => {
    const select = document.getElementById(id);
    if (select === null ) return;
    select.selectedIndex = 4;
    console.log(select.value)
    const text = document.getElementById("AddToCartText")
    if (text.textContent !== 'Sold Out') {
        const addButton = document.getElementById("AddToCart")
        addButton.disabled = false
        addButton.click()
        console.log('Added to Cart')
        setTimeout(clickCart, 500);
    }
    
}

const clickCart = () => {
    document.getElementsByClassName("site-header__cart")[0].click();
    if (window.location.href.indexOf("cart") != -1) {
        location.reload();
    }
}
setTimeout(click("ProductSelect-product-template-option-0"), 300)

//   setInterval(() => {
    // click("ProductSelect-product-template");

//   }, 300);
//   console.log("here");