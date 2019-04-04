'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

//the starting values for the store name, min store customer, max store customer, and avg cookies bought. This are going to be modified as the user puts in new values in the text field
var stores = ['1ST AND PIKE', 'SEATAC AIRPORT','SEATTLE CENTER','CAPITAL HILL','ALKI'];
var minStoreCustomer = [23,3,11,20,2];
var maxStoreCustomer = [65,24,38,38,16];
var avgCookieBought = [6.3,1.2,3.7,2.3,4.6];
var storeList = []; //this stores all the individual store instances of the constructor
var tbEl = document.getElementById('storeTbl'); //this creates a reference to the table element in the html code
var numOfStores = 0; //this keeps track of how many stores we currently have

//this statement assigns a DOM element reference to the modify form on the html
var modifyFormDom = document.getElementById('modifyForm');

function CookieStore(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought ) {
  this.storeName = storeName;
  this.minNumOfCustomers = minNumOfCustomers;
  this.maxNumOfCustomers = maxNumOfCustomers;
  this.avgCookieBought = avgCookieBought;
  this.totalValue = 0;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  storeList.push(this);
}
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

//this function handles displaying of the footer elements in the table
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
function createInstance(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought){
  new CookieStore(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought);
  storeList[numOfStores].driver();
  numOfStores ++;
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

//this function handles creating of the first five default locations
function creatDefaultLocation(){
  for(var i=0; i<stores.length; i++){
    createInstance(stores[i], minStoreCustomer[i], maxStoreCustomer[i], avgCookieBought[i]);
  }

}

//The event handler function
function handleModifyForm(event){
  event.preventDefault();
  var storeName =  event.target.storeNameTxt.value;
  var minNumOfCustomers = Number(event.target.minNumOfCustomersTxt.value);
  var maxNumOfCustomers = Number(event.target.maxNumOfCustomersTxt.value);
  var avgCookieBought = Number(event.target.avgCookieBoughtTxt.value);
  if(maxNumOfCustomers < minNumOfCustomers){
    return alert('Your max is less than you min');
  }
  if(storeList.includes(storeName.toUpperCase())){
    return alert('Your store name already exist in the database');
  }
  tbEl.innerHTML = ''; //this empties the table
  storeList = []; //this empties the store list
  numOfStores = 0; //
  render(storeName.toUpperCase(), minNumOfCustomers, maxNumOfCustomers, avgCookieBought); // this makes a call to the render function to create a new constructor instance with the details that the user put in, and re-do the footer calculation.

  //this empties the form fields after the data has been grabbed
  event.target.storeNameTxt.value = null;
  event.target.minNumOfCustomersTxt.value = null;
  event.target.maxNumOfCustomersTxt.value = null;
  event.target.avgCookieBoughtTxt.value = null;
}

//the event listener function
modifyFormDom.addEventListener('submit', handleModifyForm);

//the function that starts the program
function render(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought){
  if(storeName === undefined){
    headerDisplay();
    creatDefaultLocation();
    footerDisplay();
  }else{
    headerDisplay();
    creatDefaultLocation();
    createInstance(storeName, minNumOfCustomers, maxNumOfCustomers, avgCookieBought);
    footerDisplay();
  }
}

render();
