<script lang="ts" setup>
import Navigation from '@/components/main/navigation/index.vue';
</script>


<script lang="ts">

</script>


<template>
  <div class="common-layout">
    <div class="header">欢迎使用佳乐物业</div>
    <div class="content">
      <div class="aside">
        <Navigation />
      </div>
      <div class="main">
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.common-layout{
  align-items: center;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.header{
  height: 100px;
  line-height:100px;
  text-align: center;
  background-color: #409eff;
  color: #fff;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
}

.content{
  display: flex;
  height: calc(100% - 100px);
  width: 100%;
  box-sizing: border-box;
}

.aside{
  box-sizing: border-box;
  border-right: 1px solid #ccc;
  width: 15%;
  background-color: #f0f2f5;
  height: 100%;
}

.main{
  width: calc(100% - 15%);
  background-color: #a9d1b0;
  padding: 20px;
}
</style>