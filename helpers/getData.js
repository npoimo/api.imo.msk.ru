const selectFields = require('./selectFields')

const getData = async ({ query, select } = {}) => {
  const data = await strapi
    .query(query)
    .model.find({ published_at: { $ne: null } }, select)

  const output = select
    ? data.map(program => selectFields({ obj: program, select }))
    : data

  return output
}

module.exports = getData
