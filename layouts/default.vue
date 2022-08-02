<template>
  <v-app lighter>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Lista de Órdenes',
          to: '/',
        },
        {
          icon: 'mdi-text-box-search',
          title: 'Detalle de Orden',
          to: '/order_details',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Prueba Técnica Tendencys Innovations',
    }
  },
}
</script>
