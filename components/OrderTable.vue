<template>
  <v-row justify="center" align="center">
    <v-col cols="12" align="center">
      <v-card>
        <v-card-title class="headline">Orden No. {{ id }}</v-card-title>
        <v-card-text
          ><template>
            <v-data-table
              :headers="headers"
              :items="orderDetails"
              class="elevation-1"
              hide-default-footer
            >
              <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.sku }}</td>
                <td class="text-xs-right">{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.quantity }}</td>
                <td class="text-xs-right">{{ props.item.price }}</td>
              </template>
            </v-data-table>
          </template>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['id'],
  data: () => ({
    headers: [
      {
        text: 'SKU',
        value: 'sku',
        align: 'start',
        sortable: false,
      },
      { text: 'Nombre', value: 'name', sortable: false },
      { text: 'Cantidad', value: 'quantity', sortable: false },
      { text: 'Precio', value: 'price', sortable: false },
    ],
  }),

  computed: {
    ...mapState(['orderDetails']),
  },
}
</script>
