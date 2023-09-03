const Data = `{
    "ticker": {
        "base": "BTC",
        "target": "IDR",
        "price": "345001012323.0000",
        "volume": "28.242343245",
        "change": "-40000.000000000",
    },
    "timestamp": 163246523,
    "success": true,
    "error": "",
}`

// change from json to js(object)
const parse = JSON.parse(Data);


const Me = {
    name: 'damar',
    gender: 'male',
}

// change from js(object) to json
const stringify = JSON.stringify(Me);