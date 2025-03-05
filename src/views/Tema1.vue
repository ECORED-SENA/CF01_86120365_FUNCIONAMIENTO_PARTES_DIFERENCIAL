<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  El diferencial y su función principal en el sistema de transmisión
    
    p El diferencial es un componente fundamental del sistema de transmisión de potencia en un vehículo. Su función principal es permitir que las ruedas motrices giren a diferentes velocidades al tomar una curva, lo que facilita la estabilidad y el adecuado desempeño del vehículo.
    
    .row.bg-t1-1.mb-6(data-aos="fade-down")
      .col-12
        .p-5
          .row(style="display: flex; gap:10px;").justify-content-center(data-aos="fade-left")
            .col-sm-12.col-md-12.col-lg-5.mb-4.mb-lg-0.bg-t2-2.p-5
              p Sin este mecanismo, las ruedas experimentarían deslizamiento, lo que generaría inestabilidad en la conducción y un desgaste prematuro de las llantas. Esto se debe a que, al girar, las ruedas recorren trayectorias de distinta longitud: la rueda exterior debe cubrir una mayor distancia y, por lo tanto, necesita girar más rápido que la interior.

              .titulo-sexto.color-acento-contenido
                h5 Figura 1.
                span Diferencial trasero

              .col-lg-12
                img(src="@/assets/curso/tema1/img1.png", alt="Diferencial de vehículo con corte transversal, mostrando su engranaje interno y componentes mecánicos.", style="width: 100%").m-auto
              
            .col-sm--12.col-md-12.col-lg-5.mb-4.mb-lg-0.p-5.bg-t2-3
              p Sin este mecanismo, las ruedas experimentarían deslizamiento, lo que generaría inestabilidad en la conducción y un desgaste prematuro de las llantas. Esto se debe a que, al girar, las ruedas recorren trayectorias de distinta longitud: la rueda exterior debe cubrir una mayor distancia y, por lo tanto, necesita girar más rápido que la interior.

              .titulo-sexto.color-acento-contenido
                h5 Figura 2.
                span Diferencia de recorrido de la rueda interna (B) y externa (A)

              .col-lg-12
                img(src="@/assets/curso/tema1/img2.png", alt="Figura del diferencial que muestra la diferencia de recorrido entre la rueda interna y externa en una curva. Destaca el conjunto diferencial, planetario, piñón satélite y corona con piñón impulsor, explicando la distribución del movimiento.", style="width: 100%").m-auto

    .row.mt-4.justify-content-center(data-aos="fade-down")
      .col-10
        .tarjeta.p-3.mt-4.bg-intro2
          .row.justify-content-around.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/img3.svg", style="width: 100px").m-auto
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0
                  p Si el diferencial no existiera, ambas ruedas intentarían girar a la misma velocidad y recorrer la misma distancia, lo que generaría una fricción excesiva y dificultaría la maniobrabilidad del vehículo. En situaciones extremas, esto podría derivar en fallas en la transmisión o en la suspensión del automóvil.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
