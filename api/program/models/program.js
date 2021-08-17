'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify')

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      data.title && (data.slug = slugify(data.title, { lower: true }))

      data.studyForm === 'Blended' && (data.studyFormLabel = 'Очно-заочная')
      data.studyForm === 'Online' && (data.studyFormLabel = 'Заочная')
      data.studyForm === 'Fulltime' && (data.studyFormLabel = 'Очная')

      data.type === 'Course' && (data.typeLabel = 'Курс')
      data.type === 'Profession' && (data.typeLabel = 'Профессия')
    },
    beforeUpdate: async (params, data) => {
      data.title && (data.slug = slugify(data.title, { lower: true }))

      data.studyForm === 'Blended' && (data.studyFormLabel = 'Очно-заочная')
      data.studyForm === 'Online' && (data.studyFormLabel = 'Заочная')
      data.studyForm === 'Fulltime' && (data.studyFormLabel = 'Очная')

      data.type === 'Course' && (data.typeLabel = 'Курс')
      data.type === 'Profession' && (data.typeLabel = 'Профессия')
    }
  }
}
