import { defineConfig } from 'vitepress'

export default defineConfig({
    // shared properties and other top-level stuff...

    locales: {
        root: {
            label: 'Türkçe',
            lang: 'tr', // optional, will be added  as `lang`  
        },
        en: {
            label: 'English',
            lang: 'en'
        },
    }
})