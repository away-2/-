import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import ElContainer from './components/container'
import ElButton from './components/button'
import ElForm from './components/form'

const app = createApp(App)
app.use(ElContainer)
app.use(ElButton)
app.use(ElForm)
app.mount('#app')
