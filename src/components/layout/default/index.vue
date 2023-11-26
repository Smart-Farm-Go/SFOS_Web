<template>
  <div class="var-layout">
    <div class="var-layout__header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <div class="var-layout__container">
      <slot/>
    </div>
    <div class="var-layout__footer" v-if="$slots.footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts"> export default { name: 'Layout' };</script>

<script setup lang="ts">

</script>

<style lang="scss" src="./style.scss"/>
