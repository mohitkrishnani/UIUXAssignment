var bookList= [];
for(let i=0;i<5;i++){
	let book = {'name':"Java",'brand':"Riley",'quantity':3,'status':'In stock' , 'price':450};
	bookList.push(book);
}
console.log(bookList)


function getRes(){
	console.log(bookList);
	//Using Dummy data to show the list view
	for(let i = 0;i<bookList.length;i++){
		const container = document.getElementById("card-container");
		const card = document.createElement('div');
		card.setAttribute('class','card');
	
		const title = document.createElement('h4');
		title.setAttribute('class','card-title');
		title.innerHTML = "Book Name: "+bookList[i].name;
	
	
		const cardbody = document.createElement('div');
		cardbody.setAttribute('class','card-body hideit');
	
		const cardtext1 = document.createElement('p');
		cardtext1.setAttribute('class','card-text');
		cardtext1.innerHTML = "Brand: "+bookList[i].brand;
	
		const link = document.createElement('p');
		link.setAttribute('class','card-link');
		link.innerHTML="Quantity: "+bookList[i].quantity;
	
		const cardtext2 = document.createElement('p');
		cardtext2.setAttribute('class','card-text');
		cardtext2.innerHTML = "Price "+bookList[i].price;
		
		const cardtext3 = document.createElement('p');
		cardtext3.setAttribute('class','card-text');
		cardtext3.innerHTML = "Status: "+bookList[i].status;
	
	
		cardbody.appendChild(cardtext1);
	
		cardbody.appendChild(link);
	
		cardbody.appendChild(cardtext3);
		cardbody.appendChild(cardtext2);
	
	
		card.appendChild(title);
		card.appendChild(cardbody);
		card.addEventListener('click',() => {
		cardbody.classList.toggle("showit");
	});	
	container.appendChild(card);	
	}
	
}


function addBook(){
	const idname = document.getElementById('bookname');
	const name = idname.value;
	const idbrand = document.getElementById('brandname');
	const brand = idbrand.value;
	const idquantity = document.getElementById('quantity');
	const quantity = idquantity.value;
	const idstatus = document.getElementById('status');
	const status = idstatus.value;
	const idprice = document.getElementById('price');
	const price = idprice.value;
	
	console.log({'name':name,'brand':brand, 'quantity':quantity, 'status':status, 'price':price});
	console.log(bookList);
	bookList.push({'name':name,'brand':brand, 'quantity':quantity, 'status':status, 'price':price});
	console.log(bookList);
	alert("product Added");
	const idform = document.getElementById('productform');
	idform.reset();
	
	
}