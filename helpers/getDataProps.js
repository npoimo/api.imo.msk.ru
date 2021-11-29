const getDataProps = {
  query: {
    program: 'program',
    review: 'review',
    teacher: 'teacher',
    webinar: 'webinar'
  },
  select: {
    program: {
      default: 'id title slug type typeLabel studyMounthsDuration study_field',
      studyFields: 'id study_field',
      pathsStudyFields: 'id study_field type',
      pathsPrograms: 'id slug study_field type'
    },
    review: {
      default: 'id name profession title story picture'
    },
    teacher: {
      default: 'id name achievements portrait'
    },
    webinar: {
      default: 'id name date picture title'
    }
  },
  populate: {
    program: {
      default: [{ path: 'study_field', select: 'title slug' }],
      studyFieldSlugs: [{ path: 'study_field', select: 'slug' }]
    }
  }
}

module.exports = getDataProps
