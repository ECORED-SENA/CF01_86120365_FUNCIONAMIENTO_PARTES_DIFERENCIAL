<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Posiciones del diferencial según el tipo de sistema de transmisión

    p(data-aos="fade-down") La ubicación del diferencial varía en función del sistema de transmisión del vehículo. Dependiendo de la tracción y el diseño del automóvil, el diferencial puede estar ubicado en distintos puntos del sistema mecánico.

    separador
    #t_2_1.titulo-segundo.color-primario
      h2 2.1   Diferencial en vehículos con motor delantero y propulsión trasera

    .row.bg-t1-1
      .col-12(style="margin-top: -40px;")
        .p-5
          .row.justify-content-center
            .col-sm-12.col-md-12.col-lg-12.mb-4.mb-lg-0
              p(data-aos="fade-left") En este tipo de configuración, el motor se encuentra en la parte delantera del vehículo y transmite la potencia a las ruedas traseras mediante un conjunto de componentes que incluyen la caja de cambios, el árbol de transmisión, el diferencial y los semiejes.
              .row.justify-content-center.mt-4
                .col-lg-auto(data-aos="fade-right")
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 3.
                    span Diferencial en posición trasera
                  img(src="@/assets/curso/tema2/img1.png", alt="Figura el sistema de transmisión con diferencial trasero, mostrando el motor delantero, árbol de transmisión, caja de cambios, embrague, juntas cardán y palieres.", style="width: 700px").m-auto
                  figcaption.mt-2 #[b Nota.] LOS TEQUES ALL TERRAIN. (2022).

    .row.justify-content-center
      .col-10(data-aos="fade-down")
        .tarjeta.p-3.mt-4.bg-intro2
          .row.justify-content-around.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/img2.svg", style="width: 100px").m-auto
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0
                  p En este caso, el diferencial se encuentra en la parte trasera del vehículo, lo que permite distribuir el torque entre ambas ruedas traseras de manera equilibrada, facilitando la estabilidad y la tracción en distintos tipos de terrenos. Este diseño es característico de vehículos deportivos y algunos modelos de alta potencia.

    separador
    #t_2_2.titulo-segundo.color-primario
      h2 2.2  Diferencial en vehículos con motor delantero y tracción delantera

    .row.bg-t1-1
      .col-12(style="margin-top: -40px;")
        .p-5
          .row.justify-content-center
            .col-sm-12.col-md-12.col-lg-12.mb-4.mb-lg-0
              p(data-aos="fade-down") En los vehículos con tracción delantera, el motor impulsa las ruedas delanteras, lo que elimina la necesidad de un árbol de transmisión. La potencia se transfiere directamente desde la caja de cambios al diferencial, que generalmente está integrado dentro de la misma.
              .row.justify-content-center.mt-4
                .col-lg-auto(data-aos="fade-right")
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 4.
                    span Diferencial en posición delantera o trasera
                  img(src="@/assets/curso/tema2/img3.png", alt="Figura de un sistema de transmisión con motor transversal y diferencial, destacando caja de cambios, embrague, palieres y juntas homocinéticas.", style="width: 700px").m-auto
                  figcaption.mt-2 #[b Nota.] LOS TEQUES ALL TERRAIN. (2022).

    .row.justify-content-center(data-aos="fade-down")
      .col-10
        .tarjeta.p-3.mt-4.bg-intro2
          .row.justify-content-around.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/img4.svg", style="width: 100px").m-auto
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0
                  p Este diseño es común en automóviles compactos y de uso urbano, ya que reduce el peso total del vehículo, mejora el consumo de combustible y proporciona una tracción eficiente en diversas condiciones de manejo.
    
    separador
    #t_2_3.titulo-segundo.color-primario
      h2 2.3 Diferencial en vehículos con transmisión 4X4

    .row.bg-t1-1
      .col-12(style="margin-top: -40px;")
        .p-5
          .row.justify-content-center
            .col-sm-12.col-md-12.col-lg-12.mb-4.mb-lg-0
              p(data-aos="fade-down") Los vehículos equipados con tracción en las cuatro ruedas cuentan con un sistema de transmisión más complejo. A diferencia de los sistemas anteriores, incorporan una caja de transferencia y un árbol de transmisión adicional para distribuir la potencia tanto al eje delantero como al trasero.
              .row.justify-content-center.mt-4
                .col-lg-auto(data-aos="fade-right")
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 5.
                    span Tracción 4x4 conectable manualmente
                  img(src="@/assets/curso/tema2/img5.png", alt="Figura del sistema de tracción 4x4 conectable manualmente, mostrando caja de cambios, diferenciales, semiejes y caja de transferencia.", style="width: 760px").m-auto
                  figcaption.mt-2 #[b Nota.] Aficionados a la mecánica (2018).

    .row.justify-content-center
      .col-10(data-aos="fade-left")
        .tarjeta.p-3.mt-4.bg-intro2
          .row.justify-content-around.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/img6.svg", style="width: 100px").m-auto
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0
                  p Este tipo de transmisión es común en vehículos todoterreno y camionetas diseñadas para operar en condiciones adversas. Gracias a la inclusión de diferenciales en ambos ejes y, en algunos casos, diferenciales de bloqueo, estos vehículos pueden adaptarse mejor a terrenos irregulares, superficies con baja adherencia o caminos empinados.

</template>

<script>
export default {
  name: 'Tema2',
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
