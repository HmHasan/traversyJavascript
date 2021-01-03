let filterinput = document.getElementById("filterInput"); // get input element
filterinput.addEventListener("keyup", filternames); // add event listener
function filternames() {
    // add function
    let filterValue = document.getElementById("filterInput").value.toUpperCase(); // get value and Convirt Uppercase
    let gateName = document.getElementById("names"); // get ul name
    let collections = document.querySelectorAll("li.collection-item"); // get collections
    collections.forEach(function (collection) {
        let aTag = collection.getElementsByTagName("a")[0]; // get each collection inside anchor tag
        if(aTag.innerHTML.toUpperCase().indexOf(filterValue) > -1) 
        {
            collection.style.display = ""; // display block
        }
        else
        {
            collection.style.display = "none"; // display none
        }

        });
}
