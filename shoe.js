  
const click = (id) => {
    const select = document.getElementById(id);
    select.selectedIndex = 5;
    console.log(select)
  }
  
  setInterval(() => {
    click("ProductSelect-product-template");

  }, 300);
  console.log("here");