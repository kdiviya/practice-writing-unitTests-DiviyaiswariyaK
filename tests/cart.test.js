//import the module cart.js
const cartApp = require('../cart.js');

//Test addItem() for validate the inputs.
describe("Add item test suite", function() {

    beforeEach(() => { //Assign the carts length to 0  for each test case to validate multiple sceanrios.
        cartApp.carts.length = 0;
    });

    //Testcase to check whether the new item is added with valid name and quantity
    test("Positive Test: Add a new item with a valid name and quantity.", function() {
        cartApp.addItem("Banana", 5); 
        expect(cartApp.carts).toEqual([{name:"Banana", quantity:5}]);     
    });

    //Testcase to check the message if the quantity is neagtive number.
    test("Negative Test: Add a new item with negative quantity.", function() {
        let result = cartApp.addItem("Apple", -10); 
        expect(result).toBe("Invalid input. Item not added"); 
    })

    //Testcase to check the message if the quantity is 0.
    test("Edge Case: Add an item with a quantity of 0.", function() {
        let result = cartApp.addItem("Apple", 0); 
        expect(result).toBe("Invalid input. Item not added"); 
    })

});

//Test removeItem() for validate the inputs.
describe("Remove item test suite:", () => {

    beforeEach(() => { //Assign the carts to below items for each test case to validate multiple sceanrios.
        cartApp.carts = [
            {name: "Apple", quantity: 5},
            {name: "Banana", quantity: 7},
            {name: "Orange", quantity: 8},
            {name: "Milk", quantity: 2}
        ]
    });

    //Testcase to check whether the existing item is removed.
    test("Positive Test: Remove an existing item from the cart.", () => {
        cartApp.removeItem(cartApp.carts,"Banana");
        expect(cartApp.carts).toEqual([{name: "Apple", quantity: 5}, {name: "Orange", quantity: 8},
            {name: "Milk", quantity: 2}]);
    });

    //Testcase to check the message "Item not found" for the items which is not in the cart.
    test("Negative: Attempt to remove an item not in the cart.", () => {
        cartApp.removeItem(cartApp.carts, "Pears");
        expect(cartApp.removeItem(cartApp.carts, "Pears")).toBe("Item not found");

    }); 

    //Testcase to remove the last item in the cart.
    test("Edge Case: Remove the last item from the cart.", () => {
        let result = cartApp.removeItem(cartApp.carts, "Milk");
        expect(result).toEqual([{name: "Apple", quantity: 5},  {name: "Banana", quantity: 7},{name: "Orange", quantity: 8}]);

    });

});

//Test getTotalItems() for validate the inputs.
describe("Get total number of items test suite", () => {

    beforeEach(() => { //Assign the carts to below items for each test case to validate multiple sceanrios.
        cartApp.carts = [
        {name:"Apple", quantity:5},
        {name:"Banana", quantity:3},
        {name:"Grapes", quantity:10},
        {name: "Milk", quantity: 2},
        {name: "Pizza Sauce", quantity:50},
        {name: "Yoghurt", quantity:400}
        ]

});

    //Testcase to calucate the total number of items in the cart.
    test("Positive: Calculate the total number of items correctly.", () => {
        //let total = cartApp.getTotalItems(cartApp.carts);
        expect(cartApp.getTotalItems(cartApp.carts)).toBe(6);
    });

    //Testcase to calculate the total number of items if the cart is empty.
    test("Negative: Handle an empty cart.", () => {
        cartApp.carts = [];
        //let total = cartApp.getTotalItems(cartApp.carts);
        expect(cartApp.getTotalItems(cartApp.carts)).toBe(0);
    });

    //Testcase to calculate the total number of items with large quantities.
    test("Edge Case: Calculate with large quantities.", () => {
        let total = cartApp.getTotalItems(cartApp.carts);
        expect(total).toBe(6);
    });

});

/*output:
> practice-writing-unittests-diviyaiswariyak@1.0.0 test
> jest

  console.log
    Items added:

      at Object.log [as addItem] (cart.js:10:17)

  console.log
    Updated items:

      at Object.log [as removeItem] (cart.js:26:17)

  console.log
    Updated items:

      at Object.log [as removeItem] (cart.js:26:17)

  console.log
    Total items in the cart

      at Object.log [as getTotalItems] (cart.js:40:17)

  console.log
    Total items in the cart

      at Object.log [as getTotalItems] (cart.js:40:17)

  console.log
    Total items in the cart

      at Object.log [as getTotalItems] (cart.js:40:17)

 PASS  tests/cart.test.js
  Add item test suite
    ✓ Positive Test: Add a new item with a valid name and quantity. (9 ms)
    ✓ Negative Test: Add a new item with negative quantity.
    ✓ Edge Case: Add an item with a quantity of 0. (1 ms)
  Remove item test suite:
    ✓ Positive Test: Remove an existing item from the cart. (1 ms)
    ✓ Negative: Attempt to remove an item not in the cart.
    ✓ Edge Case: Remove the last item from the cart. (1 ms)
  Get total number of items test suite
    ✓ Positive: Calculate the total number of items correctly. (3 ms)
    ✓ Negative: Handle an empty cart. (1 ms)
    ✓ Edge Case: Calculate with large quantities.

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.186 s, estimated 1 s
Ran all test suites.
*/