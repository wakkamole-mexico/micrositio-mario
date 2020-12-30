<template>
    <v-container ref="contentv" fluid style="align-self: baseline">
        <v-row justify="space-around">
            <v-card v-if="$vuetify.breakpoint.mdAndUp" flat class="ma-0 pa-0 transparent" width="80%">
                    <v-card-text class="ma-0 pa-0">
                        <v-sheet
                                :elevation="0"
                                class="mx-auto transparent"
                        >
                            <v-slide-group
                                    v-model="model"
                                    active-class="success"
                                    prev-icon="mdi-minus"
                                    next-icon="mdi-plus"
                                    show-arrows
                                    center-active
                            >
                                <template v-slot:prev>
                                    <v-btn
                                            fab
                                            color="white"
                                            small
                                    >
                                        <v-icon color="black">
                                            mdi-chevron-left
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <template v-slot:next>
                                    <v-btn
                                            fab
                                            color="white"
                                            small
                                    >
                                        <v-icon color="black">
                                            mdi-chevron-right
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-slide-item
                                        style="background-color: #8E4417"
                                        v-for="(s,index) in sets"
                                        :key="s.id"
                                        v-slot="{ active, toggle }"
                                >
                                    <v-hover>
                                        <template v-slot:default="{ hover }">
                                            <v-card
                                                    class="ma-12"
                                                    max-width="380"
                                            >
                                                <v-card-text>
                                                    <h2 class="title white--text">
                                                        <span class="font-blink">{{s.name}}</span>
                                                    </h2>
                                                </v-card-text>
                                                <v-img contain :src="s.img"></v-img>

                                                <v-fade-transition>
                                                    <v-overlay
                                                            v-if="hover"
                                                            absolute
                                                            color="#036358"
                                                    >
                                                        <v-btn x-large color="#3D7EF5" fab @click="showItem(s,index)">
                                                            <v-icon class="my-5">mdi-rotate-3d</v-icon>
                                                        </v-btn>
                                                    </v-overlay>
                                                </v-fade-transition>
                                            </v-card>
                                        </template>
                                    </v-hover>

                                </v-slide-item>
                            </v-slide-group>
                        </v-sheet>
                    </v-card-text>
            </v-card>
            <v-item-group v-else>
                    <v-row>
                        <v-col
                                v-for="s in sets"
                                :key="s.id"
                                cols="12"
                                md="4"
                                class="mt-0"
                        >
                            <v-item v-slot="{ active, toggle }">
                                <v-card
                                        outlined
                                        class="pa-2 mx-auto"
                                        :elevation="10"
                                        width="80%"
                                        style="border: 10px #000 solid;"
                                        @click="toggle"
                                >
                                    <v-card-text class="text-center">
                                        <h2 class="title font-blink texto-azul-fuerte">
                                            {{s.name}}
                                        </h2>
                                    </v-card-text>
                                    <v-img
                                            contain
                                            :aspect-ratio="16/9"
                                            :height="200"
                                            :src="s.img"
                                            @click="showItem(s)"
                                    ></v-img>
                                </v-card>
                            </v-item>
                        </v-col>
                    </v-row>
            </v-item-group>
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
        <v-dialog
                v-model="dialogItem"
                persistent
                scrollable
                max-width="600"
        >
            <v-card v-if="selected!=null" style="border: 10px #000 solid;">
                <v-card-title :class="$vuetify.breakpoint.mdAndUp?'display-1':'headline'">
                    <div class="font-blink font-weight-bold">{{selected.name}}</div>
                </v-card-title>
                <v-card-text>
                    <v-img @click="goShop(selected.url)" contain height="400" :src="selected.gif"></v-img>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="dialogItem = false"
                    >
                        Cerrar
                    </v-btn>
                    <v-btn
                            color="green darken-1"
                            text
                            @click="goShop(selected.url)"
                    >
                        Comprar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
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
      dialogItem: false,
      model: 1,
      selected: null,
      sets: [
          {
              id: 1,
              name: 'Adventures with Mario',
              img: '/sitio/img/sets/71360.jpg',
              gif: '/sitio/img/gif/71360.gif',
              url: 'https://www.juguetron.mx/productos/103471360?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471360-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471360-0'
          },
          {
              id: 2,
              name: 'Lego Character',
              img: '/sitio/img/sets/71361.jpg',
              gif: '/sitio/img/gif/71361.gif',
              url: 'https://www.juguetron.mx/productos/103471361?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471361-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471361-0'
          },
          {
              id: 3,
              name: 'Guarded Fortress',
              img: '/sitio/img/sets/71362.jpg',
              gif: '/sitio/img/gif/71362.gif',
              url: 'https://www.juguetron.mx/productos/103471362?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471362-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471362-0'
          },
          {
              id: 4,
              name: 'Desert Pokey',
              img: '/sitio/img/sets/71363.jpg',
              gif: '/sitio/img/gif/71363.gif',
              url: 'https://www.juguetron.mx/productos/103471363?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471363-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471363-0'
          },
          {
              id: 5,
              name: "Whomp's Lava Trouble",
              img: '/sitio/img/sets/71364.jpg',
              gif: '/sitio/img/gif/71364.gif',
              url: 'https://www.juguetron.mx/productos/103471364?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471364-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471364-0'
          },
          {
              id: 6,
              name: 'Boomer Bill Barrage',
              img: '/sitio/img/sets/71366.jpg',
              gif: '/sitio/img/gif/71366.gif',
              url: 'https://www.juguetron.mx/productos/103471366?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471366-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471366-0'
          },
          {
              id: 7,
              name: "Mario's House & Yoshi",
              img: '/sitio/img/sets/71367.jpg',
              gif: '/sitio/img/gif/71367.gif',
              url: 'https://www.juguetron.mx/productos/103471367?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471367-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471367-0'
          },
          {
              id: 8,
              name: "Toad's Treasure Hunt",
              img: '/sitio/img/sets/71368.jpg',
              gif: '/sitio/img/gif/71368.gif',
              url: 'https://www.juguetron.mx/productos/103471368?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471368-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471368-0'
          },
          {
              id: 9,
              name: "Bowser's Castle Boss Battle",
              img: '/sitio/img/sets/71369.jpg',
              gif: '/sitio/img/gif/71369.gif',
              url: 'https://www.juguetron.mx/productos/103471369?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471369-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471369-0'
          },
          {
              id: 10,
              name: 'Fire Mario',
              img: '/sitio/img/sets/71370.jpg',
              gif: '/sitio/img/gif/71370.gif',
              url: 'https://www.juguetron.mx/productos/103471370?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471370-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471370-0'
          },
          {
              id: 11,
              name: 'Propeller Mario',
              img: '/sitio/img/sets/71371.jpg',
              gif: '/sitio/img/gif/71371.gif',
              url: 'https://www.juguetron.mx/productos/103471371?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471371-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471371-0'
          },
          {
              id: 12,
              name: 'Cat Mario',
              img: '/sitio/img/sets/71372.jpg',
              gif: '/sitio/img/gif/71372.gif',
              url: 'https://www.juguetron.mx/productos/103471372?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471372-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471372-0'
          },
          {
              id: 13,
              name: 'Builder Mario',
              img: '/sitio/img/sets/71373.jpg',
              gif: '/sitio/img/gif/71373.gif',
              url: 'https://www.juguetron.mx/productos/103471373?utm_source=WM&utm_medium=LandingJG&utm_campaign=20_10_2020-MARIOBROS&utm_content=103471373-&cm_mmc=WM-_-Landing-_-JG-_-MARIO BROS-103471373-0'
          }
      ]
  }),
  created() {},
  mounted() {
  },
  computed: {
  },
  watch: {},
  methods: {
      goShop(url){
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('target', '_blank');
          document.body.appendChild(link);
          link.click();
          /*this.dialogItem = false;
          this.selected = null;*/
      },
    showItem(item,index){
          this.model = index;
        this.selected = Object.assign({},item);
        this.dialogItem = true;
    }
  }
};
</script>
