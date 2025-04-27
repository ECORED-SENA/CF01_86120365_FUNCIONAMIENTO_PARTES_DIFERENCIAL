<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-intro
      .col-12
        .px-5.mb-5
          p(data-aos="fade-down") El diferencial es un elemento esencial dentro del sistema de transmisión de los vehículos, ya que permite la distribución adecuada de la potencia a las ruedas motrices. Su principal función es compensar la diferencia de velocidad entre las ruedas cuando el automóvil toma una curva, evitando el deslizamiento y garantizando una conducción estable y segura. Sin este mecanismo, las ruedas tendrían dificultades para girar con fluidez, lo que generaría un desgaste prematuro y una reducción en la eficiencia del vehículo.

          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/intro/img1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 La ubicación del diferencial varía según el tipo de transmisión. En vehículos con tracción trasera, se encuentra en el eje posterior, mientras que en aquellos con tracción delantera suele estar integrado con la caja de cambios. En sistemas de tracción en las cuatro ruedas, se añade una caja de transferencia y un diferencial adicional para distribuir la potencia entre ambos ejes. Estas configuraciones permiten que el vehículo se adapte a distintos terrenos y necesidades de conducción.

          .tarjeta.p-3.mt-4(data-aos="fade-left")
            .row.justify-content-around.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/intro/img2.svg", style="width: 100px").m-auto
              .col
                .row.justify-content-between.align-items-center.bg-intro2.p-3
                  .col.mb-3.mb-sm-0
                    p Para su correcto funcionamiento, el diferencial está compuesto por varios elementos mecánicos, como el engranaje de mando final, los piñones planetarios y los satélites, que trabajan en conjunto para regular la velocidad de cada rueda. Además, cuenta con sistemas de ajuste y calibración que aseguran un desempeño óptimo y prolongan la vida útil del mecanismo. A continuación, se analizan en detalle sus características, tipos y componentes, resaltando su importancia dentro del sistema de transmisión automotriz.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
