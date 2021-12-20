'use strict'

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { getData, getDataProps } = require('../../../helpers')
const {
  program
} = require('../../get-static-props/controllers/get-static-props')

module.exports = {
  studyFields: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = [
      ...new Set(programs.map(program => program.study_field?.slug))
    ].map(slug => ({
      params: { studyFieldSlug: slug }
    }))

    return paths
  },
  studyFieldsCourse: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = [
      ...new Set(
        programs.map(program => ({
          slug: program.study_field?.slug,
          type: program.category?.type
        }))
      )
    ]
      .filter(program => program.category?.type.toLowerCase() === 'course')
      .map(({ slug }) => ({
        params: { studyFieldSlug: slug }
      }))

    return paths
  },
  studyFieldsProfession: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = programs
      .filter(program => program.category?.type.toLowerCase() === 'profession')
      .map(({ study_field: { slug } }) => ({
        params: { studyFieldSlug: slug }
      }))

    return paths
  },
  studyFieldsMBA: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsStudyFields,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = programs
      .filter(program => program.category?.type.toLowerCase() === 'mba')
      .map(({ study_field: { slug } }) => ({
        params: { studyFieldSlug: slug }
      }))

    return paths
  },
  programs: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = programs.map(({ study_field, slug }) => ({
      params: { slug, studyFieldSlug: study_field.slug }
    }))

    return paths
  },
  programsCourse: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = programs
      .filter(program => program.category?.type.toLowerCase() === 'course')
      .map(({ study_field, slug }) => ({
        params: { slug, studyFieldSlug: study_field.slug }
      }))

    return paths
  },
  programsProfession: async () => {
    const programs = await getData({
      query: getDataProps.query.program,
      select: getDataProps.select.program.pathsPrograms,
      populate: getDataProps.populate.program.studyFieldSlugs
    })

    const paths = programs
      .filter(program => program.category?.type.toLowerCase() === 'profession')
      .map(({ study_field, slug }) => ({
        params: { slug, studyFieldSlug: study_field.slug }
      }))

    return paths
  }
}
