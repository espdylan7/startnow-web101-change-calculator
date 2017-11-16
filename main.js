
function calculateChange(amountDue, amountReceived ) {
    console.log('run');



    var customerChange = (amountReceived) * 100 - (amountDue) * 100
    console.log(customerChange)
   
    
    var dollars = Math.floor(customerChange / 100 )
    var dollarElement = document.getElementById("dollars-output")
    dollarElement.textContent = dollars
    customerChange = customerChange - dollars * 100
    
    //customerChange = (customerChange) - Math.floor(customerChange)
    
    
    
    
    //var remainder = Math.floor(customerChange / dollars)
   
    
    var quarters = Math.floor(customerChange / 25) 
    var pElement = document.getElementById("quarters-output")
    pElement.textContent = (quarters)
    customerChange = customerChange - quarters * 25
    //resetting customerChange to 50 (50 cents) subtract (2 * 25)-> 0
    //customerChange = customerChange - totalQuarters * 25 
    console.log(quarters)
     //var quarterValue = (totalQuarters * 25)
    
    var dimes = Math.floor(customerChange / 10)
    var pElement = document.getElementById("dimes-output")
    pElement.textContent = (dimes)
    console.log(dimes)
    customerChange = customerChange - dimes * 10
    //pElement.textContent = Math.floor(customerChange / dimes)
    

    
    var nickels = Math.floor(customerChange / 5)
    var pElement = document.getElementById("nickels-output")
    pElement.textContent = (nickels)
    console.log(nickels)
    customerChange = customerChange - nickels * 5


    var pennies = Math.floor(customerChange / .9)
    var pElement = document.getElementById("pennies-output")
    pElement.textContent = (pennies) 
    console.log(pennies)
    //customerChange = customerChange - pennies * 1







  






};

//while there is change remaining (if change is greater than zero, there is change left lol)







function handleClickEvent() {
    //console.log("hello");
    var amountDueElement = document.getElementById("amount-due")
    var amountDue = amountDueElement.value;


    var amountReceivedElement = document.getElementById("amount-received")
    var amountReceived = amountReceivedElement.value;

    var customerChange = (amountReceived - amountDue);

    var result = calculateChange(amountDue, amountReceived)






};



//while loop
//if statements inside
