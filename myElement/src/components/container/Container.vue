<template>
    <section class="el-container" :class="{'is-vertical': isVertical}">
        <slot></slot>
    </section>
</template>

<script lang="ts">
export default {
    name: 'ElContainer',
}
</script>

<script setup lang="ts">
import { computed, useSlots, VNode, Component } from 'vue'

const slots = useSlots()
// console.log(slots.default());

interface Props{
    direction?: string
}

const props = defineProps<Props>()

const  isVertical = computed(() => {    //  父组件传入的属性
    if (slots && slots.default) {
        return slots.default().some((vn: VNode) => {
            const tag = (vn.type as Component).name
            return tag === 'ElHeader' || tag === 'ElFooter'
        })
    } else if (props.direction === 'vertical'){
            return true
        } else {
            return false
        }
    return props.direction === 'vertical'


})
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
@include b(container){
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    @include when(vertical) {
        flex-direction: column;
    }
}
</style>