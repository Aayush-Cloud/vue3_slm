import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUserSecret, 
  faTableColumns, 
  faInfo, 
  faCirclePlus, 
  faArrowRight, 
  faArrowLeft, 
  faSearch, 
  faBriefcase, 
  faGears, 
  faUserTie, 
  faTicketAlt, 
  faCircle, 
  faTrash, 
  faPenSquare,
  faArrowRightFromBracket,
  faTimes,faFilter
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserSecret, 
  faTableColumns, 
  faInfo, 
  faCirclePlus, 
  faArrowRight, 
  faArrowLeft, 
  faSearch, 
  faBriefcase, 
  faGears, 
  faUserTie, 
  faTicketAlt, 
  faCircle, 
  faTrash, 
  faPenSquare,
  faArrowRightFromBracket,
  faTimes,faFilter
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
