'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { getData, getDataProps } = require('../../../helpers')

module.exports = {
  studyFields: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields
    })

    const paths = programs.map(({ studyFieldSlug }) => ({
      params: { studyFieldSlug }
    }))

    return paths
  },
  studyFieldsCourse: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields
    })

    const paths = programs
      .filter(program => program.type.toLowerCase() === 'course')
      .map(({ studyFieldSlug }) => ({
        params: { studyFieldSlug }
      }))

    return paths
  },
  studyFieldsProfession: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields
    })

    const paths = programs
      .filter(program => program.type.toLowerCase() === 'profession')
      .map(({ studyFieldSlug }) => ({
        params: { studyFieldSlug }
      }))

    return paths
  },
  programs: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms
    })

    const paths = programs.map(({ studyFieldSlug, slug }) => ({
      params: { slug, studyFieldSlug }
    }))

    return paths
  },
  programsCourse: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms
    })

    const paths = programs
      .filter(program => program.type.toLowerCase() === 'course')
      .map(({ studyFieldSlug, slug }) => ({
        params: { slug, studyFieldSlug }
      }))

    return paths
  },
  programsProfession: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms
    })

    const paths = programs
      .filter(program => program.type.toLowerCase() === 'profession')
      .map(({ studyFieldSlug, slug }) => ({
        params: { slug, studyFieldSlug }
      }))

    return paths
  }
}
