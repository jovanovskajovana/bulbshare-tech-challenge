const path = require('path')
const fs = require('fs')

exports.handler = async function (event, context) {
  try {
    const rawData = fs.readFileSync(
      path.resolve(__dirname, '../data/feed.json')
    )
    const data = JSON.parse(rawData.toString())

    const { page, limit } = event.queryStringParameters

    const startIndex = page * limit - limit
    const endIndex = page * limit

    const slicedArray = data.slice(startIndex, endIndex)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slicedArray),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching feed' }),
    }
  }
}
