<template>
    <v-container ref="contentv" fluid>
        <v-row justify="space-around">
            <v-card
                    outlined
                    color="black"
                    class="pa-2"
                    :elevation="10"
                    :width="$vuetify.breakpoint.mdAndUp?'60%':'85%'"
            >
                <v-card-text style="background-color: white">
                    <v-row>
                        <v-col col="12" md="12">
                            <div class="font-blink text-center font-weight-bold texto-azul-claro ma-4" style="font-size: 2em; line-height: 1em;">Escucha esta playlist mientras</div>
                            <div class="font-blink text-center font-weight-bold texto-azul-fuerte ma-6" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'">DISFRUTAS DE TU SET</div>
                        </v-col>
                        <v-col cols="12" md="12">
                            <iframe src="https://open.spotify.com/embed/playlist/4ou6L9ejdALaEzhrS1Ry6A" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </v-col>

                    </v-row>
                </v-card-text>
                <v-img max-width="80" style="position: absolute; right: -25px; bottom: -15px" src="/sitio/img/png-07.png"></v-img>
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
