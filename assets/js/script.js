// fetch(yahoo finance api=yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE)

// -H 'accept: application/json' \
// -H 'X-API-KEY: yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE''

// fetch(alpha Vantage api = EDF52AZBF2DHJGYX)
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

let displayCS = function(data) {
    for (let i = 0; i < 12; i++) {
        let CSlistEl = document.createElement('ul');
        let CSdateEl = document.createElement('li');
        let CSreadEL = document.createElement('li');
        CScontainerEl.appendChild(CSlistEl);
        CSlistEl.appendChild(CSdateEl);
        CSlistEl.appendChild(CSreadEL);
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

let displayretail = function(data) {
    for (let i = 0; i < 12; i++) {
        let retailListEl = document.createElement('ul');
        let retailDateEl = document.createElement('li');
        let retailReadEL = document.createElement('li');
        retailContainerEl.appendChild(retailListEl);
        retailListEl.appendChild(retailDateEl);
        retailListEl.appendChild(retailReadEL);
        retailDateEl.textContent = data.data[i].date;
        retailReadEL.textContent = data.data[i].value
       
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

let displayCPI = function(data) {
    for (let i = 0; i < 12; i++) {
        let CPIlistEl = document.createElement('ul');
        let CPIdateEl = document.createElement('li');
        let CPIreadEL = document.createElement('li');
        CPIcontainerEl.appendChild(CPIlistEl);
        CPIlistEl.appendChild(CPIdateEl);
        CPIlistEl.appendChild(CPIreadEL);
        CPIdateEl.textContent = data.data[i].date;
        CPIreadEL.textContent = data.data[i].value
       
    }
}

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

// let elphaUrl = 'https://dashboard.nbshare.io/api/v1/apps/reddit' 
// fetch (elphaUrl)
//     .then(function(response){
//         if(response.ok) {
//             response.json().then(function(data){
//                 console.log (data);
//             })
//         }
//     })

// curl https://dashboard.nbshare.io/api/v1/apps/reddit

// fetch('https://dashboard.nbshare.io/api/v1/apps/reddit' )