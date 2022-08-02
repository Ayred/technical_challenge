<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card>
        <v-card-title class="headline"> Listado de órdenes </v-card-title>
        <v-card-text
          ><template>
            <v-data-table
              :headers="headers"
              :items="orders"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.number }}</td>
                <td class="text-xs-right">{{ props.item.currency }}</td>
                <td class="text-xs-right">{{ props.item.total }}</td>
              </template>
            </v-data-table>
          </template>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        text: 'No. Orden',
        value: 'number',
        align: 'start',
      },
      { text: 'Total', value: 'totals.total' },
      {
        text: 'Moneda',
        align: 'start',
        value: 'currency',
      },
    ],
    orders: [],
  }),
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
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
          console.log(res)
          if (res.success) {
            this.orders = res.orders
          } else {
            console.log(this.orders)
          }
        })
    },
  },
}
</script>
