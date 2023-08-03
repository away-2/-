import { App } from 'vue'
import ElContainer from './Container.vue'
import ElHeader from './Header.vue'
import ElMain from './Main.vue'
import ElAside from './Aside.vue'
import ElFooter from './Footer.vue'

export default {
    install(app: App) {
        app.component(ElContainer.name, ElContainer)    // 注册全局组件
        app.component(ElHeader.name, ElHeader) 
        app.component(ElMain.name, ElMain)
        app.component(ElAside.name, ElAside)
        app.component(ElFooter.name, ElFooter)
    }
}
