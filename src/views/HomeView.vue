<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

// TODO: 后端统一返回的数据类型
// TODO: Api封装请求

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const increment = counterStore.increment;

const test_env = () => {
  console.log('import.meta.env.VITE_API_DOMAIN', import.meta.env.VITE_API_DOMAIN);
  console.log('import.meta.env.BASE_URL', import.meta.env.BASE_URL);
};
</script>

<template>
  <div>{{ count }}</div>
  <el-button type="primary" size="default" @click="increment"
    >Increment</el-button
  >
  <br />
  <el-button type="info" size="default" @click="test_env">Test env</el-button>
</template>

<style scoped></style>
