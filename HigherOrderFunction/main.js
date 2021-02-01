// Javascript Higher Order Function 

/**
 * Map
 * 
 * filter
 * 
 * forEach
 * 
 * reduce
 * 
 * sort
 */

//  Lets Declare one array to perform all operations

let company = 
[
    {name:'ABC Company',category:'Business',start:1999,end:2002},
    {name:'BDC Company',category:'Finance',start:2000,end:2005},
    {name:'CDE Company',category:'Auto',start:2001,end:2020},
];

// Map Functionality

let map = company.map((company)=>company.name);

// filter functionality

let filter = company.filter((company)=>(company.start > 1999));


//foreach Functionality

let foreach = company.forEach(element => {
    
});


//Reduce Functionality

let perFormCalculate = company.map(function(company){
    return company.end - company.start;
});

let reduce = perFormCalculate.reduce(function(total,perFormCalculate){
    return total+perFormCalculate;
})

//perform sort

let sort = company.sort((a,b)=>(a>b?-1:1));

// console.log(sort)