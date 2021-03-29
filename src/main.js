import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faArrowsAltH,
	faArrowsAltV,
	faBackward,
	faBookOpen,
	faCaretDown,
	faCaretLeft,
	faCaretRight,
	faChevronLeft,
	faChevronRight,
	faChevronUp,
	faComment,
	faCompressArrowsAlt,
	faDownload,
	faExpandArrowsAlt,
	faExternalLinkAlt,
	faForward,
	faLink,
	faListAlt,
	faMicrophoneSlash,
	faSlash,
	faThumbtack,
	faTimes,
	faVideo,
	faVideoSlash
} from '@fortawesome/free-solid-svg-icons'
import { faFrown } from '@fortawesome/free-regular-svg-icons'
import {
	FontAwesomeIcon,
	FontAwesomeLayers
} from '@fortawesome/vue-fontawesome'
import VShowSlide from 'v-show-slide'
import router from './routes.js'

library.add(
	faArrowsAltH,
	faArrowsAltV,
	faBackward,
	faBookOpen,
	faCaretDown,
	faCaretLeft,
	faCaretRight,
	faChevronLeft,
	faChevronRight,
	faChevronUp,
	faComment,
	faCompressArrowsAlt,
	faDownload,
	faExpandArrowsAlt,
	faExternalLinkAlt,
	faForward,
	faFrown,
	faLink,
	faListAlt,
	faMicrophoneSlash,
	faSlash,
	faThumbtack,
	faTimes,
	faVideo,
	faVideoSlash
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)

Vue.use(VShowSlide)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
