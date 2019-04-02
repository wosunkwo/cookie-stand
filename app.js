var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var stores = ['1st and Pike', 'SeaTac Airport','Seattle Center','Capital Hill','Alki'];
var minStoreCustomer = [23,3,11,20,2];
var maxStoreCustomer = [65,24,38,38,16];
var avgCookieSale = [6.3,1.2,3.7,2.3,4.6];

//The first store object
var firstAndPike = {
  storeName: stores[0],
  minNumOfCustomers: minStoreCustomer[0],
  maxNumOfCustomers: maxStoreCustomer[0],
  avgCookieBought: avgCookieSale[0],
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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
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
  storeName: stores[1],
  minNumOfCustomers: minStoreCustomer[1],
  maxNumOfCustomers: maxStoreCustomer[1],
  avgCookieBought: avgCookieSale[1],
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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
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
  storeName: stores[2],
  minNumOfCustomers: minStoreCustomer[2],
  maxNumOfCustomers: maxStoreCustomer[2],
  avgCookieBought: avgCookieSale[2],
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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
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

//The fourth store object
var capitolHill = {
  storeName: stores[3],
  minNumOfCustomers: minStoreCustomer[3],
  maxNumOfCustomers: maxStoreCustomer[3],
  avgCookieBought: avgCookieSale[3],
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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
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

//The fifth store object
var alki = {
  storeName: stores[4],
  minNumOfCustomers: minStoreCustomer[4],
  maxNumOfCustomers: maxStoreCustomer[4],
  avgCookieBought: avgCookieSale[4],
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
      this.cookiesPerHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookieBought));
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
document.getElementById('store1Heading').innerHTML = firstAndPike.storeName;
for(var i=0; i<hours.length; i++)
{
  var liEl = document.createElement('li');
  liEl.textContent = `${hours[i]}: ${firstAndPike.cookiesPerHour[i]} cookies`;
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: '+firstAndPike.totalValue+' cookies';
ulEl.appendChild(liEl);

//the code to display the data for the second store
seatacAirport.driver();
ulEl = document.getElementById('store2Result');
document.getElementById('store2Heading').innerHTML = seatacAirport.storeName;
for(var j=0; j<hours.length; j++)
{
  liEl = document.createElement('li');
  liEl.textContent = hours[j] + ': ' + seatacAirport.cookiesPerHour[j] + ' cookies';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: '+seatacAirport.totalValue+' cookies';
ulEl.appendChild(liEl);

//the code to display the data for the third store
seattleCenter.driver();
ulEl = document.getElementById('store3Result');
document.getElementById('store3Heading').innerHTML = seattleCenter.storeName;
for(var k=0; k<hours.length; k++)
{
  liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + seattleCenter.cookiesPerHour[k] + ' cookies';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: '+seattleCenter.totalValue+' cookies';
ulEl.appendChild(liEl);

//the code to display the data for the fourth store
capitolHill.driver();
ulEl = document.getElementById('store4Result');
document.getElementById('store4Heading').innerHTML = capitolHill.storeName;
for(var l=0; l<hours.length; l++)
{
  liEl = document.createElement('li');
  liEl.textContent = hours[l] + ': ' + capitolHill.cookiesPerHour[l] + ' cookies';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: '+capitolHill.totalValue+' cookies';
ulEl.appendChild(liEl);

//the code to display the data for the fifth store
alki.driver();
ulEl = document.getElementById('store5Result');
document.getElementById('store5Heading').innerHTML = alki.storeName;
for(var m=0; m<hours.length; m++)
{
  liEl = document.createElement('li');
  liEl.textContent = hours[m] + ': ' +alki.cookiesPerHour[m] + ' cookies';
  ulEl.appendChild(liEl);
}
liEl = document.createElement('li');
liEl.textContent = 'Total: '+alki.totalValue+' cookies';
ulEl.appendChild(liEl);
