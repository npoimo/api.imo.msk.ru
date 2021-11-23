const getDataProps = {
  query: {
    program: 'program',
    review: 'review',
    teacher: 'teacher',
    webinar: 'webinar'
  },
  select: {
    program: {
      default:
        'id title slug studyField studyFieldSlug type typeLabel studyMounthsDuration',
      studyFields: 'id studyField studyFieldSlug',
      pathsStudyFields: 'id studyFieldSlug type',
      pathsPrograms: 'id slug studyFieldSlug type'
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
  }
}

module.exports = getDataProps
