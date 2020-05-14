  
const click = (id) => {
    const select = document.getElementById(id);
    select.selectedIndex = 4;
    console.log(select.value)
    const addButton = document.getElementById("AddToCart")
    addButton.disabled = false
    addButton.click()
    console.log('clicked')
}

setTimeout(click("ProductSelect-product-template-option-0"), 300)

//   setInterval(() => {
    // click("ProductSelect-product-template");

//   }, 300);
//   console.log("here");