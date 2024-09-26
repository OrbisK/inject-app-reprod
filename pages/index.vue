<template>
<display></display>
</template>


<script setup>
import { createApp } from 'vue'
import All from "~/components/all.vue";
definePageMeta({
  middleware: [
    function (to, from) {
      console.log('This is a global middleware')
      // console.log(inject('test'))
      // const discrete = createDiscreteApi(['message'])
      // discrete.message.success('This is a global middleware')

      const app = createApp(All)

      const hostEl = document.createElement('div')
      document.body.appendChild(hostEl)

      app.mount(hostEl)
    },
  ],
});
</script>