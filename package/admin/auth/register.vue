<template>
  <div class="var-sign__register" style="width: 250px;">
    <div class="var-sign--title">注册</div>
    <dynamic-form :fields="data.fields" v-model="data.formData"/>
    <el-button type="danger">注册</el-button>
    <div style="padding-top: 10px;">
      <div style="display: inline-block; font-size: 12px;">已有账号，</div>
      <el-button text @click="onLogin">去登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">export default { name: 'SignRegister' };</script>
<script lang="ts" setup>
import { DynamicForm } from '@sfos/dynamic_modules/src';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';

const routes = useRouter();
const data = reactive<any>({
  formData: {},
  fields: [
    { prop: 'email', types: 'input', placeholder: '邮箱' },
    // { prop: 'code', type: 'code', placeholder: '验证码' },
    { prop: 'pass', types: 'input', type: 'password', placeholder: '密码' },
    { prop: 'hasPass', types: 'input', type: 'password', placeholder: '确认密码' },
  ],
});

function onLogin() {
  routes.push({ path: '/sign/login' });
}
</script>
