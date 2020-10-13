import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
   theme: {
      dark: false,
      themes: {
         light: {
            block_bg: '#E0F7FA',
            css: '#E1BEE7',
            js: '#FFEE58',
            vue: '#A5D6A7',
            react: '#B3E5FC',
            node: '#BCAAA4',
            express:'#FFCCBC',
            mongo: '#FFD180',
            mysql: '#E0E0E0',
            firebase: '#EF9A9A',
            other: '#FFFFFF',
            gre: '#303030',
            gree: '#66BB6A',
            txt: '#000000'
         },
         dark: {
            block_bg: '#000000',
            css: '#6A1B9A',
            js: '#FFAB00',
            vue: '#1B5E20',
            react: '#0277BD',
            node: '#3E2723',
            express: '#BF360C',
            mongo: '#E65100',
            mysql: '#424242',
            firebase: '#D50000',
            other: '#000000',
            gre: '#D3D3D3',
            gree: '#2E7D32',
            txt: '#FFFFFF'
         }
      }
   }
});

//js - yellow
//css - red
//vue - lightgreen
//react - blue
//node - brown
//express - lightbrown
//mysql - grey
//mongodb - darkgreen
//other - black
