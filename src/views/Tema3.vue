<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Partes del diferencial estándar y su funcionamiento
    
    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-down")
      .col-lg-9.col-md-9.h-100
        .crd.p-4.mb-4.bg-t2-2.h-100
          .p-3
            p.mb-0 El diferencial está compuesto por distintos elementos que trabajan en conjunto para permitir la transmisión adecuada de la potencia a las ruedas.
      .col-lg-3.col-md-6.h-100
        figure.h-100.d-flex.align-items-center.justify-content-center
          img(src="@/assets/curso/tema3/img1.png", alt="alt")

    separador
    .titulo-segundo.color-primario
      h2 3.1 El mecanismo diferencial y su función en la transmisión de potencia

    p El mecanismo del diferencial consta de dos conjuntos principales que trabajan en conjunto para distribuir la fuerza motriz de manera eficiente:

    .titulo-sexto.color-acento-contenido
      h5 Figura 6.
      span  Conjunto engranaje de mando final

    .row.justify-content-center.align-items-stretch.mb-4(data-aos="fade-down")
      .col-lg-6.h-100
        .crd.mb-4.h-100
          img(src="@/assets/curso/tema3/img2.png", alt="Figura del conjunto de engranaje de mando final, compuesto por una corona y un piñón impulsor, encargados de transmitir el movimiento dentro del diferencial.", style="width: 100%").m-auto
          figcaption.mt-2.bg-t2-2 Nota. VanGelder (2018).

      .col-lg-6.h-100
        .crd.p-4.mb-4.bg-t3-1.h-100
          .p-3
            ul.lista-ul--color.mt-5
              li.d-flex
                i.fas.fa-circle-check
                |
                p.mb-0 #[b Engranaje de mando final:] Su función es multiplicar el par motor y modificar la dirección del movimiento, pasando de longitudinal a transversal. Este conjunto está conformado por un piñón impulsor y una corona, que trabajan en sincronía para transmitir la potencia a las ruedas.

              li.d-flex
                i.fas.fa-circle-check
                |
                p.mb-0 #[b Conjunto diferencial:] Compuesto por piñones cónicos planetarios y satélites, este mecanismo permite que las ruedas motrices giren a diferentes velocidades cuando el vehículo se desplaza por una curva

    .row.bg-t1-1(data-aos="fade-down")
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-6.h-100
              .crd.mb-4.h-100
                p El mecanismo diferencial está compuesto por un conjunto de mando final, una corona, un piñón impulsor, piñones planetarios y satélites, además de los semiejes, que transmiten la potencia a las ruedas, garantizando estabilidad y tracción en la conducción.

                img(src="@/assets/curso/tema3/img3.png",  style="width: 100%").m-auto.d-none.d-lg-block

            .col-lg-6.h-100
              .crd.p-4.mb-4.h-100
                .titulo-sexto.color-acento-contenido
                  h5 Figura 7.
                  span Mecanismo del diferencial 

                img(src="@/assets/curso/tema3/img2.png", alt="Figura del diferencial con corona, piñones y semiejes, que distribuyen la potencia a las ruedas.", style="width: 100%").m-auto
                figcaption.mt-2.bg-t2-2 Nota.  Ribbens (2003).

    p.mt-4 #[b El funcionamiento del diferencial se puede explicar de la siguiente manera:]

    .row.bg-t1-1(data-aos="fade-down")
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch
            .col-lg-5.h-100
              .titulo-sexto.color-acento-contenido
                h5 Figura 8.
                span  Funcionamiento del conjunto diferencial
              .crd.mb-4.h-100
                img(src="@/assets/curso/tema3/img5.png", alt="Figura del diferencial en recta y en giros, mostrando la variación de velocidad entre los piñones planetarios.", style="width: 100%").m-auto
                figcaption.mt-2.bg-t2-2 Nota. VanGelder (2018).

            .col-lg-7.h-100
              .crd.p-4.h-100
                .p-3
                  AcordionA(tipo="a" clase-tarjeta="tarjeta bg-t3-2")
                    .row(titulo="Avance en línea recta")
                      .col-md-12.mb-4.mb-md-0
                        p La corona y los piñones planetarios giran a la misma velocidad, asegurando que ambas ruedas motrices mantengan una velocidad uniforme.

                    div(titulo="Curva a la izquierda")
                      .col-md-12.mb-4.mb-md-0
                        p El diferencial permite que el piñón planetario derecho gire más rápido que el izquierdo, haciendo que la rueda derecha avance con mayor velocidad y cubra la distancia necesaria.

                    div(titulo="Curva a la derecha")
                      .col-md-12.mb-4.mb-md-0
                        p El diferencial permite que el piñón planetario izquierdo gire más rápido que el derecho, haciendo que la rueda izquierda avance con mayor velocidad.

    .row.justify-content-center(data-aos="fade-down")
      .col-10
        .tarjeta.p-3.mt-4.bg-t3-1
          .row.justify-content-around.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/img6.svg", style="width: 100px").m-auto
            .col
              .row.justify-content-between.align-items-center.p-3
                .col.mb-3.mb-sm-0
                  p Este mecanismo es esencial para la conducción segura y eficiente, ya que evita el desgaste excesivo de los neumáticos y mejora la estabilidad del vehículo en curvas y maniobras.

    separador
    .titulo-segundo.color-primario
      h2 3.2 Otras partes del diferencial y su importancia en el sistema de transmisión

    p Además del mecanismo diferencial, existen otros componentes esenciales que garantizan su correcto funcionamiento.

    .row.bg-t1-1(data-aos="fade-down")
      .col-12
        .p-5
          .row.justify-content-center.align-items-stretch
            .col-10
              .row.justify-content-center
                .col-lg-6.h-100.mt-4
                  .crd.p-4.mb-4.bg-t3-3.h-100
                    .p-3
                      p #[b El conjunto de piñones] se encuentra alojado en el florero, una estructura que sirve como soporte para la corona y los demás elementos del diferencial. Esta pieza es clave, ya que mantiene la alineación y la estabilidad de los engranajes internos.
                .col-lg-6.h-100
                  .crd
                    figure.h-100
                      img(src="@/assets/curso/tema3/img7.png")

          .row.mb-2.ms-0.mt-4
            .col-auto.bg-subtitulo(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema3/icon1.svg', alt='', style='width: 70px')
                .col
                  h3.mb-0.text-white Los piñones planetarios 

          p Poseen un sector estriado en su interior, lo que permite la conexión de cada semieje con el planetario. En el otro extremo, estos semiejes se conectan con la manzana de la rueda, que es la encargada de recibir finalmente el giro generado por el diferencial.

          .row.justify-content-center
            .col-8
              .row.justify-content-center
                .titulo-sexto.color-acento-contenido
                  h5 Figura 9.
                  span  Alojamiento del conjunto diferencial y semieje
                .crd.mb-4.h-100
                  img(src="@/assets/curso/tema3/img8.png", alt="Figura del diferencial con semieje, planetarios, satélites y portacorona, ilustrando su ensamblaje y función en la transmisión.", style="width: 100%").m-auto
                  figcaption.mt-2.bg-t2-2 Nota. VanGelder (2018).

    .row.bg-t1-1(data-aos="fade-down")
      .col-12
        .p-5
          .row.ms-0
            .col-auto.bg-subtitulo(data-aos="fade-left")
              .row.align-items-center
                .col-auto.px-0
                  figure
                    img(src='@/assets/curso/tema3/icon1.svg', alt='', style='width: 70px')
                .col
                  h3.mb-0.text-white Los piñones satélites

          p Giran sobre su propio eje o pasador y cuentan con rodelas o arandelas cónicas en su parte posterior. Estas piezas tienen la función de calibrar la holgura exacta entre los piñones, garantizando un ajuste preciso y reduciendo la fricción excesiva. En algunos diseños, las rodelas de calibración también cumplen la función de controlar el juego en los planetarios, asegurando un desempeño estable y prolongando la vida útil del sistema.

          .row.justify-content-center
            .col-7
              .row.justify-content-center
                .titulo-sexto.color-acento-contenido
                  h5 Figura 10.
                  span  El diferencial y otros componentes
                .crd.mb-4.h-100
                  img(src="@/assets/curso/tema3/img9.png", alt="Figura del diferencial con sus partes principales como piñón impulsor, corona y semiejes, ilustrando su estructura interna.", style="width: 100%").m-auto
                  figcaption.mt-2.bg-t2-2 Nota. VanGelder (2018).
               

</template>

<script>
export default {
  name: 'Tema3',
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
