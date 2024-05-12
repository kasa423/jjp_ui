<script lang="ts" setup>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import Footer from "@/components/copyright/index.vue";
import {login} from "@/request/user/index.ts"
defineComponent({
  components: {
    Footer,
  },
});

const router = useRouter();
const form = ref({
  username: 'admin',
  password: '123456',
});

const goRegister = () => {
  console.log('go register');
  router.replace('/register');
};

const doLogin= ()=>{
  login(form.value).then(res=>{
    console.log(res);
    localStorage.setItem('token', res.data.token);
    router.push('/home');
  }).catch(err =>{
    console.log(err);
    console.log("@@@@@", err.data.code);
  })
}

</script>


<script lang="ts">
export default {
  name: 'Login',
}
</script>


<template>
  <div class="container">
    <div class="form">
      <h3 style="margin: 30px;">欢迎登录</h3>
      <div style="width: 300px;margin: 0 auto;">
        <el-form label-position="right" label-width="60px" :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username" placeholder="请输入用户名">
              <template #prepend>
                <img src="@/assets/svg/account.svg" width="20px">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.password" show-password>
            <template #prepend>
                  <img src="@/assets/svg/security_protection.svg" width="20px">
                </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%;" @click="doLogin">登录</el-button>
            <div style="text-align: right; width: 100%;">
              <el-button type="primary" link @click="goRegister">去注册</el-button>
              <el-button type="primary" link>忘记密码</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<style lang="scss" scoped>
@import url('@/assets/css/index.scss');
</style>