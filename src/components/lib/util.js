/*
  This is a utility library for functions used by many different components.
*/

/* eslint-disable */

const SERVER = `https://psfoundation.cash`

class Util {
  // Get token and BCH prices from the psfoundation server.
  async getPrice() {
    try {
      const resp = await fetch(`${SERVER}/price`)
      const body = await resp.json()

      const obj = {}

      obj.usdPerToken = body.usdPerToken
      obj.usdPerBCH = body.usdPerBCH
      obj.bchBalance = body.bchBalance
      obj.tokenBalance = body.tokenBalance

      console.log(`util.js/getPrice():`)
      console.log(`usdPerToken: ${obj.usdPerToken}`)
      console.log(`usdPerBCH: ${obj.usdPerBCH}`)
      console.log(`bchBalance: ${obj.bchBalance}`)
      console.log(`tokenBalance: ${obj.tokenBalance}`)

      return obj
    } catch (err) {
      console.log(`Error in index.js/getPrice()`)
      throw err
    }
  }

  // Convert a floating point value of BCH into integer value of satoshis.
  bch2sats(bch) {
    try {
      return Math.round(bch * 100000000)
    } catch (err) {
      console.log(`Error in util.js/bch2sats()`)
      throw err
    }
  }

  // Takes a number and returns it, rounded to the nearest 8 decimal place.
  eightDecimals(num) {
    const thisNum = Number(num)

    let tempNum = thisNum * 100000000
    tempNum = Math.floor(tempNum)
    tempNum = tempNum / 100000000

    return tempNum
  }

  // Takes a number and returns it, rounded to the nearest 8 decimal place.
  twoDecimals(num) {
    const thisNum = Number(num)

    let tempNum = thisNum * 100
    tempNum = Math.floor(tempNum)
    tempNum = tempNum / 100

    return tempNum
  }
}

export default Util
