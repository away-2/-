import Button from './Button.vue'
import { mount } from '@vue/test-utils'

describe('按钮测试', () => {
    it('按钮是否能正常显示文本', () => {    
        const content = '提交'
        const wrapper = mount(Button, {
            slots: {
                default: content,
            }
        })
        expect(wrapper.text()).toBe(content)
    })
    
    it('通过size控制按钮大小', () => {
        const size = 'small'
        const wrapper = mount(Button, {
            props: {
                size: size  
            }
        })
        expect(wrapper.classes()).toContain('el-button--small')
    })
})