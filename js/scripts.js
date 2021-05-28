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
	const inputs = itemForm.querySelectorAll('input');
	const itemGrid = document.getElementById('item-grid');
	
	// addEventListener to form on submit
	itemForm.addEventListener('submit', handleSubmit, false);

	function handleSubmit(e) {
		e.preventDefault(); // Prevent form submitting
		const form = {}; // Create form object

		// Iterate over inputs | construct the form objects key: value pairs
		inputs.forEach(({ name, value }) => form[name] = value);
		// console.log(form); // Code checkpoint
		createItem(form);
	}

	// itemForm.elements.namedItem("itemName").addEventListener("blur", itemName);

	// function itemName() {
	// 	console.log("This is: " + itemForm.elements.namedItem("itemName").value);
	// }

	function createItem(formData) {
		let itemNode0 = document.createElement("div");
		let itemNode1 = document.createElement("h4");
		let itemNode2 = document.createElement("li");
		let itemNode3 = document.createElement("li");
		let itemNode4 = document.createElement("li");
		let itemNode5 = document.createElement("li");
		let itemNode6 = document.createElement("li");
		

		let iName = document.createTextNode(formData.itemName);
		let iLocation = document.createTextNode(formData.itemLocation);
		let iCategory = document.createTextNode(formData.itemCategory);
		let iPrice = document.createTextNode(formData.itemPrice);
		let iQty = document.createTextNode(formData.itemQty);
		let iX = document.createTextNode(formData.itemX);

		itemNode1.appendChild(iName);
		itemNode2.appendChild(iLocation);
		itemNode3.appendChild(iCategory);
		itemNode4.appendChild(iPrice);
		itemNode5.appendChild(iQty);
		itemNode6.appendChild(iX);
		for(let i = 6; i > 0; i--) {
			let nodeName = "itemNode"+i;
			itemNode0.appendChild(nodeName);
		}
		$(itemNode0).attr("class", "col-6 col-md");
		itemGrid.appendChild(itemNode0);
		// itemGrid.appendChild(itemNode1);
		// itemGrid.appendChild(itemNode2);
		// itemGrid.appendChild(itemNode3);
		// itemGrid.appendChild(itemNode4);
		// itemGrid.appendChild(itemNode5);
		// itemGrid.appendChild(itemNode6);
	}

});