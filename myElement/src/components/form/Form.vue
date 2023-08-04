<template>
    <div class="el-form">
        <slot></slot>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ElForm'
}
</script>

<script setup lang="ts">
import { Rules } from 'async-validator'
import { PropType, provide } from 'vue'

const props = defineProps({
    model: { type: Object, required: true },
    rules: { type: Object as PropType<Rules> }
})

provide('form-data', {
    model: props.model,
    rules: props.rules
})

</script>

<style scoped lang="scss">
@import '../../styles/mixin';
@include b(form) {
  margin-top:20px;
  box-sizing: border-box;
  flex-shrink: 0;
  width:300px;
}
</style>