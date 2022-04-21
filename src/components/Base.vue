<template>
  <div>
    <capri-header></capri-header>

    <el-container style="clear: both; height: calc((100vh - 61px));">
      <capri-aside style="height: 100%"></capri-aside>

      <el-main id="capriMain">
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CapriHeader from '~/components/Header'
import CapriAside from '~/components/Aside'
export default {
  name: "CapriBase",
  components: {
    CapriAside,
    CapriHeader
  }
}
</script>

<style scoped>

</style>