<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Funcionamiento y aplicación del diferencial en sistemas de transmisión',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar  sobre la función, componentes y tipos de diferenciales en vehículos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del diferencial en un vehículo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que las ruedas motrices giren a la misma velocidad en cualquier condición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permitir que las ruedas motrices giren a diferentes velocidades en las curvas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir la velocidad del vehículo en pendientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribuir el peso del vehículo de manera uniforme.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué sucedería si un vehículo no tuviera diferencial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No podría avanzar en línea recta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La transmisión dejaría de funcionar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las ruedas se deslizarían en las curvas, generando inestabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ambas ruedas motrices girarían siempre a la misma velocidad, dificultando el giro.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Dónde se encuentra el diferencial en los vehículos con tracción trasera?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En el eje delantero del vehículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'En el eje trasero del vehículo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Integrado en la caja de cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En la caja de transferencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cómo se distribuye la potencia en un vehículo con tracción en las cuatro ruedas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo a las ruedas traseras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo a las ruedas delanteras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A ambos ejes a través de una caja de transferencia y un diferencial adicional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depende de la velocidad del vehículo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué componente multiplica el par motor y cambia la dirección del movimiento en el diferencial?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Engranaje de mando final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Piñones satélites.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Semiejes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Caja de cambios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cómo actúa el diferencial cuando el vehículo gira a la derecha?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambas ruedas giran a la misma velocidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El piñón planetario derecho gira más rápido que el izquierdo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El piñón planetario izquierdo gira más rápido que el derecho.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El diferencial bloquea las ruedas traseras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué componente conecta los semiejes con los planetarios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Corona.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Piñón impulsor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Caja de cambios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sector estriado de los piñones planetarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la función de las rodelas o arandelas cónicas en los piñones satélites?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la velocidad del diferencial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Ajustar la holgura y calibrar el juego entre los piñones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la fricción entre los engranajes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conectar el diferencial con la caja de cambios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué sucede cuando el vehículo avanza en línea recta?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El diferencial bloquea el giro de una rueda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las ruedas motrices giran a la misma velocidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El piñón impulsor gira en sentido contrario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El diferencial aumenta la velocidad de la rueda exterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué componente transmite la potencia del motor al diferencial en un vehículo con tracción trasera?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Semiejes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Piñones planetarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Árbol de transmisión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Piñón satélite.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El diferencial permite que las ruedas motrices giren siempre a la misma velocidad en curvas.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En vehículos con tracción delantera, el diferencial suele estar integrado con la caja de cambios.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El diferencial solo se utiliza en vehículos con tracción en las cuatro ruedas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los piñones satélites son los encargados de diferenciar la velocidad de las ruedas motrices.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El diferencial se compone únicamente de un piñón impulsor y una corona.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
