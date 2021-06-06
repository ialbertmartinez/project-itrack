$(function () {
	const itemForm = document.getElementById("itemForm");
	const itemGrid = document.getElementById('item-grid');
	const nItems = document.getElementById("nItems");
	const nTotal = document.getElementById("nTotal");
	inputs = itemForm.querySelectorAll("input");
	itemID = "";
	var itemFormEl;
	form = {};

	$("#addItem").click(function(){ 
		$("#itemModal").modal("show"); 
	});
	
	// trigger handleSubmit() when form submits
	itemForm.addEventListener('submit', handleSubmit, false); 
	document.querySelector("#cancelBtn").addEventListener('click', function(){
		inputs.value = '';
	});
	function increaseCount(item, qty){
		if (localStorage.count){ 
			if(localStorage.getItem(item)) {
				localStorage[`${item}Count`] = Number(localStorage[`${item}Count`]) + Number(qty);
			}
			localStorage.count = Number(localStorage.count) + 1; 
		} else { 
			localStorage.setItem("count", 1 ); 
			localStorage.setItem(`${item}Count`, Number(qty));
		}
		nItems.innerHTML = localStorage.getItem("count");
	}
	

	function handleSubmit(e){
		e.preventDefault();
		$("#itemModal").modal("hide");
		function checkCount () {
			console.log(localStorage[`${form.itemName}`]);
			// if(localStorage.count){
			// 	if((localStorage[`${form.itemName}`] !== "undefined" ) && (localStorage[`${form.itemName}`] !== null )) {
			// 		localStorage[`${form.itemName}`] 
			// 	}
			// }
		}

		checkCount();
		const itemGrid = document.getElementById('item-grid');
		// console.log("itemName:\t"+ itemNameInput.value);
		// nTotal.innerText = localStorage.getItem("iName");
		// container // content // relate // update

		inputs.forEach(({ name, value }) => { form[name] = value;});
		let divNode = document.createElement("div");
		itemGrid.appendChild(divNode);
		divNode = itemGrid.lastElementChild;
		divNode.className = "item-block bg-dark text-light col-6 col-sm-2 p-3 mx-2";
		
		function filloutStorage(inputName, tag){
			itemID = `${inputName.value}_${localStorage.getItem("count")}`;

			let iName = document.getElementById(`${inputName}`);
			localStorage.setItem(`${inputName}`, itemNameInput.value);
			fromMakeToDom("h4", "itemName");
		}
		let itemNameInput = document.getElementById("itemName");
		localStorage.setItem("itemName", itemNameInput.value);
		fromMakeToDom("h4", "itemName");
				
		let itemLocationInput = document.getElementById("itemLocation");
		localStorage.setItem("itemLocation", itemLocationInput.value);
		fromMakeToDom("p", "itemLocation");

		let itemCategoryInput = document.getElementById("itemCategory");
		localStorage.setItem("itemCategory", itemCategoryInput.value);
		fromMakeToDom("p", "itemCategory");

		let itemPriceInput = document.getElementById("itemPrice");
		localStorage.setItem("itemPrice", itemPriceInput.value);
		fromMakeToDom("p", "itemPrice");

		let itemQtyInput = document.getElementById("itemQty");
		localStorage.setItem("itemQty", itemQtyInput.value);
		fromMakeToDom("p", "itemQty");

		let itemXInput = document.getElementById("itemX");
		localStorage.setItem("itemX", itemXInput.value);			
		fromMakeToDom("p", "itemX");

		divNodeID = localStorage.getItem("itemName") + localStorage.getItem(`${itemNameInput.value}Count`); 
		divNode.setAttribute("id", divNodeId);

		let cat = localStorage.getItem("itemCategory");
		if(cat === "drinks") {
			$("p.itemCategory").addClass("drinks");
		} else 
		if(cat === "food") {
			$("p.itemCategory").addClass("food");
		} else
		if(cat === "jewelry") {
			$("p.itemCategory").addClass("jewelry");
		} else
		if(cat === "clothes") {
			$("p.itemCategory").addClass("clothes");
		}

		increaseCount(divNodeID, localStorage.getItem("itemName"), localStorage.getItem("qty"));

	}

	function fromMakeToDom(tag, name) {
		let content = localStorage.getItem(`${name}`);
		console.log(`content: ${content}`);
		// create a container 
		let container = document.createElement(tag);
		container.className = name;
		// bring in content 
		let text = document.createTextNode(content);
		// place the text inside the container 
		container.appendChild(text);
		// insert dynamic element into the DOM
		let itemBlock = itemGrid.lastElementChild;
		itemBlock.appendChild(container); 
		console.log(`Element ${tag} created for ${name}, is now added to the DOM successfully.`);
	}
});
