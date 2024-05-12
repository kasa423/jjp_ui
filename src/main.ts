import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import element from 'element-plus'
import 'element-plus/dist/index.css' 

const app = createApp(App)
app.use(router)
app.use(element)

app.mount('#app')
