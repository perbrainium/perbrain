
import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'
import '@/styles/main.scss'
import { md2 } from 'vuetify/blueprints'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'
// import colors from 'vuetify/util/colors'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  blueprint: md2,
  theme: {
    defaultTheme: 'light',
  },
})

