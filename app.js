'use strict';
//Global Variables--------------------------------------------------
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
//the starting values for the store name, min store customer, max store customer, and avg cookies bought. This are going to be modified as the user puts in new values in the text field
var stores = ['1ST AND PIKE', 'SEATAC AIRPORT','SEATTLE CENTER','CAPITAL HILL','ALKI'];
var minStoreCustomer = [23,3,11,20,2];
var maxStoreCustomer = [65,24,38,38,16];
var avgCookieBought = [6.3,1.2,3.7,2.3,4.6];
var storeList = []; //this stores all the individual store instances of the constructor
var tbEl = document.getElementById('storeTbl'); //this creates a reference to the table element in the html code
var modifyFormDom = document.getElementById('modifyForm');//this statement assigns a DOM element reference to the modify form on the html
//My Constructor
function CookieStore(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought){
  this.storeName = storeName;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.avgCookieBought = avgCookieBought;
  this.totalValue = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  storeList.push(this);
}
//Constructor prototype methods
CookieStore.prototype.generateRandomNumber = function(){
  return Math.floor(Math.random() * (this.maxNumOfCustomers - this.minNumOfCustomers + 1) ) + this.minNumOfCustomers;
};
CookieStore.prototype.fillCustomersPerHour = function(){
  for(var i = 0; i<hours.length; i++){
    this.customersPerHour.push(this.generateRandomNumber());
  }
};
CookieStore.prototype.fillCookiesPerHour = function(){
  for(var i = 0; i<hours.length; i++){
    this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
    this.totalValue += this.cookiesPerHour[i];
  }
};
//this function handles displaying of the elements in the main body of the table
CookieStore.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);
  for(var i= 0; i<hours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = this.totalValue;
  trEl.appendChild(tdEl);
  tbEl.appendChild(trEl);
};
CookieStore.prototype.driver = function(){
  this.fillCustomersPerHour();
  this.fillCookiesPerHour();
  this.render();
};
//this function handles displaying of the header elements in the table
function headerDisplay(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i=0; i<hours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  tbEl.appendChild(trEl);
}
//This function handles the creation of instances, updating the store count and passing them to the DOM
function createInstance(){
  for(var i=0; i<stores.length; i++){
    new CookieStore(stores[i], minStoreCustomer[i], maxStoreCustomer[i], avgCookieBought[i]);
    storeList[i].driver();
  }
}
//this function handles displaying of the footer elements in the table
function footerDisplay(){
  var totalAllHour = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
  for(var i=0; i<hours.length; i++){
    var totalPerHour = 0;
    for(var j=0; j<storeList.length; j++){
      totalPerHour += storeList[j].cookiesPerHour[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = totalPerHour;
    trEl.appendChild(tdEl);
  }
  for(var k=0; k<storeList.length; k++){
    totalAllHour += storeList[k].totalValue;
  }
  var tdEl = document.createElement('td');
  tdEl.textContent = totalAllHour;
  trEl.appendChild(tdEl);
  tbEl.appendChild(trEl);
}
//The event handler function
function handleModifyForm(event){
  event.preventDefault();
  var storeNameTemp =  (event.target.storeNameTxt.value).toUpperCase();
  var minNumOfCustomersTemp = Number(event.target.minNumOfCustomersTxt.value);
  var maxNumOfCustomersTemp = Number(event.target.maxNumOfCustomersTxt.value);
  var avgCookieBoughtTemp = Number(event.target.avgCookieBoughtTxt.value);
  //this does input validation, to make sure the min entered isnt greater than the max entered, and makes sure the user doesnt add a store that is already on the table
  if(maxNumOfCustomersTemp < minNumOfCustomersTemp){
    return alert('Your max is less than you min');
  }
  if(stores.includes(storeNameTemp)){
    return alert('Your store name already exist in the database');
  }
  tbEl.innerHTML = ''; //this empties the table
  //this stores the new store information in our arrays
  stores[storeList.length] = storeNameTemp;
  minStoreCustomer[storeList.length] = minNumOfCustomersTemp;
  maxStoreCustomer[storeList.length] = maxNumOfCustomersTemp;
  avgCookieBought[storeList.length] = avgCookieBoughtTemp;
  storeList = []; //this empties the store list
  render();
  //this empties the form fields after the data has been grabbed
  event.target.storeNameTxt.value = null;
  event.target.minNumOfCustomersTxt.value = null;
  event.target.maxNumOfCustomersTxt.value = null;
  event.target.avgCookieBoughtTxt.value = null;
}
//the event listener function
modifyFormDom.addEventListener('submit', handleModifyForm);
function render(){
  headerDisplay();
  createInstance();
  footerDisplay();
}
render();
