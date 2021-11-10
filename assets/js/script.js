// fetch(yahoo finance api=yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE)
let yahooUrl = 'https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL'
// -H 'accept: application/json' \
// -H 'X-API-KEY: yorOBlbMm41rqHcFnwYIy3OmmU4E1v9m6IuUqxuE''
fetch(yahooUrl)
// fetch(alpha Vantage api = EDF52AZBF2DHJGYX)

let alphaUrl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=tsla&apikey=EDF52AZBF2DHJGYX' 
fetch (alphaUrl)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);
            })
        }
    })


//let aletheiaUrl ="api=BD5ECE0DD71440BA981561509965239B"