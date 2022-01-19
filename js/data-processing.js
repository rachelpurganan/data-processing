//use location object to access querystring (address bar)
const queryString = window.location.search;
let myData = '';//will store data for output

if(queryString!=""){//process data
  
    //separate querystring parameters
    const urlParams = new URLSearchParams(queryString);


    urlParams.forEach(function(value, key) {
        
        //https://stackoverflow.com/questions/542232/in-javascript-how-can-i-perform-a-global-replace-on-string-with-a-variable-insi

        //this will replace underscore with spaces
      key = key.split("_").join(" ");

            //replaces underscore with space ONLY ONCE. Example: Join Mailing_List
            //key = key.replace("_"," ");
        
      myData += `<p>${key}: ${value}</p>`;
      
      //console.log(value, key);
    });

    //creates CLEAR button to clear the data
    myData += `<p><a href="index.html">CLEAR</a></p>`
    //pushes everything to that output div
    document.getElementById("output").innerHTML = myData;


};
    
//output to console    
//console.log(queryString);
    
