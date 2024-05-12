<script lang="ts">
export default {
  name: 'Navigation',
}
</script>

<script lang="ts" setup>
import { reactive, onMounted} from "vue";

const menu = reactive([
  { path: "/", name: "Home" },
  { path: "/", name: "About" },
  { path: "/", name: "About" },
  { path: "/", name: "About" },
]);

onMounted(() => {
  console.log(menu);
});
</script>

<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :router="true"
    v-for="item in menu"
    :key="item.path"
    :index="item.path"
  >
    <el-menu-item :index="item.path">{{  item.name }}</el-menu-item>
  </el-menu>
</template>


<style lang="scss" scoped></style>