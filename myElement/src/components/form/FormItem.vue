<template>
     <div class="el-form-item">
        <label v-if="label">{{  label }}</label>
        <slot></slot>        
    </div>
</template>

<script lang="ts">
export default {
    name: 'ElFormItem'
}
</script>

<script setup lang="ts">
interface Props {
    label?: string
}
withDefaults(defineProps<Props>(), {
    label: ''
})

</script>

<style scoped lang="scss">
@import '../../styles/mixin';
@include b(form-item) {
  display: flex;
  align-items: center;
  margin-bottom: 22px;
  label{
    line-height:1.2;
    margin-bottom:5px;
    display: inline-block;
  }
  & .el-form-item {
    margin-bottom: 0;
  }
}
.error{
  color:red;
}
</style>