console.log("first line in JS file", Date.now());

var petFoodContainer = document.getElementById("petFoodDiv");
// var petFoodContainerTwo = document.getElementById("petFoodDiv2");
var dogBrandString = "";
var catBrandString = "";
var currentDogBrand;
var currentCatBrand; 
var currentDogBrandType = "";
var currentCatBrandType = "";

function makeDogDom (xhrData) {
	for(var i=0; i<xhrData.dog_brands.length; i++) {	
		currentDogBrand = xhrData.dog_brands[i];
		console.log(currentDogBrand);
		// eneter code into the thml and then copy it in here for how it should work ... 
		dogBrandString += `<h1>Brand: ${currentDogBrand.name}</h1>`;
		 
		for(var j=0; j< xhrData.dog_brands[i].types.length; j++) { 
			currentDogBrandType = xhrData.dog_brands[i].types[j]; // nested needs new index name or letter and need to need first for loop when doing second for loop
			console.log(currentDogBrandType);	
			dogBrandString += `<h3>Type:${currentDogBrandType.type}</h3>`;
			
			for(var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++) {
				currentDogBrandVolume = xhrData.dog_brands[i].types[j].volumes[k]; 
				console.log("hi, let's see if it get here")
				dogBrandString += `<p>Price: ${currentDogBrandVolume.name} : ${currentDogBrandVolume.price}</p>`;
			}
		}

		
	} 

	petFoodContainer.innerHTML = dogBrandString;
	console.log(makeDogDom);
}

function makeCatDom (xhrData) {
	for(var i=0; i<xhrData.cat_brands.length; i++) {	
		currentCatBrand = xhrData.cat_brands[i];
		console.log(currentCatBrand);
		// eneter code into the thml and then copy it in here for how it should work ... 
		catBrandString += `<h1>Brand: ${currentBrand.name}</h1>`;
		 
		for(var j=0; j<xhrData.cat.brands[i].types.length; j++) { 
			currentCatBrandType = xhrData.cat_brands[i].types[j]; // nested needs new index name or letter and need to need first for loop when doing second for loop
			console.log(currentCatBrandType);	
			dogBrandString += `<h3>Type:${currentCatBrandType.type}</h3>`;
			
			for(var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++) {
				currentDogBrandVolume = xhrData.dog_brands[i].types[j].volumes[k]; 
				console.log("hi, let's see if it get here")
				catBrandString += `<p>Price: ${currentCatBrandVolume.name} : ${currentCatBrandVolume.price}</p>`;
			}
		}

		
	} 

	petFoodContainerTwo.innerHTML = catBrandString;
	console.log(makeCatDom);
}

function executeThisCodeAfterFileLoaded(){
	console.log("Data Returned: ", Date.now());
	var data =JSON.parse(this.responseText);
	makeDogDom(data);
	makeCatDom(data);
	console.log("here is the datat",data);
}

function executeThisCodeAfterFileFails(){
	console.log("it DID NOT worked!")
}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", executeThisCodeAfterFileLoaded); // happens when the file has completed reading the JSON file
dogRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogRequest.open("GET", "dogs.json"); 
dogRequest.send();

var catRequest = new XMLHttpRequest();
catRequest.addEventListener("load", executeThisCodeAfterFileLoaded); // happens when the file has completed reading the JSON file
catRequest.addEventListener("error", executeThisCodeAfterFileFails);
catRequest.open("GET", "cats.json"); 
catRequest.send();
// console.log(catRequest);


console.log("last line in JS file", Date.now());