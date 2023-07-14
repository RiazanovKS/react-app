import React from 'react'
import i18next from '../app/i18n'

const Home = () => {
  return (
    <>
      <h1>{i18next.t('pages.home.title')}</h1>
      <h2>{i18next.t('pages.home.description')}</h2>
    </>  
  )
}

export default Home