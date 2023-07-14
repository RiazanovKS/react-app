import React from 'react'
import i18next from '../app/i18n'

const Contacts = () => {
  return (
    <>
      <h1>{i18next.t('pages.contacts.title')}</h1>
      <h2>{i18next.t('pages.contacts.description')}</h2>
    </>    )
}

export default Contacts