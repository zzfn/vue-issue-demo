<script setup lang="ts">
import {onMounted, ref, watchEffect} from 'vue'
import Person from "./Person.ts";
import {createSignal} from "../signal.ts";

const [count, setCount] = createSignal({a: 1})
const [name, setName] = createSignal<string>()
defineProps<{ msg: string }>()


const map = new Map<string, Person>()
onMounted(() => {
  map.set('ww', new Person())
  map.get('ww').init()
})

function onClick() {
  setCount(prev => {
    prev.a = prev.a + 1
  })
  setName('name')
  // map.get('ww').change()
  // map.get('ww').thiks.set(Math.random(), Math.random())
}

watchEffect(() => {
  console.log(map.get('ww')?.thiks)
})
</script>

<template>
  {{ count() }}
  {{ name() }}
  <button @click="onClick">click</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
