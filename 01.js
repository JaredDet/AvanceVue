//Instancia de Vue
const app = new Vue({
  el: "#app",
  data: {
    titulo: "¡Hola mundo, con Vue!",
    frutas: ["Manzana", "Pera", "Naranja"],
    frutasObjeto: [
      { nombre: "Manzanas", cantidad: 10 },
      { nombre: "Peras", cantidad: 0 },
      { nombre: "Naranjas", cantidad: 12 },
    ],
    nuevaFruta: "",
  },
  methods: {
    agregarFruta() {
      this.frutasObjeto.push({
        nombre: this.nuevaFruta,
        cantidad: 0,
      });
    },
  },
});
