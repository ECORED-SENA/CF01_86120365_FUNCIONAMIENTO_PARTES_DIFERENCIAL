export default {
  global: {
    Name: 'Funcionamiento y partes del diferencial',
    Description:
      'El diferencial es un componente clave en la transmisión del vehículo, permitiendo que las ruedas motrices giren a distintas velocidades en las curvas. Su ubicación varía según el tipo de tracción, y su funcionamiento depende de engranajes como piñones planetarios y satélites. Este mecanismo mejora la estabilidad, reduce el desgaste y optimiza el rendimiento del automóvil.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'El diferencial y su función principal en el sistema de transmisión',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Posiciones del diferencial según el tipo de sistema de transmisión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Diferencial en vehículos con motor delantero y propulsión trasera',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Diferencial en vehículos con motor delantero y tracción delantera',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diferencial en vehículos con transmisión 4X4',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tema 3',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'El diferencial y su función principal en el sistema de transmisión',
      referencia:
        'Lesics Española. (2021). ¿Cómo funciona un diferencial?. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MIsRpWqCNew&ab_channel=LesicsEspa%C3%B1ola',
    },
    {
      tema:
        'Posiciones del diferencial según el tipo de sistema de transmisión',
      referencia:
        'Mentalidad De Ingeniería. (2022). Diferencial Explicado. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=4tgb7681nDQ&ab_channel=MentalidadDeIngenier%C3%ADa',
    },
    {
      tema: 'Diferencial en vehículos con motor delantero y propulsión trasera',
      referencia:
        'Wicho sr20. (2019).TRACCIÓN TRASERA , TRACCIÓN DELANTERA, TRACCIÓN TOTAL, AWD ¿CUAL ES MEJOR ?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=0QvoRcIJ9B4&ab_channel=Wichosr20',
    },
    {
      tema: 'Diferencial en vehículos con transmisión 4X4',
      referencia:
        'AUTOTECNICATV. (2023).TRACCION #4x4 | 4WD | AWD ¿Cuál es la diferencia?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=U9kRwa9p2l8&ab_channel=AUTOTECNICATV ',
    },
    {
      tema: 'Partes del diferencial estándar y su funcionamiento',
      referencia:
        'Lesics Española. (2017). Transmisió manual, ¿cómo funciona?. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=bDM2Y0SrUUM&t=4s&ab_channel=LesicsEspa%C3%B1ola',
    },
  ],
  glosario: [
    {
      termino: 'Caja de transferencia',
      significado:
        'mecanismo adicional en vehículos 4x4 que distribuye la potencia a los ejes delantero y trasero.',
    },
    {
      termino: 'Corona',
      significado:
        'engranaje de gran tamaño que recibe el movimiento del piñón impulsor y lo transfiere al conjunto del diferencial.',
    },
    {
      termino: 'Diferencial',
      significado:
        'mecanismo que permite que las ruedas motrices giren a diferentes velocidades, facilitando la estabilidad del vehículo en curvas.',
    },
    {
      termino: 'Holgura diferencial',
      significado:
        'espacio de ajuste entre los engranajes del diferencial, necesario para su correcto funcionamiento y reducción de desgaste.',
    },
    {
      termino: 'Piñón impulsor',
      significado:
        'engranaje que transmite la potencia desde la transmisión a la corona del diferencial.',
    },
    {
      termino: 'Piñón planetario',
      significado:
        'engranaje dentro del diferencial que ajusta la velocidad de las ruedas motrices en función del giro del vehículo.',
    },
    {
      termino: 'Piñón satélite',
      significado:
        'engranaje que conecta los piñones planetarios y permite la distribución del torque entre las ruedas motrices.',
    },
    {
      termino: 'Semieje',
      significado:
        'eje que conecta el diferencial con las ruedas motrices, transmitiendo la potencia generada por el motor.',
    },
    {
      termino: 'Tracción delantera',
      significado:
        'sistema en el que la potencia del motor se transmite únicamente a las ruedas delanteras, integrando el diferencial con la caja de cambios.',
    },
    {
      termino: 'Tracción trasera',
      significado:
        'configuración en la que la potencia del motor se transfiere a las ruedas traseras mediante un diferencial ubicado en el eje posterior.',
    },
  ],
  referencias: [
    {
      referencia: 'Aficionados a la mecánica (2018). <em>Transmisión.</em>',
      link: '',
    },
    {
      referencia:
        'Cjponyparts (2018). <em>What is a locking differential?</em>',
      link: '',
    },
    {
      referencia:
        'LOS TEQUES ALL TERRAIN. (2022). ¿Qué es un eje de transmisión? Partes, función, fallas y más. [Archivo de video] Youtube.  ',
      link:
        'https://www.youtube.com/watch?v=HNmLO1pZHW8&ab_channel=LOSTEQUESALLTERRAIN',
    },
    {
      referencia:
        'Pinilla, E. (2018). <em>Descripción y funcionamiento de los componentes del vehículo.</em>',
      link: '',
    },
    {
      referencia:
        'Ribbens, W. (2003). <em>Understanding automotive electronics.</em>',
      link: '',
    },
    {
      referencia:
        'VanGelder, K. (2018). <em>Automotive technology, principles and practice.</em>',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Edwin Abello Rubiano',
          cargo: 'Experto temáticol',
          centro: 'Regional Quindío - Centro de Comercio y Turismo',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Quindío - Centro de Comercio y Turismo',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarría Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete Lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia	',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
