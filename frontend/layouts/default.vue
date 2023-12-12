<script setup>
const colorMode = useColorMode()

const isDark = ref(true)

watch(isDark, () => {
  if (isDark.value) {
    colorMode.preference = 'dark'
  } else {
    colorMode.preference = 'light'
  }
})

</script>

<template>
  <div>
    <input type="checkbox" v-model="isDark" class="checkbox" />
    <NuxtPage class="mx-auto p-4" />
  </div>
</template>

<style lang="scss">
body {
  @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>
