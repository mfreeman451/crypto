const fetch = require('node-fetch')

const coins = [
    {
        "name": "cake",
        "URL": 'https://api.coingecko.com/api/v3/coins/pancakeswap-token',
        "icon": 33803,
    },
    {
        "name": "bunny",
        "URL": 'https://api.coingecko.com/api/v3/coins/pancake-bunny',
        "icon": 43314,
    },
    {
        "name": "uniswap",
        "URL": 'https://api.coingecko.com/api/v3/coins/uniswap',
        "icon": 10602,
    }
]

const laMetricURL   = 'https://192.168.1.128:4343/api/v1/dev/widget/update/com.lametric.a4b1372fbc776e9409ff666a0ec30503/1'

const headers = {
    "Accept": "application/json",
    "X-Access-Token": "MWFlMzE3NGM5NGUxOThhNjI1NGU5MDk0NzNiZTRhN2JlNGUxNWQyYmMyYjZmZTdjZTI2MDFmMWE0YmRlN2Y2Nw==",
    "Cache-Control": "no-cache"
}

let laMetricData = {
    "frames": [
    ]
}

console.log(coins.forEach(getCoinData))
console.log(laMetricData)

function getCoinData (item, index) {
    fetch( item.URL )
      .then(response => response.json())
      .then(data => {
        const myData = {
          "text": abbreviateNumber(data.market_data.total_value_locked.usd),
          "index": 0,
          "icon": item.icon
        }

        laMetricData.frames.push(myData)
          if (coins.length === laMetricData.frames.length) {
              updateLaMetric(laMetricData)
          }
      })
      .catch(err => {
          console.log(err)
      })
}

function updateLaMetric (laMetricData) {
    fetch( laMetricURL, { method: 'POST', headers: headers, body: JSON.stringify(laMetricData) })
        .then((res) => {
            return res
        }).catch(err => {
        console.log(err)
    })
}

function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B","T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }

    newValue = newValue.toPrecision(3);

    newValue += suffixes[suffixNum];
    return newValue;
}
