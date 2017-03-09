console.log("first line in JS file", Date.now());

var petFoodContainer = document.getElementById("petFoodDiv");
var dogBrandString = "";
var currentBrand; 
var currentDogBrandType = "";

function makeDogDom (xhrData) {
	for(var i=0; i<xhrData.dog_brands.length; i++) {	
		currentBrand = xhrData.dog_brands[i];
		console.log(currentBrand);
		// eneter code into the thml and then copy it in here for how it should work ... 
		 
		for(var j=0; j<xhrData.dog_brands[i].types.length; j++) { 
			currentDogBrandType = xhrData.dog_brands[i].types[j]; // nested needs new index name or letter and need to need first for loop when doing second for loop
			console.log(currentDogBrandType);	
			for(var k=0; k<xhrData.dog_brands[i].types[j].volumes.length; k++) {
				currentDogBrandTypeName = xhrData.dog_brands[i].types[j].volumes[k]; 
				console.log("hi, let's see if it get here")
			}
		}

		dogBrandString += `<h1>Brand: ${currentBrand.name}</h1>`
		dogBrandString += `<h3>Type: ${currentDogBrandType.type}</h3>`
		dogBrandString += `<h3>Type: ${currentDogBrandType.type}</h3>`
		dogBrandString += `<h3>Type: ${currentDogBrandType.type}</h3>`
	} 

	petFoodContainer.innerHTML = dogBrandString;
	console.log(makeDogDom);
}

// function makeDom(xhrData) {
// 	var dinosaursString = "";
// 	var currentDinosaur;
// 	for(var i=0; i<xhrData.dinosaurs.length; i++){
// 		currentDinosaur = xhrData.dinosaurs[i];
	
// 	  dinosaursString += `<div class="col-sm-6 col-md-4">`; //copied and pasted from bootstrap 
// 	  dinosaursString += `<div class="thumbnail">`; // must use your "`" tick marks
// 	  dinosaursString += `<img src="${currentDinosaur.url}" alt="dino">`;
// 	  dinosaursString += `<div class="caption">`;
// 	  dinosaursString += `<h3>${currentDinosaur.name}</h3>`;
// 	  dinosaursString += `<p>Is a ${currentDinosaur.type}</p>`;
// 	  dinosaursString += `<p>Likes to eat: ${currentDinosaur.food}</p>`;
// 	  dinosaursString += `</div></div></div>`
// 	}
// 	dinoContainer.innerHTML = dinosaursString;
// }
function executeThisCodeAfterFileLoaded(){
	console.log("Data Returned: ", Date.now());
	var data =JSON.parse(this.responseText);
	makeDogDom(data);
	console.log(data);
}

function executeThisCodeAfterFileFails(){
	console.log("it DID NOT worked!")
}

var dogRequest = new XMLHttpRequest();
dogRequest.addEventListener("load", executeThisCodeAfterFileLoaded); // happens when the file has completed reading the JSON file
dogRequest.addEventListener("error", executeThisCodeAfterFileFails);
dogRequest.open("GET", "dogs.json"); 
dogRequest.send();



console.log("last line in JS file", Date.now());