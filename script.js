let cartBtns=document.querySelectorAll('.add-to-cart');
  cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
  });

  updateTotal();

  function removeItem(){
    if(confirm('Are Your Sure to Remove')){
      let title=this.parentElement.querySelector('.title').innerHTML;
      itemList=itemList.filter(el=>el.title!=title);
      this.parentElement.remove();
      loadContent();
    }
  }
  function changeQty(){
    if(isNaN(this.value) || this.value<1){
      this.value=1;
    }
    loadContent();
  }
  let itemList=[];
  function addCart(){
    let food=this.parentElement;
    let title=food.querySelector('.title').innerHTML;
    let price=food.querySelector('.price').innerHTML;
    let imgSrc=food.querySelector('.food-img').src;
    //console.log(title,price,imgSrc);
    
    let newProduct={title,price,imgSrc}
   
    //Check Product already Exist in Cart
    if(itemList.find((el)=>el.title==newProduct.title)){
     alert("Product Already added in Cart");
     return;
    }else{
     itemList.push(newProduct);
    }
    let newProductElement= createCartProduct(title,price,imgSrc);
let element=document.createElement('div');
element.innerHTML=newProductElement;
let cartBasket=document.querySelector('.cart-content');
cartBasket.append(element);
loadContent();
}

function addToCart(element) {
	var productParent = $(element).closest('div.product-item');

	var price = $(productParent).find('.price span').text();
	var productName = $(productParent).find('.productname').text();
	var quantity = $(productParent).find('.product-quantity').val();

	var cartItem = {
		productName: productName,
		price: price,
		quantity: quantity
	};
	var cartItemJSON = JSON.stringify(cartItem);

	var cartArray = new Array();
	// If javascript shopping cart session is not empty
	if (sessionStorage.getItem('shopping-cart')) {
		cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
	}
	cartArray.push(cartItemJSON);

	var cartJSON = JSON.stringify(cartArray);
	sessionStorage.setItem('shopping-cart', cartJSON);
	showCartTable();
}
function changeNumberOfUnits(action, id) {
  let item=products[id];
  console.log(item);
cart = cart.map((item) => {
  let numberOfUnits = item.numberOfUnits;

  if (item.id === id) {
    if (action === "minus" && numberOfUnits > 1) {
      numberOfUnits--;
    } else if (action === "plus" && numberOfUnits < item.instock) {
      numberOfUnits++;
    }
  }

  return {
    ...item,
    numberOfUnits,
  };
});
}