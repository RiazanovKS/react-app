import i18next from "i18next";
import { ru, en } from '../../entities/locales'

i18next.init({
    lng: 'en',
    debug: true,
    resources: {
        ru,
        en
    }
})

export default i18next;