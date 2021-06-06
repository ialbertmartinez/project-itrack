$(function () {
	$("#addItem").click(function(){ 
		$("#itemModal").modal("show"); 
	});

	const itemForm = document.getElementById("itemForm");
	let nItems = document.getElementById("nItems");
	let nTotal = document.getElementById("nTotal");
	var itemFormEl;

	itemForm.addEventListener('submit', handleSubmit, false); // trigger handleSubmit() when form submits

	function handleSubmit(e) {
		e.preventDefault(); // Prevent submitting form
		let inputs = itemForm.querySelectorAll('input');
		let form = {}; // Create an object to store user input as 'key:value' pairs
		itemFormEl = itemForm.elements; // Gather all form elements into a list
		let itemNameForm = document.getElementById("itemName");
		let itemLocationForm = document.getElementById("itemLocation");
		let itemCategoryForm = document.getElementById("itemCategory");
		let itemPriceForm = document.getElementById("itemPrice");
		let itemQtyForm = document.getElementById("itemQty");
		let itemXForm = document.getElementById("itemX");
		// console.log(itemFormEl);
		// Iterate over inputs | construct the form objects key: value pairs
		inputs.forEach(({ name, value }) => { form[name] = value;});
		populateStorage();
		makeItem(form);
		// console.log(form); // -> Code checkpoint
		// populateStorage();
	}
	function populateStorage(){
		let itemID = "item_"+Number(localStorage.count);
		localStorage.setItem("itemName_"+ itemID, itemFormEl["itemName"].value);
		localStorage.setItem("itemLocation_"+ itemID, itemFormEl["itemLocation"].value);
		localStorage.setItem("itemCategory_"+ itemID, itemFormEl["itemCategory"].value);
		localStorage.setItem("itemPrice_"+ itemID, itemFormEl["itemPrice"].value);
		localStorage.setItem("itemQty_"+ itemID, itemFormEl["itemQty"].value);
		localStorage.setItem("itemX_"+ itemID, itemFormEl["itemX"].value);
		makeItem(itemID);
	}

	function makeItem(form){
		let iID = localStorage.count;
		let itemName = document.createTextNode(localStorage.getItem("itemName_"+iID));
		let itemLocation = document.createTextNode(localStorage.getItem("itemLocation_"+iID));
		let itemCategory = document.createTextNode(localStorage.getItem("itemCategory_"+iID));
		let itemPrice = document.createTextNode("$"+localStorage.getItem("itemPrice_"+iID));
		let itemQty = document.createTextNode(localStorage.getItem("itemQty_"+iID));
		let itemX = document.createTextNode(localStorage.getItem("itemX_"+iID));
		
		console.log("itemName is " + localStorage.getItem(itemName));
			// let iLocation = document.createTextNode(formData.itemLocation);
			// let iCategory = document.createTextNode(itemFormEl["itemCategory"].value);
			// let iPrice = document.createTextNode("$"+formData.itemPrice);
			// let iQty = document.createTextNode(itemFormEl["itemQty"].value);
			// let iX = document.createTextNode(formData.itemX);

		// create html elements	
		const itemGrid = document.getElementById('item-grid');
		let itemNode1 = document.createElement("h4");
		let itemNode2 = document.createElement("p");
		let itemNode3 = document.createElement("p");
		let itemNode4 = document.createElement("p");
		let itemNode5 = document.createElement("p");
		let itemNode6 = document.createElement("p");
		var divNode = document.createElement("div");
		itemGrid.appendChild(divNode);
		divNode = itemGrid.lastElementChild;
		divNode.className = "item-block bg-dark text-light col-6 col-sm-2 p-3 mx-2";

		// create textNodes to house user data
		// let iName = document.createTextNode(formData.itemName);
		// let iLocation = document.createTextNode(formData.itemLocation);
		// let iCategory = document.createTextNode(itemFormEl["itemCategory"].value);
		// let iPrice = document.createTextNode("$"+formData.itemPrice);
		// let iQty = document.createTextNode(itemFormEl["itemQty"].value);
		// let iX = document.createTextNode(formData.itemX);
		// console.log("Category: " + itemFormEl["itemCategory"].value);
	
		// append textNode to html Element
		itemNode1.appendChild(itemName);
		itemNode2.appendChild(itemLocation);
		itemNode3.appendChild(itemCategory);
		itemNode4.appendChild(itemPrice);
		itemNode5.appendChild(itemQty);
		itemNode6.appendChild(itemX);		
		
		// place corresponding category class name to category seleected by user
		let cat = localStorage.getItem("itemCategory_" + iID);
		if(cat === "drinks") {
			itemNode3.className = "drinks";
		} else 
		if(cat === "food") {
			itemNode3.className = "food";
		} else
		if(cat === "jewelry") {
			itemNode3.className = "jewelry";
		} else
		if(cat === "clothes") {
			itemNode3.className = "clothes";
		}
		
		// render data to the DOM
		divNode.appendChild(itemNode1);
		divNode.appendChild(itemNode2);
		divNode.appendChild(itemNode3);
		divNode.appendChild(itemNode4);
		divNode.appendChild(itemNode5);
		divNode.appendChild(itemNode6);
		

		
	}
});
/*
To-Do List 6/2/2021
3 IMPORTANT ADDITIONS REQUIRED
	!! Difference between nItems and nTotal !!
	!! example: nItems = 3; nTotal = 12;
	!! breakdown: I have 3 items and 12 items total.
	!! item 1: Coca-Cola: 5 cans
	!! item 2: Sprite: 3 cans
	!! item 3: Mountain Dew-CodeRed: 4 cans
	!! 3 items in inventory | 12 items in Total	
	
	1. Add items to inventory
		X-use a form to allow user to add items to inventory including item quantity
	2. Remove items from inventory
		-auto or manual
			-create a function named 'removeItem'
			-only called automatically or event

			autoatically:  function will be called when the localStorage.count reaches 0
				-decreaseCount method is used to decrement item's individual qty
				-get item qty value and subtract 1
				-check if qty reached 0
					true: call removeItem()
					false: set count to the new value in item.qty and send data to the dom for rendering
			manually: user decides to remove item from inventory. Removes the item and all its stock.
				-on the item you woould like to remove, click top right "x" icon and confirm to delete
				-once user confirms to delete, same process from automatically occurs
		-Add a button to each item
		when user wants to quickly remove 1 item completely from inventory
	3. Keep count of the number of items in inventoy
		3a. update the number of items when something is sold or added
		3b. update the total number of items in inventory when items are added or removed
	4. 

*/
function increaseCount(){
	if(typeof(Storage) !== "undefined") { // checks browser supports HTML5 Storage API
		if(localStorage.count) { // check if localStorage.count exists in browser's localStorage
			// if localStorage.count exists: increment localStorage by 1
			localStorage.count = Number(localStorage.count) + 1;
		} else {
			// if localStorage.count does not exist yet: set localStorage.count eq. to 1
			localStorage.count = 1;
		}
		nItems.innerHTML = localStorage.count;
	} 
	else {
		nItems.innerHTML = "Sorry your browser doesn;t supprt HTML 5 Web Storage...";
	}
}
function decreaseCount(){
	localStorage.count = Number(localStorage.count) - 1;
	nItems.innerHTML = localStorage.count;
}
