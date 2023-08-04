import { App } from 'vue'
import ElButton from './Button.vue'

export default {
    install(app: App) {
        app.component(ElButton.name, ElButton)    // 注册全局组件
        
    }
}