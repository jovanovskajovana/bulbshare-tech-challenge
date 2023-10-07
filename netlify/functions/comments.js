const path = require('path')
const fs = require('fs')

exports.handler = async function (event, context) {
  try {
    const rawdata = fs.readFileSync(
      path.resolve(__dirname, '../data/comments.json')
    )
    const data = JSON.parse(rawdata.toString())

    const id = event.path.split('/').pop()
    const foundDoc = data.filter((document) => document.briefref == id)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(foundDoc),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching comments' }),
    }
  }
}
