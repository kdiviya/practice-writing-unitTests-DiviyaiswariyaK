//create an empty array to hold the items in the cart.
let carts = [];


//Adds an item to the cart.
function addItem(itemName, qty) {

    if (qty > 0) {
        carts.push({name: itemName, quantity: qty}); 
        console.log("Items added:");
        return carts;
    }

    else {
       return "Invalid input. Item not added";
    }
    
}

//Removes an item from the cart.
function removeItem(carts, itemName) {

     let index = carts.findIndex(cart => cart.name === itemName); //find the index of the removed element

     if (index >= 0) {
        console.log("Updated items:");
        carts.splice(index, 1); 
        return carts; // remove the particular index element
     }

     else {
        return "Item not found";
     }
    
}

//Returns the total number of items in the cart.
function getTotalItems(carts) {

        console.log(`Total items in the cart`);
        return carts.length;
    
}

//export the modules
module.exports = {addItem, removeItem, getTotalItems, carts};



