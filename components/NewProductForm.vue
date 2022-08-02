<template>
  <div>
    <v-card shaped class="px-3">
      <v-form ref="form" @submit.prevent="submit">
        <v-row>
          <v-col class="pb-0 px-3" cols="12" sm="6" md="2">
            <v-text-field
              :rules="[rules.required]"
              rounded
              outlined
              dense
              label="SKU"
              v-model="productData.sku"
            >
            </v-text-field>
          </v-col>
          <v-col class="pb-0 px-3" cols="12" sm="6" md="3">
            <v-text-field
              :rules="[rules.required]"
              rounded
              outlined
              dense
              label="Nombre"
              v-model="productData.name"
            >
            </v-text-field>
          </v-col>
          <v-col class="pb-0 px-3" cols="12" sm="6" md="3">
            <v-text-field
              :rules="[rules.required]"
              rounded
              outlined
              dense
              type="number"
              min="1"
              max="99"
              label="Cantidad"
              v-model="productData.quantity"
            >
            </v-text-field>
          </v-col>
          <v-col class="pb-0 px-3" cols="12" sm="6" md="2">
            <v-text-field
              :rules="[rules.required]"
              rounded
              outlined
              dense
              label="Precio"
              v-model="productData.price"
            >
            </v-text-field>
          </v-col>
          <v-col
            ><v-btn rounded depressed color="secondary" type="submit">
              <v-icon small>mdi-plus</v-icon>
              &nbsp; Agregar
            </v-btn></v-col
          >
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      productData: {
        sku: '',
        name: '',
        quantity: '',
        price: '',
      },
      rules: {
        required: (v) => {
          return !!v || 'Este campo es requerido'
        },
      },
    }
  },
  computed: {
    ...mapState(['orderDetails']),
  },
  methods: {
    submit() {
      if (this.$refs.form && this.$refs.form.validate()) {
        this.$store.commit('addOrderDetail', this.productData)
        this.$refs.form.reset()
      }
    },
  },
}
</script>
