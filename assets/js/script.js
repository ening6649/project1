// fetch(yahoo finance api=yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE)

// -H 'accept: application/json' \
// -H 'X-API-KEY: yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE''

// FMP 7a878c27bf0e17dc1eea0a749c7d6bc3
// let alphaUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
// fetch (alphaUrl)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//             })
//         }
//     })


// main display
let tickerInputEl = document.querySelector('#ticker')
let formEl = document.querySelector('#search-form')


let CScontainerEl = document.querySelector('#cscontainer')

let alphaUrl = 'https://www.alphavantage.co/query?function=CONSUMER_SENTIMENT&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
fetch (alphaUrl)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);
                displayCS(data)
            })
        }
    })
let CStitleEL = document.createElement('h3')
CScontainerEl.appendChild(CStitleEL)
let displayCS = function(data) {
    for (let i = 0; i < 12; i++) {
        
        let CSlistEl = document.createElement('ul');
        let CSdateEl = document.createElement('li');
        let CSreadEL = document.createElement('li');
        
        CScontainerEl.appendChild(CSlistEl);
        CSlistEl.appendChild(CSdateEl);
        CSlistEl.appendChild(CSreadEL);
        CStitleEL.textContent = data.name
        CSdateEl.textContent = data.data[i].date;
        CSreadEL.textContent = data.data[i].value
       
    }
}

let retailContainerEl = document.querySelector('#retailcontainer')

let alpha1Url = 'https://www.alphavantage.co/query?function=RETAIL_SALES&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
fetch (alpha1Url)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);
                displayretail(data)
            })
        }
    })

let retailTitleEL = document.createElement('h3')
retailContainerEl.appendChild(retailTitleEL)
let displayretail = function(data) {
    for (let i = 0; i < 12; i++) {
        let retailListEl = document.createElement('ul');
        let retailDateEl = document.createElement('li');
        let retailReadEL = document.createElement('li');
        retailContainerEl.appendChild(retailListEl);
        retailListEl.appendChild(retailDateEl);
        retailListEl.appendChild(retailReadEL);
        retailTitleEL.textContent = data.name
        retailDateEl.textContent = data.data[i].date;
        retailReadEL.textContent = '$' +data.data[i].value + " Million"
       
    }
}

let CPIcontainerEl = document.querySelector('#CPIcontainer')

let alpha2Url = 'https://www.alphavantage.co/query?function=CPI&interval=monthly&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
fetch (alpha2Url)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);
                displayCPI(data)
            })
        }
    })

let CPItitleEL = document.createElement('h3')
CPIcontainerEl.appendChild(CPItitleEL)
let displayCPI = function(data) {
    for (let i = 0; i < 12; i++) {
        let CPIlistEl = document.createElement('ul');
        let CPIdateEl = document.createElement('li');
        let CPIreadEL = document.createElement('li');
        CPIcontainerEl.appendChild(CPIlistEl);
        CPIlistEl.appendChild(CPIdateEl);
        CPIlistEl.appendChild(CPIreadEL);
        CPItitleEL.textContent = data.name;
        CPIdateEl.textContent = data.data[i].date;
        CPIreadEL.textContent = data.data[i].value
       
    }
}


let getTicker =function(ticker) {
let alpha3Url = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol='+ ticker +'&apikey=EDF52AZBF2DHJGYX' 
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

let submitHandler = function (event) {
    event.preventDefault();
    let ticker = tickerInputEl.value.trim();
    getTicker(ticker);
    
}

// display search result 
let searchDisplay1ContainerEl = document.querySelector('#search-display1')
let searchDisplay = function (data) {
    let SD1El = document.createElement('p');
    searchDisplay1ContainerEl.appendChild(SD1El);
    SD1El.textContent = data.Description; 
    
}

formEl.addEventListener('submit',submitHandler)








// let aletheiaUrl ="api=BD5ECE0DD71440BA981561509965239B"

// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL',
//   params: {modules: 'defaultKeyStatistics,assetProfile'},
//   headers: {
//     'x-api-key': 'api=yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE'
//   }
// };

// fetch (options)
// .then(function(response){
//     if(response.ok) {
//         response.json().then(function(data){
//             console.log (data);
//         })
//     }
// })

// let options = {
//     method:"GET",
//     mode:'no-cors'
// }
// let elphaUrl = 'https://dashboard.nbshare.io/api/v1/apps/reddit' 
// fetch (elphaUrl, options)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//             })
//         }
//     })

// curl https://dashboard.nbshare.io/api/v1/apps/reddit

// fetch('https://dashboard.nbshare.io/api/v1/apps/reddit' )