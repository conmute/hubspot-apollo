const { buildSchema } = require('graphql')
const fs = require('fs')
const path = require('path')

const stringSchema = fs
  .readdirSync(__dirname)
  .filter(file => /\.graphql$/.test(file))
  .map(f => fs.readFileSync(path.join(__dirname, f), 'utf8'))
  .join('\n\n')

module.exports = buildSchema(stringSchema)
