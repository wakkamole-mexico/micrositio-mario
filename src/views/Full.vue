<template>
    <v-app>
        <v-app-bar elevate-on-scroll app color="#3D7EF5" height="80">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" dark class="hidden-md-and-up mr-4" style="background-color: #004cc6;"></v-app-bar-nav-icon>
            <div :style="$vuetify.breakpoint.mdAndUp?'width: 120px;':'width: 90px;'">
                <v-img src="/sitio/img/lego-mario.png"></v-img>
            </div>
            <v-spacer />
            <v-tabs class="hidden-sm-and-down" v-model="activeTab" dark centered>
                <v-tab class="text-capitalize title" v-for="tab in tabs" :key="tab.id" :to="{name: tab.route}" exact>
                    <span class="font-blink">{{ tab.name }}</span>
                </v-tab>
            </v-tabs>

            <div :style="$vuetify.breakpoint.mdAndUp?'width: 160px;':'width: 120px;'">
                <v-img src="/sitio/img/juguetron.png"></v-img>
            </div>
        </v-app-bar>
        <v-navigation-drawer
                v-model="drawer"
                fixed
                temporary
        >
            <v-list
                    nav
                    dense
            >
                <v-list-item-group
                        active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item
                        v-for="tab in tabs"
                        :key="'drw-'+tab.id"
                        :to="{name:tab.route}"
                    >
                        <v-list-item-title>{{tab.name}}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <!-- Sizes your content based upon application components -->
        <v-main class="fondo-azul animate-area">
            <!-- Provides the application the proper gutter -->
            <v-container fluid class="fill-height">

                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer dark app fixed class="fondo-ladrillo">
            <v-col
                    class="text-left font-blink py-0"
                    cols="12" md="6"
            >
                {{ new Date().getFullYear() }} <strong>Juguetron. All Rights Reserved.</strong>
            </v-col>
            <v-col cols="12" md="6" class="text-right font-blink py-0">
                <v-btn
                        color="white"
                        text
                        rounded
                        :to="{name: 'Privacidad'}"
                >
                    Aviso de Privacidad
                </v-btn>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: "Home",
        mixins: [],
        components: {},
        data: () => ({
            drawer: false,
            var: false,
            activeTab: `Home`,
            tabs: [
                { id: 1, name: "Home", route: `Home` },
                { id: 2, name: "Sets", route: `Sets` },
                { id: 3, name: "Comunidad", route: `Comunidad` },
                { id: 4, name: "Mundos Exclusivos", route: `Mundos` },
                { id: 5, name: "Instant Delivery", route: `Instant` },
                { id: 6, name: "Spotify", route: `Spotify` },
            ]
        }),
        created() {},
        mounted() {},
        computed: {},
        watch: {},
        methods: {}
    };
</script>
<style>
    .fondo-azul{
        background-color: #3D7EF5;
    }
    .texto-azul-fuerte{
        color: #2C7DFF;
    }
    .texto-azul-claro{
        color: #2CCBFF;
    }
    .fondo-ladrillo{
        background-image: url("/sitio/img/ladrillo.png");
        background-repeat: repeat;
    }
    .font-blink {
        font-family: "Blinker" !important;
    }
</style>