let products = [{"id":101,"name":"Basket Ball","image":"./images/basketball.png","price":150},
{"id":102,"name":"Football","image":"./images/football.png","price":120},
{"id":103,"name":"Soccer","image":"./images/soccer.png","price":110},
    {"id":104,"name":"Table Tennis","image":"./images/table-tennis.png","price":130},
    {"id":105,"name":"Tennis","image":"./images/tennis.png","price":100}];

    let cart=[];
$(document).ready(function(){

    let pro_string="";
    
    let i=0;
     products.forEach(item => {
         pro_string+=`<div class="product">
         <img src='${item.image}' ></img>
         <h3 class="title" href="#"> ${item.name} </h3>
        <div class="price"> <span>Price: ${item.price}</span></div>
        <a class="add-to-cart" href="#" id=${i} onclick="add_to_cart(this.id)">Add To Cart</a>
     </div>`;
         i++;
       
     });
 
     $("#products").html(pro_string);
    }
     );
    

function add_to_cart(id)
{
    let obj=products[id];
 let cartobj=(cart.find(e=>e.pname==obj.name));
 let index=(cart.findIndex(e=>e.pname==obj.name));
    
if(cartobj!=undefined)
{
    cartobj.pquantity=cartobj.pquantity + 1;
    cartobj.pprice+=obj.price;
    cart[index]=cartobj;
}

      else{
        cart.push({
            pimage:obj.image,
            pname:obj.name,
            pquantity:1,
            pprice:obj.price
        });

      }
        
       total_amount(); 
      display();
     
}
function display()
{
    let str="";
    let i=0;
    cart.forEach(element => {
        
        str+=`<tr><td><img src=" ${element.pimage} "></img></td><td> ${element.pname} </td><td><button id= ${i} onclick="minus_one(this.id)"> - </button>
        ${element.pquantity}<button id= ${i}  onclick="plus_one(this.id )"> + </button></td><td>${element.pprice} </td><td>
        <button value='Remove' id=${i} onclick='remove(this.id)'>Remove</button></td></tr>`;
        i++;
    });
    
    $("#product-details").html(str);
}
function plus_one(id)
{
    console.log(id);
    let cartobj=cart[id];
   console.log(cartobj.pprice);
 cartobj.pprice+=cartobj.pprice / cartobj.pquantity;
 console.log(cartobj.pprice);
 cartobj.pquantity+=1;
 cart[id]=cartobj;
    total_amount();
 display();

    
}
function minus_one(id)
{
    let cartobj=cart[id];
   
    cartobj.pprice-= cartobj.pprice /cartobj.pquantity;
    cartobj.pquantity-=1;
    cart[id]=cartobj;
    if(cartobj.pquantity==0)
    {
        remove(id);
    }
    display();
    total_amount();
   
}
function remove(i)
{
    let carobj=cart[i];
    cart.splice(i,1);
    display();
    total_amount();
    
}

function total_amount()
{
let totalprice=0;

cart.forEach(element => {
    totalprice+=1*element.pprice;
    });
$("#totalprice").html("Total price is $" + totalprice);

display();
}
function cartempty()
{
    cart=[];
    display();
    total_amount();
    
}
function checkout()
{
    if(cart.length>0)
    {
        $("#empty").html("Empty Cart").css({
            "margin-top":"20px",
            "margin-left":"1150px",
            "background-color":"red",
            "padding":"10px"
        }).show();
    }
    else
    {
        $("#emptycart").hide();
    }
}
