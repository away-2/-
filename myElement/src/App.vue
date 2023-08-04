 <template>
  <!-- el-container  -->
  <div v-if="false">
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
  <!-- el-button  -->
  <div v-if="false">
    <el-button size="small" type="danger">小</el-button>
    <el-button>中</el-button>
    <el-button size="large" type="success">大</el-button>
  </div>
  <!-- el-form  -->
  <div>
    <el-form :model="form" rules="rules">

      <el-form-item label="用户名" >
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input v-model="form.password"></el-input>
      </el-form-item>

      <el-button size="large" type="danger" @click="login">登录</el-button>

    </el-form>
  </div>
</template> 

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  username: 'admin',
  password: ''
})

const login = () => {
  console.log(form.username,form.password);
  
}
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

