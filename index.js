// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    return bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
    const leastFavoriteCustomer = 'bob';
    leastFavoriteCustomer = 'not bob';
}