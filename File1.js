console.log("helo world")

function greet(){
    var massege = "hello"
    console.log(massege)
}

greet()
// console.log(massege)


// Mathematical Operations
 const mathOpration = (a,b) => {
    console.log(a/b)
 }

 mathOpration(10,5)


const logicExp = function(a,b){
    
}


let name = ["Zainab" , "Akram" , "fatima"]
let array = new Array();
array[0] = 0
array[1] = 1
array[2] = 2

// console.log(array)
// array.push(4)
array.slice(1,2)
console.log(array.slice(1,2))


function manageCart() {
  // 🟩 Function scope variable
  let cart = ["Apples", "Bananas", "Mangoes"];
  console.log("Initial Cart:", cart);

  // 🟦 Block 1: Adding items (Block Scope)
  {
    let newItems = ["Grapes", "Oranges"];
    // Add new items after index 1
    cart.splice(2, 0, ...newItems);
    console.log("After Adding:", cart);
  }
  // newItems is not accessible here because of block scope ❌
  // console.log(newItems); // ❌ Error: newItems is not defined

  // 🟨 Block 2: Removing an item (Block Scope)
  {
    let removeIndex = 1;
    let removedItem = cart.splice(removeIndex, 1);
    console.log(`Removed "${removedItem}" from cart`);
    console.log("After Removing:", cart);
  }

  // 🟧 Block 3: Replacing an item (Block Scope)
  {
    let replaceIndex = 2;
    let newItem = "Pineapple";
    cart.splice(replaceIndex, 1, newItem);
    console.log(`Replaced item at index ${replaceIndex} with "${newItem}"`);
    console.log("After Replacing:", cart);
  }

  // 🟪 Block 4: Display Final Cart
  {
    console.log("✅ Final Cart:", cart);
  }
}

// 🟢 Call the function
manageCart();

