$(function () {
	$("#itemFormBtn").on('click', function(){ 
		$("#itemModal").modal("show"); 
	});

	var inventory = [];
	var itemGrid = document.getElementById("item-grid");
	const itemForm = document.getElementById("itemForm");
	itemForm.addEventListener('submit', handleSubmit);
	var form = {};
	var count = 0;

	function fromMakeToDom(o) {
/*	====================================
MY 'item-grid' DOM TREE OUTLINE:
fromMakeToDom() serves as the element-maker & DOM injector
----------------------------------------------------------
		item-grid
			-item-block
				-card
					-card-header
						h4
						p
					-card-body
						h5
						p
						p
*/
		// creating a container for the item details
		const el_0 = document.createElement("p");
		const el_1 = document.createElement("h4");
		const el_2 = document.createElement("h5");
		const el_3 = document.createElement("p");
		const el_4 = document.createElement("p");
		let divNode = document.createElement("div");
		let cardHeader = document.createElement("div");
		let cardBody = document.createElement("div");
		const qtySuffix = document.querySelectorAll('.card-text.itemQty');
		const el_smTxt = document.createElement("small");

		itemGrid.appendChild(divNode);
		divNode = itemGrid.lastElementChild;
		divNode.className = "item-block card bg-dark text-light col-auto col-sm-6 col-md-4 p-3 mx-2";
		cardHeader.className = "card-header";
		cardBody.className = "card-body";

		divNode.appendChild(cardHeader);
		divNode.appendChild(cardBody);
		
		// creating the content text nodes 
		const txt_0 = document.createTextNode(`${o.itemID}`);
		const txt_1 = document.createTextNode(`${o.name}`);
		const txt_2 = document.createTextNode(`${o.category}`);
		const txt_3 = document.createTextNode(`$${o.price}`);
		const txt_4 = document.createTextNode(`${o.qty}`);
		const smallText = document.createTextNode("<small> items</small>");

		// appending the text nodes to the divNode
		el_0.appendChild(txt_0);
		el_1.appendChild(txt_1);
		el_2.appendChild(txt_2);
		el_3.appendChild(txt_3);
		el_4.appendChild(txt_4);
		el_smTxt.appendChild(smallText);

		// append the dynamic element to the grid inside the DOM
		cardHeader.appendChild(el_0);
		cardHeader.appendChild(el_1);
		cardBody.appendChild(el_2);
		cardBody.appendChild(el_3);
		cardBody.appendChild(el_4);
		qtySuffix.appendChild(el_smTxt);
		
		// add classes to the item's data for styling
		el_0.className = "itemID d-none";
		el_1.className = "card-title itemName";
		el_2.className = "card-text itemCategory";
		el_3.className = "card-text itemPrice";
		el_4.className = "card-text itemQty";
		// .appendChild(smallText);

		let category = o.category.toLowerCase();
		switch(category) {
			case "drinks":
				el_2.className = "itemCategory card-text drinks";
				break;
			case "snacks":
				el_2.className = "itemCategory card-text snacks";
				break;
			case "sweets":
				el_2.className = "itemCategory card-text candy";
				break;
			case "clothes":
				el_2.className = "itemCategory card-text clothes";
				break;
			default:
				el_2.className = "itemCategory card-text";
		}
	}

	function handleSubmit(e){
		e.preventDefault();
		const inputs = itemForm.querySelectorAll("input");
		// let itemName = document.getElementById("itemName");
		// let itemCategory = document.getElementById("itemCategory");
		// let itemPrice = document.getElementById("itemPrice");
		// let itemQty = document.getElementById("itemQty");
		
		let itemObj = {
			itemID: count,
			name: itemForm.elements["itemName"].value,
			category: itemForm.elements["itemCategory"].value,
			price: itemForm.elements["itemPrice"].value,
			qty: itemForm.elements["itemQty"].value
		}
		//To-Do's
		// check if item already exists in inventory array
		// if it does exist, then update this item's qty and the localStorage.nTotal
		// if it doesn't exist, then 
			// add itemObj to inventory array and update localStorage.nTotal
			// add itemObj to DOM by passing it as an argument in fromMakeToDom()
		
		inventory.push(itemObj);
		fromMakeToDom(itemObj);

		
		inputs.forEach(({k, v}) => form[`${k}`] = `${v}`);
		$("#itemForm")[0].reset();

		count += 1;
		$("#itemModal").modal("hide");
	}
})