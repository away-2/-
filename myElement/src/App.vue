<template>
  <div>
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer height="100px">footer</el-footer>
    </el-container>

    <br/>

    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer height="100px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>

    <br/>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header height="100px">Header</el-header>
        <el-main>Main</el-main>
        <el-footer height="100px">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
body{
  width: 1000px;
  margin: 10px auto;
}
.el-header, .el-footer{
  background: #b3c0d1;
  text-align: center;
  line-height: 100px;
}
.el-aside{
  background: #d3dce6;
}
.el-main{
  background: #e9eef3;
  text-align: center;
  line-height: 160px;
}

body > .el-container{
  margin-bottom: 40px;
}
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
</style>