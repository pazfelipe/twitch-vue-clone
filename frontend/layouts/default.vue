<template>
  <div>
    <input type="checkbox" v-model="isDark" class="checkbox" />
    <div>
      <button @click="loginStore.toggleModal()">Open Modal</button>
    </div>
    <login v-if="loginStore.isModalOpened" />
    <NuxtPage class="mx-auto p-4" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
import { useLoginStore } from '@/stores/login'

const loginStore = useLoginStore()

const isDark = ref(true)

watch(isDark, () => {
  if (isDark.value) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
})

</script>

<style lang="scss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
