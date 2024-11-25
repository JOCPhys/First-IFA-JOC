// create element variables
const addToListButton = document.querySelector("#addToListButton");
const listTextInput = document.querySelector("#listTextInput");
const myList = document.querySelector("#myList");

// add event listener to button
addToListButton.addEventListener("click", addToList);

// add event listener to text input (so can press enter or press button to add item to list)
listTextInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addToList(e);
    }
});

function addToList(e) {
    // check to see if enter key was pressed or button was clicked
    if (e.type === "click" || e.key === "Enter") {
        // check that there is text to add (to avoid adding blank lines to list)
        if (listTextInput.value) {
            // create new list item
            const newListElement = document.createElement("li");

            // add text and some html for delete button
            newListElement.innerHTML = listTextInput.value + " <button onclick='removeFromList(this)'>Delete</button>";

            // add new list item to list
            myList.appendChild(newListElement);

            // clear input field
            listTextInput.value = "";

            // focus on input field
            listTextInput.focus();
        }
    }
}

function removeFromList(button) {
    // confirm delete
    if (confirm('Are you sure you want to delete this item?')) {
        // delete item
        const listItem = button.parentNode;
        listItem.parentNode.removeChild(listItem);

        // focus back on text box
        listTextInput.focus();
    }
}