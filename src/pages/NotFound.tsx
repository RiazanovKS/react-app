import React from 'react'
import i18next from '../app/i18n'

const NotFound = () => {
  return (
    <>
      <h1>{i18next.t('pages.notFound.title')}</h1>
      <h2>{i18next.t('pages.notFound.description')}</h2>
    </>  
    )
}

export default NotFound