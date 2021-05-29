$(function () {
	$("#addItem").click(function () {
		$("#itemModal").modal("show");
	});

	$("#addLocation").click(function () {
		$("#locationModal").modal("show");
	});

	$("#addCategory").click(function () {
		$("#categoryModal").modal("show");
	});

	const itemForm = document.getElementById("itemForm");
	let itemCount = document.getElementById("nDisplayed");
	var count = 0;

	// when form submits call input2data function
	itemForm.addEventListener('submit', handleSubmit, false);
	var itemFormEl;
	function handleSubmit(e) {
		e.preventDefault(); // Prevent submitting form
		itemFormEl = itemForm.elements;

		const inputs = itemForm.querySelectorAll('input');
		let form = {}; // Create form objec to store user input

		// Iterate over inputs | construct the form objects key: value pairs
		inputs.forEach(({ name, value }) => form[name] = value);
		// console.log(form); // -> Code checkpoint
		createItem(form);
	}

	// use user input to craft an item block dynamically
	function createItem(formData) {
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
		let iName = document.createTextNode(formData.itemName);
		let iLocation = document.createTextNode(formData.itemLocation);
		let iCategory = document.createTextNode(itemFormEl["itemCategory"].value);
		let iPrice = document.createTextNode("$"+formData.itemPrice);
		let iQty = document.createTextNode(formData.itemQty);
		let iX = document.createTextNode(formData.itemX);
		// console.log("Category: " + itemFormEl["itemCategory"].value);
	
		// append textNode to html Element
		itemNode1.appendChild(iName);
		itemNode2.appendChild(iLocation);
		itemNode3.appendChild(iCategory);
		itemNode4.appendChild(iPrice);
		itemNode5.appendChild(iQty);
		itemNode6.appendChild(iX);		
		
		// place the appropriate class based on category chosen
		let cat = itemFormEl["itemCategory"].value;
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
		count++;
		itemCount.innerHTML = count;
	}
});
