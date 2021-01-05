 document.getElementById("output").style.visibility = "hidden"; // initially hide output
 document.getElementById("pound").addEventListener("keyup",(e)=>{
    document.getElementById("output").style.visibility = "visible"; //  vvisible when event fires
   let pound = e.target.value;
   document.getElementById("grams").innerHTML = pound / 0.0022046; // convert pound to grams
   document.getElementById("kilograms").innerHTML = pound / 2.205; // convert pound to kilograms
   document.getElementById("ounce").innerHTML = pound * 16; // convert pound to ounce
 });