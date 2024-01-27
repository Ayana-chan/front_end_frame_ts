<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';

// TODO: 后端统一返回的数据类型

const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
const increment = counterStore.increment;
</script>

<template>
  <div>{{ count }}</div>
  <el-button type="primary" size="default" @click="increment"
    >Increment</el-button
  >
</template>

<style scoped></style>
