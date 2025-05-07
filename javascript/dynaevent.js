console.log ("dynaevent.js");

// Get the element node that is the button that when clicked will create a new button
// Assume it has ID of "masterButton"
const element = document.querySelector('#masterButton');
element.addEventListener("click", addButton);

// This is where the last button clicked text will be displayed
displayText = document.querySelector("#lastClicked")

// buttonsDiv will be the parent of all buttons added
const buttonsDiv = document.querySelector('#buttons');

// Element node that is the button clicked to initiate a promise
const promiseElement =document.querySelector("#promiseButton")
promiseButton.addEventListener("click", promiseClick)

// Element nodes for promise status ("pending, resolved, rejected) and countdown in seconds
const promiseStatusElement = document.querySelector("#promiseStatus")
const promiseCountDownElement = document.querySelector("#promiseCountDown")

// Global variable that is incremented on each BUTTON
// Why is this global?
var buttonCounter = 1

// Will handle click event that will initiate the creation of a new button
function addButton () {
	console.log ("addButton()")
	
	// Create a new button
	var newButton = document.createElement("BUTTON");
	
	// Add the click event handler for the newly created button
	newButton.addEventListener("click", dynaClick)
	newButton.addEventListener("dblclick", removeClick)
	
	// Create a text node that will be the text displayed in the button. Can also do with?
	var t = document.createTextNode(String(buttonCounter));
	newButton.appendChild(t);
	
	// Put under the div element node found on load
    buttonsDiv.appendChild(newButton);
	
	// Increment the counter
	buttonCounter +=1
}

// Will handle the click event for the buttons created dynamically by addButton()
function dynaClick (event) {
	console.log ("dynaClick()")
	console.log ("Current target:", event.currentTarget.innerHTML)
	
	// Use the event object to find the element node that this event is associated with.
	displayText.innerHTML = "Which button last Clicked: " + event.currentTarget.innerHTML
}

// Event handler for double click - will remove the clicked item once confirmed
function removeClick () {
	console.log ("removeClick()")
	let confirmation = confirm("Are you sure you want to delete button number:" + event.currentTarget.innerHTML );
	if (confirmation) {
		event.currentTarget.remove()
	}
}
 
// Event handler to initiate an asychronous operation using a promise

// Using the Promise
function promiseClick() {
	console.log ("promiseClick()")
	
	promiseStatusElement.innerHTML = "Status: Pending"
	// Creating a Promise
	const myPromise = new Promise((resolve, reject) => {
		console.log ("myPromise")
		// Simulating an asynchronous task 
		setTimeout(() => {
			const data = "Here's the result!";
			console.log ("  myPromise waiting")
			resolve(data); // Resolving the promise with some data
		}, 10000); // Simulating a 1-second delay
	});
	
	
	myPromise.then((result) => {
		promiseStatusElement.innerHTML = "Promise resolved with data:" + result
		console.log("Promise resolved with data:", result);
	}).catch((error) => {
		promiseStatusElement.innerHTML = "Rejected:" + error
		console.error("Something went wrong:", error);
	});
}
  


  

