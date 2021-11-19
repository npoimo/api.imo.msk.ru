'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify')

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      data.title && ((data.slug = slugify(data.title, { lower: true })), 'slug')
      data.studyField &&
        (data.studyFieldSlug =
          slugify(data.studyField, { lower: true }) || 'studyFieldSlug')

      data.studyForm === 'Blended' && (data.studyFormLabel = 'Очно-заочная')
      data.studyForm === 'Online' && (data.studyFormLabel = 'Заочная')
      data.studyForm === 'Fulltime' && (data.studyFormLabel = 'Очная')

      data.type === 'Course' && (data.typeLabel = 'Курс')
      data.type === 'Profession' && (data.typeLabel = 'Профессия')

      data.type === 'Course' &&
        (data.typeFullLabel =
          'Дополнительная профессиональная программа повышения квалификации')
      data.type === 'Profession' &&
        (data.typeFullLabel =
          'Дополнительная профессиональная программа профессиональной переподготовки')
    },
    beforeUpdate: async (params, data) => {
      data.title && (data.slug = slugify(data.title, { lower: true }) || 'slug')
      data.studyField &&
        (data.studyFieldSlug =
          slugify(data.studyField, { lower: true }) || 'studyFieldSlug')

      data.studyForm === 'Blended' && (data.studyFormLabel = 'Очно-заочная')
      data.studyForm === 'Online' && (data.studyFormLabel = 'Заочная')
      data.studyForm === 'Fulltime' && (data.studyFormLabel = 'Очная')

      data.type === 'Course' && (data.typeLabel = 'Курс')
      data.type === 'Profession' && (data.typeLabel = 'Профессия')

      data.type === 'Course' &&
        (data.typeFullLabel =
          'Дополнительная профессиональная программа повышения квалификации')
      data.type === 'Profession' &&
        (data.typeFullLabel =
          'Дополнительная профессиональная программа профессиональной переподготовки')
    }
  }
}
