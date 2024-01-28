<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import ExampleApi from '@/api/example';

// TODO: 后端统一返回的数据类型
// TODO: Api封装请求

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const increment = counterStore.increment;

const test_env = () => {
  console.log(
    'import.meta.env.VITE_API_DOMAIN',
    import.meta.env.VITE_API_DOMAIN
  );
  console.debug('import.meta.env.BASE_URL', import.meta.env.BASE_URL);
};

const test_axios = () => {
  ExampleApi.exampleRequest('abceeee')
    .then((res) => {
      console.log('example res', res);
    })
    .catch((err) => {
      console.log('example err', err);
    });
};
</script>

<template>
  <div>{{ count }}</div>
  <el-button type="primary" size="default" @click="increment"
    >Increment</el-button
  >
  <br />
  <el-button type="info" size="default" @click="test_env">Test env</el-button>
  <br />
  <el-button type="warning" size="default" @click="test_axios">Test axios</el-button>
</template>

<style scoped></style>
