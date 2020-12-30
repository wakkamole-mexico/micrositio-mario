<template>
    <v-container ref="contentv" fluid >
        <v-row justify="space-around">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
            >
                <v-card-text style="background-color: rgb(255,255,255,.2)">
                    <v-row>
                        <v-col cols="12" md="9">
                            <div class="text-center font-blink white--text font-weight-bold mb-4" style="font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000">Instant Delivery</div>
                            <div class="pa-4 font-blink white--text text-justify" style="font-size: 1.5em; line-height: 1.3em; text-shadow: 2px 2px 4px #000000; width: 80%; margin: auto">
                                ¡Pide tu set de Lego Super Mario por Rappi y recíbelo el mismo día!
                            </div>
                            <div style="margin: auto; width: 80%; text-align: center;">
                                <v-btn color="primary" class="font-blink" href="https://www.rappi.com.mx/mall/tienda/juguetron_rappimall?source=BANNER" target="_blank">
                                    Ordenar Ahora
                                </v-btn>
                            </div>
                        </v-col>
                        <v-col cols="12" md="3" class="hidden-sm-and-down pa-12">
                            <v-img src="/sitio/img/png-01.png"></v-img>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600"
        >
            <v-card>
                <v-card-title class="headline">
                    Política de Cookies
                </v-card-title>
                <v-card-text>
                    En esta web se utilizan cookies de terceros y propias para conseguir
                    que tengas una mejor experiencia de navegación, si permanece aquí acepta su uso.
                    Puede leer más sobre el uso de cookies en nuestra <a href="/privacidad">política de privacidad</a>.
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="aceptar()"
                    >
                        Aceptar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-img style="position: absolute; bottom: 0px; left: 0px; z-index: 2"
                    max-width="100"
                    src="/sitio/img/png-16.png"></v-img>
            <v-img style="position: absolute; bottom: 0px; right: 0px; z-index: 2"
                   max-width="100"
                   src="/sitio/img/png-14.png"></v-img>
            <v-img class="animated-mario"
                   max-width="50"
                   src="/sitio/img/png-12.png"></v-img>
        </template>
    </v-container>
</template>

<script>

export default {
  name: "Home",
  mixins: [],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      model: null,
  }),
  created() {},
  mounted() {
  },
  computed: {
  },
  watch: {},
  methods: {

  }
};
</script>
