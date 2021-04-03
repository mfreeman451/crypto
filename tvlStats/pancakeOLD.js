const fetch = require('node-fetch')

const coinGeckoURL  = 'https://api.coingecko.com/api/v3/coins/pancake-bunny'
const laMetricURL   = 'https://192.168.1.128:4343/api/v1/dev/widget/update/com.lametric.a4b1372fbc776e9409ff666a0ec30503/1'

const headers = {
    "Accept": "application/json",
    "X-Access-Token": "MWFlMzE3NGM5NGUxOThhNjI1NGU5MDk0NzNiZTRhN2JlNGUxNWQyYmMyYjZmZTdjZTI2MDFmMWE0YmRlN2Y2Nw==",
    "Cache-Control": "no-cache"
}



fetch( coinGeckoURL )
  .then(response => response.json())
  .then(data => {
    console.log(abbreviateNumber(data.market_data.total_value_locked.usd))
    const laMetricData = {
      "frames": [
          {
              "text": abbreviateNumber(data.market_data.total_value_locked.usd),
              "index": 0,
              // "icon": 9389,
              "icon": 43314,
          }
      ]
    }
    console.log(laMetricData)
    fetch( laMetricURL, { method: 'POST', headers: headers, body: JSON.stringify(laMetricData) })
        .then((res) => {
            console.log('Sent to laMetric')
            console.log(res)
            return res
        }).catch(err => {
            console.log(err)
        })

  })
  .catch(err => {
      console.log(err)
  })


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
