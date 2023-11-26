<template>
  <layout-view>
    <router-view/>
  </layout-view>
</template>

<script lang="ts">export default { name: 'Auth' };</script>
<script lang="ts" setup>
import { LayoutView } from '@models/layout';
</script>