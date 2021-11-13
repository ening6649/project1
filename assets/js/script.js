


// let CScontainerEl = document.querySelector('#cscontainer')

// let alphaUrl = 'https://www.alphavantage.co/query?function=CONSUMER_SENTIMENT&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
// fetch (alphaUrl)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//                 displayCS(data)
//             })
//         }
//     })
// let CStitleEL = document.createElement('h3')
// CScontainerEl.appendChild(CStitleEL)
// let displayCS = function(data) {
//     for (let i = 0; i < 12; i++) {
        
//         let CSlistEl = document.createElement('ul');
//         let CSdateEl = document.createElement('li');
//         let CSreadEL = document.createElement('li');
        
//         CScontainerEl.appendChild(CSlistEl);
//         CSlistEl.appendChild(CSdateEl);
//         CSlistEl.appendChild(CSreadEL);
//         CStitleEL.textContent = data.name
//         CSdateEl.textContent = data.data[i].date;
//         CSreadEL.textContent = data.data[i].value
       
//     }
// }

// let retailContainerEl = document.querySelector('#retailcontainer')

// let alpha1Url = 'https://www.alphavantage.co/query?function=RETAIL_SALES&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
// fetch (alpha1Url)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//                 displayretail(data)
//             })
//         }
//     })

// let retailTitleEL = document.createElement('h3')
// retailContainerEl.appendChild(retailTitleEL)
// let displayretail = function(data) {
//     for (let i = 0; i < 12; i++) {
//         let retailListEl = document.createElement('ul');
//         let retailDateEl = document.createElement('li');
//         let retailReadEL = document.createElement('li');
//         retailContainerEl.appendChild(retailListEl);
//         retailListEl.appendChild(retailDateEl);
//         retailListEl.appendChild(retailReadEL);
//         retailTitleEL.textContent = data.name
//         retailDateEl.textContent = data.data[i].date;
//         retailReadEL.textContent = '$' +data.data[i].value + " Million"
       
//     }
// }

// let CPIcontainerEl = document.querySelector('#CPIcontainer')

// let alpha2Url = 'https://www.alphavantage.co/query?function=CPI&interval=monthly&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
// fetch (alpha2Url)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//                 displayCPI(data)
//             })
//         }
//     })

// let CPItitleEL = document.createElement('h3')
// CPIcontainerEl.appendChild(CPItitleEL)
// let displayCPI = function(data) {
//     for (let i = 0; i < 12; i++) {
//         let CPIlistEl = document.createElement('ul');
//         let CPIdateEl = document.createElement('li');
//         let CPIreadEL = document.createElement('li');
//         CPIcontainerEl.appendChild(CPIlistEl);
//         CPIlistEl.appendChild(CPIdateEl);
//         CPIlistEl.appendChild(CPIreadEL);
//         CPItitleEL.textContent = data.name;
//         CPIdateEl.textContent = data.data[i].date;
//         CPIreadEL.textContent = data.data[i].value
       
//     }
// }







// // main display
let tickerInputEl = document.querySelector('#ticker')
let formEl = document.querySelector('#search-form')
let searchHistoryEl = document.querySelector('#search-history')

let FMPUrl = 'https://financialmodelingprep.com/api/v3/gainers?apikey=7a878c27bf0e17dc1eea0a749c7d6bc3' 
fetch (FMPUrl)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                displayCPI(data)
            })
        }
    })
let CPIcontainerEl = document.querySelector('#CPIcontainer')
let CPItitleEL = document.createElement('h3')
CPIcontainerEl.appendChild(CPItitleEL)
let displayCPI = function(data) {
    for (let i = 0; i < 10; i++) {
        let CPIlistEl = document.createElement('ul');
        let gainerNameEl = document.createElement('li');
        let gainerTickerEL = document.createElement('li');
        let gainerPriceEl = document.createElement('li')
        let gainerChangeEl = document.createElement('li')
        CPIcontainerEl.appendChild(CPIlistEl);
        CPIlistEl.appendChild(gainerNameEl);
        CPIlistEl.appendChild(gainerTickerEL);
        CPIlistEl.appendChild(gainerPriceEl);
        CPIlistEl.appendChild(gainerChangeEl)
        CPItitleEL.textContent = 'Top Gainers';
        gainerNameEl.textContent = data[i].companyName
        gainerTickerEL.textContent=data[i].ticker
        gainerPriceEl.textContent = '$'+data[i].price;
        gainerChangeEl.textContent = data[i].changesPercentage + ' %';
        if (parseFloat(data[i].changesPercentage)>0) {
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-up";
            gainerChangeEl.appendChild(arrowEl)
            
        }
        else {
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-down";
            gainerChangeEl.appendChild(arrowEl)
        }
    }
}

let CScontainerEl = document.querySelector('#cscontainer')
let FMP1Url = 'https://financialmodelingprep.com/api/v3/actives?apikey=7a878c27bf0e17dc1eea0a749c7d6bc3'
fetch (FMP1Url)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                displayCS(data)
            })
        }
    })
let CStitleEL = document.createElement('h3')
CScontainerEl.appendChild(CStitleEL)
let displayCS = function(data) {
    for (let i = 0; i < 10; i++) {
        
        let CSlistEl = document.createElement('ul');
        let activeNameEl = document.createElement('li');
        let activeTickerEL = document.createElement('li');
        let activePriceEl = document.createElement('li')
        let activeChangeEl = document.createElement('li')
        
        CScontainerEl.appendChild(CSlistEl);
        CSlistEl.appendChild(activeNameEl);
        CSlistEl.appendChild(activeTickerEL);
        CSlistEl.appendChild(activePriceEl)
        CSlistEl.appendChild(activeChangeEl);
        CStitleEL.textContent = 'Top active '
        activeNameEl.textContent = data[i].companyName;
        activeTickerEL.textContent = data[i].ticker;
        activePriceEl.textContent = '$'+data[i].price;
        activeChangeEl.textContent =data[i].changesPercentage + ' %';
        if (parseFloat(data[i].changesPercentage)>0) {
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-up";
            activeChangeEl.appendChild(arrowEl)
            
        }
        else {
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-down";
            activeChangeEl.appendChild(arrowEl)
        }
        
        
    }
}

let retailContainerEl = document.querySelector('#retailcontainer')
let FMP2Url = 'https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=7a878c27bf0e17dc1eea0a749c7d6bc3'
fetch (FMP2Url)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log(data);
                displayretail(data);
            })
        }
    })
let retailTitleEL = document.createElement('h3')
retailContainerEl.appendChild(retailTitleEL)
let displayretail = function(data) {
    for (let i = 0; i < 10; i++) {
        let retailListEl = document.createElement('ul');
        let sectorNameEl = document.createElement('li');
        let sectorChangeEL = document.createElement('li');
        retailContainerEl.appendChild(retailListEl);
        retailListEl.appendChild(sectorNameEl);
        retailListEl.appendChild(sectorChangeEL);
        retailTitleEL.textContent = 'Sector Performance'
        sectorNameEl.textContent = data.sectorPerformance[i].sector
        sectorChangeEL.textContent = data.sectorPerformance[i].changesPercentage
        if (parseFloat(data.sectorPerformance[i].changesPercentage)>0) {
            
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-up";
            sectorChangeEL.appendChild(arrowEl);
            
        }
        else {
            let arrowEl = document.createElement('span');
            arrowEl.className = "arrow-down";
            sectorChangeEL.appendChild(arrowEl);
        }
       
    }
}

let savedTickerArr = [];
let saveSearch = function(ticker) {
    savedTickerArr.push(ticker);
    localStorage.setItem('history', JSON.stringify(savedTickerArr));
}

let displaySaved = function () {
    searchHistoryEl.innerHTML='';
    for (let i = 0; i < savedTickerArr.length; i++) {
        let savedTickerEl = document.createElement('p');
        searchHistoryEl.appendChild(savedTickerEl)
        savedTickerEl.textContent= savedTickerArr[i];
        
      console.log(' fired')
    }
}

let loadsaved = function() {
    let savedTicker = JSON.parse(localStorage.getItem('history'))

    if (!savedTicker) {
        return false;
    }  
    savedTickerArr = savedTicker;
}

let submitHandler = function (event) {
    event.preventDefault();
    let ticker = tickerInputEl.value.trim();
    
    getTicker(ticker);
    saveSearch(ticker);
    displaySaved();
}

let getTicker =function(ticker) {
let alpha3Url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+ ticker +'&apikey=EDF52AZBF2DHJGYX' 
// let alpha4Url = 'https://www.alphavantage.co/query?function=EARNINGS_CALENDAR&'+ ticker +'=3month&apikey=EDF52AZBF2DHJGYX' 
fetch (alpha3Url)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);
                searchDisplay(data);
            })
        }
})
}

// display search result 

let searchDisplay1ContainerEl = document.querySelector('#search-display1')
let searchDisplay = function (data) {
    searchDisplay1ContainerEl.innerHTML="";
    var SD1El = document.createElement('p');
    searchDisplay1ContainerEl.appendChild(SD1El);

    SD1El.textContent = data.Description; 
    
}

formEl.addEventListener('submit',submitHandler)