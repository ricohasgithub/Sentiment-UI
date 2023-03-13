<template>
  <main>
    <div>
      <b-sidebar id="sidebar-border" shadow="true" sidebar-class="border-right">
        <div class="px-3 py-2">
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </p>
          <Player></Player>
        </div>
      </b-sidebar>
    </div>
  </main>
</template>

<script setup lang="ts">
import Player from './components/Player.vue'
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>
