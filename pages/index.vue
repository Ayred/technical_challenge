<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
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
              <template v-slot:[`item.actions`]="{ item }">
                <v-tooltip top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      small
                      v-bind="attrs"
                      v-on="on"
                      class="mx-2"
                      @click="orderDetails(item)"
                    >
                      mdi-eye
                    </v-icon>
                  </template>
                  <span>Detalles de orden</span>
                </v-tooltip>
              </template>
            </v-data-table>
          </template>
        </v-card-text>
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
      { text: 'Subtotal', value: 'totals.subtotal' },
      { text: 'Descuento', value: 'totals.discount' },
      { text: 'Total', value: 'totals.total' },
      {
        text: 'Moneda',
        align: 'start',
        value: 'currency',
      },
      { text: 'Acciones', value: 'actions', sortable: false },
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
          if (res.success) {
            this.orders = res.orders
          }
        })
    },
    orderDetails(item) {
      this.$router.push('/order_details/' + item.id)
    },
  },
}
</script>
