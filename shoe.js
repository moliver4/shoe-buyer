  
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
        console.log('stopped early')
        clearInterval(interval)
        console.log('stopped')
    }
}

const linkCheck = () => {
    if (window.location.href.indexOf("products") == -1) {
        console.log('stopped here')
        clearInterval(interval)
        return;
    }

    click("ProductSelect-product-template-option-0")
    console.log('on product page')
}
// setTimeout(click("ProductSelect-product-template-option-0"), 300)

const interval = setInterval(linkCheck, 300);
//   console.log("here");