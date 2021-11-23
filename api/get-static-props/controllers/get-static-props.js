'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const { getData, getDataProps } = require('../../../helpers')

module.exports = {
  about: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    return { programs }
  },
  contact: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    return { programs }
  },
  index: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.default
    })

    const reviews = await getData({
      query: getDataProps.query.review,
      select: getDataProps.select.review.default
    })

    return { programs, reviews }
  },
  legal: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    return { programs }
  },
  payment: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    return { programs }
  },
  reviews: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    const reviews = await getData({
      query: getDataProps.query.review,
      select: getDataProps.select.review.default
    })

    return { programs, reviews }
  },
  teachers: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    const teachers = await getData({
      query: getDataProps.query.teacher,
      select: getDataProps.select.teacher.default
    })

    return { programs, teachers }
  },
  webinars: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.studyFields
    })

    const webinars = await getData({
      query: getDataProps.query.webinar,
      select: getDataProps.select.webinar.default
    })

    return { programs, webinars }
  },
  programs: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.default
    })

    return { programs }
  },
  program: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.default
    })

    return { programs }
  }
}
