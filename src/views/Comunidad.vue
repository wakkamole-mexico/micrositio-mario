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
                    <div class="font-blink text-center font-weight-bold texto-azul-fuerte ma-6" :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'">¿Quieres formar parte de la comunidad de Mario Bros? </div>
                    <div class="font-blink text-center font-weight-bold texto-azul-claro ma-4" style="font-size: 2em; line-height: 1em;">El  grupo es exclusivo para verdaderos fans de Mario Bros. </div>
                    <div class="font-blink text-center font-weight-black black--text ma-4" style="font-size: 1.5em; line-height: 1em">¡Corre! Te Esperamos...</div>
                    <v-row>
                        <v-col class="text-center fb-join">
                            <div class="fb-group" data-href="https://www.facebook.com/groups/JuguetronMario/" data-show-social-context="true" data-show-metadata="false"><blockquote cite="https://www.facebook.com/groups/JuguetronMario/" class="fb-xfbml-parse-ignore">Juguetron Mario</blockquote></div>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-img max-width="80" style="position: absolute; left: -15px; bottom: -15px" src="/sitio/img/png-06.png"></v-img>
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
      setTimeout(()=>{
          window.FB.XFBML.parse();
      },500);
  },
  computed: {
  },
  watch: {},
  methods: {

  }
};
</script>
<style>
    .fb-join > div{
        width: 80% !important;
        margin: auto;
    }
    .fb-join > div > span{
        width: 100% !important;
    }
    .fb-join > div > span > iframe{
        width: 100% !important;
    }
    .fb-join > div > span > iframe ._65wk{
        width: 100% !important;
        margin: auto !important;
    }

</style>