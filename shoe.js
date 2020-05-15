  
const click = (id) => {
    const select = document.getElementById(id);
    if (select === null ) return;
    for(let i = 0;i < select.options.length;i++){
        if(select.options[i].value == '10' ){
            select.options[i].selected = true;
        }
    }
    // select.selectedIndex = 4;
    console.log(select.value)

    setTimeout(checkText, 100)
}
const checkText=()=>{    
    const text = document.getElementById("AddToCartText")
    if (text.textContent !== 'Sold Out') {
        // clearInterval(interval)
        const addButton = document.getElementById("AddToCart")
        addButton.disabled = false
        addButton.click()
        console.log('Added to Cart')      
        setTimeout(clickCart, 300);
    } else {
        console.log('reloading')
        setTimeout(location.reload(), 1000);
    }
    
}

const clickCart = () => {
    document.getElementsByClassName("site-header__cart")[0].click();
    if (window.location.href.indexOf("cart") != -1) {
        location.reload();
        // clearInterval(interval)
    }
}

const linkCheck = () => {
    if (window.location.href.indexOf("products") == -1) {
        console.log('stopped here')
        // clearInterval(interval)
        return;
    }
    console.log('on product page')
    click("ProductSelect-product-template-option-0")
    
}


// setTimeout(click("ProductSelect-product-template-option-0"), 300)

setTimeout(linkCheck, 1000);
//   console.log("here");