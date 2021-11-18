

// chart start

let date0 = moment().subtract(2, "month").format("MMM-YY");
let date1 = moment().subtract(3, "month").format("MMM-YY");
let date2 = moment().subtract(4, "month").format("MMM-YY");
let date3 = moment().subtract(5, "month").format("MMM-YY");
let date4 = moment().subtract(6, "month").format("MMM-YY");
let date5 = moment().subtract(7, "month").format("MMM-YY");
let date6 = moment().subtract(8, "month").format("MMM-YY");
let date7 = moment().subtract(9, "month").format("MMM-YY");
let date8 = moment().subtract(10, "month").format("MMM-YY");
let date9 = moment().subtract(11, "month").format("MMM-YY");
let date10 = moment().subtract(12, "month").format("MMM-YY");
let date11 = moment().subtract(13, "month").format("MMM-YY");

let alphaUrl = 'https://www.alphavantage.co/query?function=CONSUMER_SENTIMENT&symbol=spy&interval=15min&apikey=EDF52AZBF2DHJGYX' 
fetch (alphaUrl)
    .then(function(response){
        if(response.ok) {
            response.json().then(function(data){
                console.log (data);   

const csData = [
    { id: "d0", date: date0, value: data.data[0].value},
    { id: "d1", date: date1, value: data.data[1].value},
    { id: "d2", date: date2, value: data.data[2].value},
    { id: "d3", date: date3, value: data.data[3].value},
    { id: "d4", date: date4, value: data.data[4].value},
    { id: "d5", date: date5, value: data.data[5].value},
    { id: "d6", date: date6, value: data.data[6].value},
    { id: "d7", date: date7, value: data.data[7].value},
    { id: "d8", date: date8, value: data.data[8].value},    
    { id: "d9", date: date9, value: data.data[9].value},
    { id: "d10", date:date10, value: data.data[10].value},
    { id: "d11", date:date11, value: data.data[11].value},
  ];
  
  
  
  // margins for bottom label
  const margins = {top: 20, bottom:37};
  const chartWidth = 800;
  const chartHeight = 600 - margins.top - margins.bottom;
  

  const x = d3.scaleBand().rangeRound([0, chartWidth]).padding(0.1);
  const y = d3.scaleLinear().range([chartHeight, 0]);
  
  
  const chartContainer = d3
    .select(".chart")
    .append("svg")
    // this allows the chart to sesize according to screen size
    .attr("viewBox", `0 0 800 600`)
    // .attr("width", chartWidth)
    // .attr("height", chartHeight + margins.top + margins.bottom)
    
    
  

  x.domain(csData.map((d) => d.date));
  // d3.max built in feature that looks at all my data values and uses the highest value as the upperbound        
//   y.domain([0, d3.max(csData, d => d.value) + 10])
  y.domain([0, 120])
  
  
  // 'g' creates a group in the svg element
  const chart = chartContainer.append('g');
  // axis bottom puts the date labels below the axis not on the bottom of the screen
  chart
  .append("g")
  // tick size outer removes tick on edge of labels
  .call(d3.axisBottom(x).tickSizeOuter(0))
  .attr("transform", `translate(0, ${chartHeight})`)
  .selectAll("text")
  .attr("color", "#000")
  .style("font", "15px times")
  .style("text-anchor", "end")
  .attr("transform", "rotate(-65)" );;
  
  chart
    .selectAll(".bar")
    .data(csData)
    .enter()
    // "rect" created a rectangle in the svg element
    .append("rect")
    .classed("bar", true)
    // bandwidth takes account of how many bars we have and makes them fit into the graph taking acount of the padding
    .attr("width", x.bandwidth())
    // this caculates the position along the y axis for this element
    .attr("height", (data) => chartHeight - y(data.value))
    .attr("x", (data) => x(data.date))
    .attr("y", (data) => y(data.value));
    
  
  chart
  .selectAll(".label")
  .data(csData)
  .enter()
  .append("text")
  .text(data => data.value)
  // positioning the value
  .attr("x", data => x(data.date) + x.bandwidth() / 2)
  .attr("y", data => y(data.value) - 20)
  // this centers value text in the middle
  .attr("text-anchor", "middle")
  .attr()
//   .classed("label", true);

})
}
})
  
  // chart end


  


// // main display
let tickerInputEl = document.querySelector('#ticker')
let formEl = document.querySelector('#search-form')
let searchHistoryEl = document.querySelector('#search-history')

let FMPUrl = 'https://financialmodelingprep.com/api/v3/gainers?apikey=72e950cfc67af845b9287ee5c40111b5' 
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
        let cardDiv1El = document.createElement('div');
        let cardDiv2El = document.createElement('div')
        let cardDiv3El = document.createElement('div')
        let CPIlistEl = document.createElement('ul');
        let gainerNameEl = document.createElement('li');
        let gainerTickerEL = document.createElement('li');
        let gainerPriceEl = document.createElement('li')
        let gainerChangeEl = document.createElement('li')

        
        CPIcontainerEl.appendChild(cardDiv1El);
        cardDiv1El.appendChild(cardDiv2El);
        cardDiv2El.appendChild(cardDiv3El)
        cardDiv3El.appendChild(CPIlistEl);
        CPIlistEl.appendChild(gainerNameEl);
        CPIlistEl.appendChild(gainerTickerEL);
        CPIlistEl.appendChild(gainerPriceEl);
        CPIlistEl.appendChild(gainerChangeEl)
        CPIlistEl.className='no-bullet'
        cardDiv1El.className='column column-block '
        cardDiv2El.className='card'
        cardDiv3El.className='card-section callout secondary'
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
let FMP1Url = 'https://financialmodelingprep.com/api/v3/actives?apikey=72e950cfc67af845b9287ee5c40111b5'
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
        let cardDiv1El = document.createElement('div');
        let cardDiv2El = document.createElement('div')
        let cardDiv3El = document.createElement('div')
        let CSlistEl = document.createElement('ul');
        let activeNameEl = document.createElement('li');
        let activeTickerEL = document.createElement('li');
        let activePriceEl = document.createElement('li')
        let activeChangeEl = document.createElement('li')
        
        CScontainerEl.appendChild(cardDiv1El);
        cardDiv1El.appendChild(cardDiv2El);
        cardDiv2El.appendChild(cardDiv3El);
        cardDiv3El.appendChild(CSlistEl);
        CSlistEl.appendChild(activeNameEl);
        CSlistEl.appendChild(activeTickerEL);
        CSlistEl.appendChild(activePriceEl)
        CSlistEl.appendChild(activeChangeEl);
        CSlistEl.className='no-bullet'
        cardDiv1El.className='column column-block '
        cardDiv2El.className='card'
        cardDiv3El.className='card-section callout secondary'
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
        let cardDiv1El = document.createElement('div');
        let cardDiv2El = document.createElement('div')
        let cardDiv3El = document.createElement('div')
        let retailListEl = document.createElement('ul');
        let sectorNameEl = document.createElement('li');
        let sectorChangeEL = document.createElement('li');
        retailContainerEl.appendChild(cardDiv1El);
        cardDiv1El.appendChild(cardDiv2El);
        cardDiv2El.appendChild(cardDiv3El)
        cardDiv3El.appendChild(retailListEl);
        retailListEl.appendChild(sectorNameEl);
        retailListEl.appendChild(sectorChangeEL);
        retailListEl.className='no-bullet'
        cardDiv1El.className='column column-block '
        cardDiv2El.className='card'
        cardDiv3El.className='card-section callout secondary'
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



let loadsaved = function() {
    let savedTicker = JSON.parse(localStorage.getItem('history'))

    if (!savedTicker) {
        return false;
    }  
    savedTickerArr = savedTicker;
}
loadsaved();


let displaySaved = function () {
    searchHistoryEl.innerHTML='';
    for (let i = 0; i < savedTickerArr.length; i++) {
        let savedTickerEl = document.createElement('p');
        searchHistoryEl.appendChild(savedTickerEl)
        savedTickerEl.className = 'save-search'
        savedTickerEl.textContent= savedTickerArr[i]; 
    }

}

displaySaved();



let submitHandler = function (event) {
    event.preventDefault();
    let ticker = tickerInputEl.value.trim();
    
    getTicker(ticker);
    saveSearch(ticker);
    displaySaved();
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



// display search result 

let searchDisplay1ContainerEl = document.querySelector('#search-display1')
let searchDisplay = function (data) {
    searchDisplay1ContainerEl.innerHTML="";
    var SD1El = document.createElement('p');
    let SD1Ul = document.createElement('ul');
    let SD1Li1 = document.createElement ('li');
    let SD2Li2 = document.createElement ('li');
    let SD3Li3 = document.createElement('li');
    searchDisplay1ContainerEl.appendChild(SD1El);
    searchDisplay1ContainerEl.appendChild(SD1Ul);
    SD1Ul.appendChild(SD1Li1);
    SD1Ul.appendChild(SD2Li2);
    SD1Ul.appendChild(SD3Li3);
    SD1Ul.className = 'no-bullet'
    SD1El.textContent = data.Description; 
    SD1Li1.textContent = 'Beta: ' +data.Beta + " /Beta is a measure of a stock's volatility in relation to the overall market. i.e. the S&P 500 Index, has a beta of 1.0 "
    SD2Li2.textContent ='Forward PE: ' +data.ForwardPE + ' /earnings per share expected to be generated per share over the next 12 months'
    SD3Li3.textContent = 'Trailing Price to Sales: '+ data.PriceToSalesRatioTTM + " /stock price per share the underlying company's sales. i.e. a high number impliles a high stock price"

}


// history styleing 
$(function(){
    $("#search-history").find("p").filter(":even").css({"background-color":"rgb(204, 201, 201)","color":"black"});
    $("#search-history").find("p").filter(":odd").css({"background-color":"black","color":"white"});
});

// img slider 
// $(function() {
//     var galleryImage = $(".gallery").find("img").first();
//     var image = [
//         "assets/img/slide1.jpg",
//         "assets/img/slide2.jpg",
//         "assets/img/slide3.jpg",
//     ];
//     var i =0;
//     setInterval(function(){
//         i = (i+1) % image.length;
//         galleryImage.fadeOut(function(){
//             $(this).arrr("src" , image[i]);
//             $(this).fadeIn();
//         }, 2000);

//     });
// });



// searchDisplay(savedTickerArr[0]);


formEl.addEventListener('submit',submitHandler)