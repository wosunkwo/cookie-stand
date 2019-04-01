/*var myBeasts = ['Demi', 'BuddyCat', 'Trillian', 'Aloysius', 'Agador Spartacus', 'Kimberly'];

// A variable to hold the <ul> element

var ulEl = document.getElementById('beasts');

for (var i = 0; i < myBeasts.length; i++) {
  // create a <li> element
  var liEl = document.createElement('li');
  // give it content
  liEl.textContent = myBeasts[i];
  // put it in the DOM
  ulEl.appendChild(liEl);
} */

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = ['1st and Pike', 'SeaTac Airport','Seattle Center','Capital Hill','Alki'];


//The first store object
var firstAndPike = {
  minNumOfCustomers: 23,
  maxNumOfCustomers: 65,
  avgCookieBought: 6.3,
  totalValue: 0,
  cookiesPerHour: [],
  customersPerHour:[],
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxNumOfCustomers - this.minNumOfCustomers + 1) ) + this.minNumOfCustomers;
  },
  fillCustomersPerHour: function(){
    var rand;
    for(var i =0; i<hours.length; i++)
    {
      rand = this.randomNumOfCustomers();
      this.customersPerHour.push(rand);
    }
  },
  fillCookiesPerHour: function(){
    for(var i=0; i<hours.length; i++)
    {
      this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookieBought)); 
    }
  },
  fillTotalValue: function(){
    for(var i=0; i<hours.length; i++){
      this.totalValue += this.cookiesPerHour[i];
    }
  },
  driver: function(){
    this.fillCustomersPerHour();
    this.fillCookiesPerHour();
    this.fillTotalValue();
  }
}; 

//The second store object
var seatacAirport = {
  minNumOfCustomers: 3,
  maxNumOfCustomers: 24,
  avgCookieBought: 1.2,
  totalValue: 0,
  cookiesPerHour: [],
  customersPerHour:[],
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxNumOfCustomers - this.minNumOfCustomers + 1) ) + this.minNumOfCustomers;
  },
  fillCustomersPerHour: function(){
    var rand;
    for(var i =0; i<hours.length; i++)
    {
      rand = this.randomNumOfCustomers();
      this.customersPerHour.push(rand);
    }
  },
  fillCookiesPerHour: function(){
    for(var i=0; i<hours.length; i++)
    {
      this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookieBought)); 
    }
  },
  fillTotalValue: function(){
    for(var i=0; i<hours.length; i++){
      this.totalValue += this.cookiesPerHour[i];
    }
  },
  driver: function(){
    this.fillCustomersPerHour();
    this.fillCookiesPerHour();
    this.fillTotalValue();
  }
}; 

//The third store object
var seattleCenter = {
  minNumOfCustomers: 11,
  maxNumOfCustomers: 38,
  avgCookieBought: 3.7,
  totalValue: 0,
  cookiesPerHour: [],
  customersPerHour:[],
  randomNumOfCustomers: function(){
    return Math.floor(Math.random() * (this.maxNumOfCustomers - this.minNumOfCustomers + 1) ) + this.minNumOfCustomers;
  },
  fillCustomersPerHour: function(){
    var rand;
    for(var i =0; i<hours.length; i++)
    {
      rand = this.randomNumOfCustomers();
      this.customersPerHour.push(rand);
    }
  },
  fillCookiesPerHour: function(){
    for(var i=0; i<hours.length; i++)
    {
      this.cookiesPerHour.push(Math.round(this.customersPerHour[i] * this.avgCookieBought)); 
    }
  },
  fillTotalValue: function(){
    for(var i=0; i<hours.length; i++){
      this.totalValue += this.cookiesPerHour[i];
    }
  },
  driver: function(){
    this.fillCustomersPerHour();
    this.fillCookiesPerHour();
    this.fillTotalValue();
  }
}; 


//the code to display the data for the first store
firstAndPike.driver();
var ulEl = document.getElementById('store1Result');
ulEl.textContent = stores[0];
for(var i=0; i<hours.length; i++)
{
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + firstAndPike.cookiesPerHour[i] + ' cookies';
  ulEl.appendChild(liEl);
}
var liEl = document.createElement('li');
liEl.textContent = 'Total: '+firstAndPike.totalValue+' cookies';
ulEl.appendChild(liEl); 

//the code to display the data for the second store
seatacAirport.driver();
var ulEl = document.getElementById('store2Result');
ulEl.textContent = stores[1];
for(var i=0; i<hours.length; i++)
{
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + seatacAirport.cookiesPerHour[i] + ' cookies';
  ulEl.appendChild(liEl);
}
var liEl = document.createElement('li');
liEl.textContent = 'Total: '+seatacAirport.totalValue+' cookies';
ulEl.appendChild(liEl); 

//the code to display the data for the third store
seattleCenter.driver();
var ulEl = document.getElementById('store3Result');
ulEl.textContent = stores[2];
for(var i=0; i<hours.length; i++)
{
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ': ' + seattleCenter.cookiesPerHour[i] + ' cookies';
  ulEl.appendChild(liEl);
}
var liEl = document.createElement('li');
liEl.textContent = 'Total: '+seattleCenter.totalValue+' cookies';
ulEl.appendChild(liEl); 