<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref, defineComponent, Ref } from "vue";
import Footer from "@/components/copyright/index.vue";

defineComponent({
  name: "Register",
  components: { Footer },
});
const router = useRouter();

const goLogin = () => {
  router.push({
    path: "/login",
  });
};

type RegisterForm = {
  username: string;
  password: string;
  phone: string;
  email: string;
  confirmPassword: string;
};

const registerFormRef = ref<RegisterForm>({
  username: "",
  password: "",
  phone: "",
  email: "",
  confirmPassword: "",
})

type ValidateResult = Map<keyof RegisterForm, string>;

const validateResult: Ref<ValidateResult> = ref(new Map<keyof RegisterForm, string>());

const validateRegisterForm = (form: RegisterForm): ValidateResult => {
  validateResult.value = new Map<keyof RegisterForm, string>();
  if (form.username === "") {
    validateResult.value.set("username", "用户名不能为空");
  }
  if (form.password === "") {
    validateResult.value.set("password", "密码不能为空");
  }

  // 手机号校验开始
  const phoneRegex = /^1[3-9]\d{9}$/;
  const phone = phoneRegex.test(form.phone);
  if (form.phone === "") {
    validateResult.value.set("phone", "手机号不能为空");
  }else if(!phone){
    validateResult.value.set("phone","请输入正确的手机号")
  }
  // 手机号校验结束

  // 邮箱校验开始
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = emailRegex.test(form.email);
  if (form.email === "") {
    validateResult.value.set("email", "邮箱不能为空");
  }else if(!email){
    validateResult.value.set("email","请输入正确的邮箱地址")
  }
  // 邮箱校验结束

  if (form.confirmPassword === "" || form.password !== form.confirmPassword) {
    validateResult.value.set("confirmPassword", "两次输入的密码不一致");
  }
  return validateResult.value;
};

const register = () => {
  const form = registerFormRef.value;
  const result = validateRegisterForm(form);
  if (result.size === 0) {
    console.log("开始注册");
    //等待3秒
    setTimeout(() => {
      router.push({
        path: "/login",
      });
    }, 3000);
    // 模拟注册成功
  } else {
    console.log(result);
  }
}

</script>

<template>
  <div class="container">
    <div class="form">
      <h3>注册</h3>
      <el-form label-position="right" label-width="70px" style="line-height: 0px;" v-model="registerFormRef">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名" v-model="registerFormRef.username"></el-input>
          <span v-if="validateResult.has('username')" class="validate-error">{{ validateResult.get('username') }}</span>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input placeholder="请输入手机号" v-model="registerFormRef.phone"></el-input>
          <span class="validate-error" :style="{ visibility: validateResult.has('phone') ? 'visible' : 'hidden' }">{{
            validateResult.get('phone') }}</span>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input placeholder="请输入邮箱" v-model="registerFormRef.email"></el-input>
          <span v-if="validateResult.has('email')" class="validate-error">{{ validateResult.get('email') }}</span>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码" v-model="registerFormRef.password" show-password></el-input>
          <span v-if="validateResult.has('password')" class="validate-error">{{ validateResult.get('password') }}</span>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input placeholder="请输入密码" v-model="registerFormRef.confirmPassword" show-password></el-input>
          <span v-if="validateResult.has('confirmPassword')" class="validate-error">{{
            validateResult.get('confirmPassword') }}</span>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="register" style="width: 100%;">注册</el-button>
          <div style="text-align: right;width: 100%;">
            已有账号?<el-button type="primary" @click="goLogin" link >去登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
  <Footer></Footer>
</template>

<style lang="scss" scoped>@import url('@/assets/css/index.scss');</style>