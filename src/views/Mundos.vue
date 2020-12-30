<template>
    <v-container ref="contentv" fluid >
        <v-row v-if="!login" justify="space-around">
            <v-card
                    color="transparent"
                    class="pa-2"
                    flat
                    :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
            >
                <v-card-text style="background-color: rgb(255,255,255,.2)">
                    <v-row>
                        <v-col cols="12" md="6" class="pb-0">
                            <v-row>
                                <v-col cols="12" class="mb-0">
                                    <div class="text-center font-blink white--text font-weight-bold" style="text-shadow: 2px 2px 4px #000000"
                                         :style="$vuetify.breakpoint.mdAndUp?'font-size: 3em; line-height: 1em':'font-size: 2em; line-height: 1em'"
                                    >
                                        Regístrate y disfruta del contenido exclusivo que Mario tiene para ti</div>
                                </v-col>
                                <v-col cols="12" class="pt-6 hidden-sm-and-down">
                                    <v-img contain max-height="280" src="/sitio/img/png-04.png"></v-img>
                                </v-col>
                                <v-col cols="12" class="text-center">
                                    <v-btn text dark class="font-blink" @click="dialog2=true;">
                                        <span style="white-space: normal;">
                                            ¿Estas registrado? haz click aquí
                                        </span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-card
                                    outlined
                                    color="black"
                                    class="pa-2 fill-height"
                                    :elevation="10"
                            >
                                <v-card-text class="fill-height px-10" style="background-color: white">
                                    <v-form ref="formJoin">
                                        <v-row class="fill-height">
                                            <v-col cols="12">
                                                <div style="margin: auto; width: 100px;"><v-img align="center" contain max-width="100" src="/sitio/img/png-13.png"></v-img></div>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.nombre"
                                                        label="Nombre"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.apellido"
                                                        label="Apellidos"
                                                        :rules="[rules.required]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                        dense
                                                        :hide-details="
                                      $vuetify.breakpoint.smAndDown
                                    "
                                                        v-model="formJoin.correo"
                                                        label="E-mail"
                                                        :rules="[rules.required, rules.email]"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-dialog
                                                        ref="dialog"
                                                        v-model="modalFn"
                                                        persistent
                                                        width="290px"
                                                >
                                                    <template v-slot:activator="{ on }">
                                                        <v-text-field
                                                                dense
                                                                :hide-details="
                                          $vuetify.breakpoint.smAndDown
                                        "
                                                                v-model="computedDateFormatted"
                                                                label="Tu cumpleaños"
                                                                hint="Día / Mes / Año"
                                                                persistent-hint
                                                                readonly
                                                                v-on="on"
                                                                :rules="[rules.required]"
                                                        ></v-text-field>
                                                    </template>
                                                    <v-date-picker
                                                            ref="picker"
                                                            v-model="formJoin.fechaNacimiento"
                                                            :max="
                                        new Date().toISOString().substr(0, 10)
                                      "
                                                            min="1950-01-01"
                                                            @change="modalFn = false"
                                                    ></v-date-picker>
                                                </v-dialog>
                                            </v-col>
                                            <v-col cols="12" class="text-center">
                                                <v-btn
                                                        :disabled="sending"
                                                        color="error"
                                                        class="font-blink"
                                                        @click="join()"
                                                >
                                                    Registrarme
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-row>
        <template v-else>
            <v-row justify="space-around">
                <v-card
                        color="transparent"
                        class="pa-2"
                        flat
                        :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
                >
                    <v-card-text style="background-color: rgb(255,255,255,.2)">
                        <v-row>
                            <v-col cols="12" md="12">
                                <div class="text-center font-blink white--text font-weight-bold" style="font-size: 3em; width: 80%; margin: auto; line-height: 1em; text-shadow: 2px 2px 4px #000000">
                                    Disfruta de los wallpapers que tenemos para ti</div>
                            </v-col>
                        </v-row>
                        <v-row>
                            <template v-for="n in wallpapers">
                                <v-col cols="12" sm="6" md="4" lg="3">
                                    <v-card
                                            flat
                                            class="transparent"
                                    >
                                        <v-img class="pa-12" contain :src="n.img"></v-img>
                                        <v-card-text class="text-center">
                                            <v-btn outlined dark @click="download(n.img,n.id)">
                                                <span >Descargar</span>
                                            </v-btn>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </template>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>
            <v-row justify="space-around">
                <v-card
                        color="transparent"
                        class="pa-2"
                        flat
                        :width="$vuetify.breakpoint.mdAndUp?'70%':'90%'"
                >
                    <v-card-text style="background-color: rgb(255,255,255,.2)">
                        <v-row>
                            <v-col cols="12" md="6" class="pb-0">
                                <v-row>
                                    <v-col cols="10" class="mb-0 mx-auto">
                                        <div class="text-center font-blink white--text font-weight-bold" style="font-size: 3em; line-height: 1em; text-shadow: 2px 2px 4px #000000">
                                            Diviértete con estos stickers y úsalos en todas tus conversaciones
                                        </div>
                                    </v-col>
                                    <v-col cols="12" class="pt-6">
                                        <v-img contain max-height="200" src="/sitio/img/png-17.png"></v-img>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-card
                                        outlined
                                        color="black"
                                        class="pa-2 fill-height"
                                        :elevation="10"
                                >
                                    <v-card-text class="fill-height px-10" style="background-color: white">
                                        <v-row class="fill-height">
                                            <v-col cols="12">
                                                <div style="margin: auto; width: 200px;"><v-img align="center" contain max-width="200" src="/sitio/img/lego-mario.png"></v-img></div>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-img align="center" contain src="/sitio/img/stickers.png"></v-img>
                                            </v-col>
                                            <v-col cols="12" class="text-center">
                                                <v-btn
                                                        dark
                                                        :disabled="sending"
                                                        color="#2C7DFF"
                                                        class="font-blink"
                                                        @click="downloadZip()"
                                                >
                                                    Descargar
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-row>
        </template>
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
        <v-dialog
                v-model="dialog2"
                max-width="500px"
        >
            <v-card>
                <v-card-title>
                    Accede a Mundos Exclusivos
                </v-card-title>
                <v-card-text>
                    <v-col
                            cols="12"
                    >
                        <v-text-field
                                v-model="codigo"
                                label="Ingresa tu código de acceso"
                                @keypress.enter="acceder()"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" v-if="error!=''" class="red--text font-blink my-0 py-0">
                        {{error}}
                    </v-col>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="cerrar()"
                    >
                        Cerrar
                    </v-btn>
                    <v-btn
                            color="success"
                            text
                            @click="acceder()"
                    >
                        Acceder
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-img style="position: absolute; bottom: 0px; left: 0px; z-index: 2"
                    max-width="100"
                    src="/img/png-16.png"></v-img>
            <v-img style="position: absolute; bottom: 0px; right: 0px; z-index: 2"
                   max-width="100"
                   src="/img/png-14.png"></v-img>
            <v-img class="animated-mario"
                   max-width="50"
                   src="/img/png-12.png"></v-img>
        </template>
    </v-container>
</template>

<script>
    import { RULES } from "../mixins/rules";
    import axios from "axios";
export default {
  name: "Home",
  mixins: [RULES],
  components: {},
  data: () => ({
      var: false,
      dialog: false,
      dialog2: false,
      modalFn: false,
      model: null,
      formJoin: {
          nombre: "",
          apellido: "",
          correo: "",
          fechaNacimiento: ""
      },
      sending: false,
      login: false,
      codigo: '',
      error: '',
      wallpapers: [
          {id: 1, img: '/sitio/img/wallpapers/1.jpg'},
          {id: 2, img: '/sitio/img/wallpapers/2.jpg'},
          {id: 3, img: '/sitio/img/wallpapers/3.jpg'},
          {id: 4, img: '/sitio/img/wallpapers/4.jpg'},
      ]
  }),
  created() {},
  mounted() {
  },
  computed: {
      computedDateFormatted() {
          return this.formatDate(this.formJoin.fechaNacimiento);
      }
  },
  watch: {
      modalFn(val) {
          val && this.$nextTick(() => (this.$refs.picker.activePicker = "YEAR"));
      }
  },
  methods: {
      downloadZip(){
          const link = document.createElement('a');
          link.href = "/sitio/stickers-mariolego.zip";
          let filename = "mario-lego-stickers.zip";
          link.setAttribute('download',filename);
          document.body.appendChild(link);
          link.click();
      },
      download(url,id){
          const link = document.createElement('a');
          link.href = url;
          let filename = "wallpaper-"+id+".png";
          link.setAttribute('download',filename);
          document.body.appendChild(link);
          link.click();
      },
      formatDate(date) {
          if (!date) return null;
          const [year, month, day] = date.split("-");
          return `${day}/${month}/${year}`;
      },
      cerrar(){
          this.dialog2 = false;
          this.codigo = '';
          this.error = '';
      },
      acceder(){
          if(this.codigo!=""){
              if(this.codigo==="MARIO2020"){
                  this.login = true;
                  this.dialog2 = false;
                  this.codigo = '';
                  this.error = '';
              }else
                  this.error = "Código de acceso incorrecto";
          }else{
              this.error = "Proporcione el código de acceso";
          }

      },
      join() {
          this.error = '';
          if (this.$refs.formJoin.validate()) {
              this.sending = true;
              axios
                  .post("/sitio/functions/save.php", {
                      email: this.formJoin.correo,
                      name: this.formJoin.nombre,
                      lastname: this.formJoin.apellido,
                      birthday: this.formJoin.fechaNacimiento
                  })
                  .then(response => {
                      if (response.data.result) {
                          this.login = true;
                      }else{
                          this.error = response.data.msg;
                      }
                  })
                  .catch(err => {
                      this.loading = false;
                      this.sending = false;
                  })
                  .finally(() => {
                      this.loading = false;
                      this.sending = false;
                  });
          } else {
              console.log("errores en formulario");
          }
      },
  }
};
</script>
