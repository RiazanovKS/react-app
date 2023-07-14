import React from 'react'
import i18next from '../app/i18n'

const About = () => {
  return (
    <>
      <h1>{i18next.t('pages.about.title')}</h1>
      <h2>{i18next.t('pages.about.description')}</h2>
    </>
  )
}

export default About