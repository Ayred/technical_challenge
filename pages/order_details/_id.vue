<template>
  <v-row class="py-2 px-0">
    <v-col>
      <v-row>
        <v-col>
          <v-alert
            type="success"
            v-model="paymentSucceded"
            dismissible
            shaped
            transition="scale-transition"
            >Pago Exitoso</v-alert
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-btn rounded nuxt to="/"
            >&lt; regresar al listado de órdenes</v-btn
          ></v-col
        >
        <v-spacer />
        <v-col align="right">
          <v-btn rounded color="primary" @click="paymentCorrect"> Pagar </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12"><new-product-form></new-product-form></v-col>
      </v-row>
      <v-row>
        <v-col>
          <order-table :id="id"></order-table>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      paymentSucceded: false,
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.id = this.$route.params.id
      let authorization =
        'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ'
      this.orders = []
      this.$axios
        .$get('https://eshop-deve.herokuapp.com/api/v2/orders', {
          headers: {
            Authorization: `${authorization}`,
          },
        })
        .then((res) => {
          if (res.success) {
            let order = res.orders.find((order) => order.id == this.id)
            this.$store.commit('loadOrderDetails', order.items)
          }
        })
    },
    paymentCorrect() {
      this.paymentSucceded = true
    },
  },
}
</script>
