# Descripción sobre **Friender:**

  > Está pesando como una plataforma web que consiste en brindar opciones de empleo a sus usuarios, de forma dinámica, directa y seria. el proyecto consiste en varias etapas de desarrollo. Una Bolsa de Empleo en Real Time:  implementada inicialmente para brindar soporte tanto a las personas como a las empresas sobre anuncios laborales tanto requeridos como como en búsqueda por los usuaria o personas (NO Empresas).
 
 ### Inicializar el proyecto:
 > Modo desarrollo: `npm run start`

 > Modo análisis: `npm run start-analyzer`
 
 > Modo production: `npm run start-production`
______
### Modo **Desarrollo**:
> Esta modalidad no posee gran parte de las características totales del proyecto, con el fin de agilizar el desarrollo de modulo u otras cosas. Las características que tiene son las siguiente:
  +   **CSS Modules**: Son estilos que se crean dinámicamente con el loader de Webpack **“css-loader”** esto con el propósito de evitar conflictos al maquetar los estilos de la aplicación.
  +   **Server Side Rendering**: este módulo le permite renderizar todo desde el servidor para un posterior envió al cliente, incluyendo el estado inicial del **store de Redux**.
  +   Contiene los middleware de **Webpack** como: **hot middleware, dev middleware y hot server middleware**. Esto con el fin de **actualizar la vista del navegador** cuando hallan cambios realizados en algún componente al instante. **Pero OJO:** el React-hot-loader **se rompe muy fácilmente**.
  +   Contiene el plugin para **Webpack NoEmitOnErrorsPlugin**: Esto con el fin de que **Webpack** complete su proceso y no se detenga cuando encuentre un warning o error en algunas de sus configuraciones.
______
### Modo Análisis:
> Esta modalidad esta implementada con el fin de **mostrar los módulos en general del proyecto** incluyendo los **“Node Modules”**. La vista de Aplicación de análisis se guardará en la **carpeta dist/** en raíz con el nombre de **“report.html”** el cual solo funciona si el comando **“npm run start-analyzer”** está en ejecución.
Esta modalidad contiene los siguientes módulos:
  +   **Webpack bundle analyzer**: este **plugin de Webpack** se ejecutará cuando le pasemos una **variable de entorno llamada “ANALYZER”** la cual es un boolean, y se encargara de añadir este plugin a Webpack, esto con el fin de **crear un archivo estático HTML** dentro de la carpeta **dist/** en la raíz del proyecto.
______
### Modo Producción: 
> Esta modalidad fue implementada para el **despliegue o deploytment**, es la modalidad más cargada de configuraciones que las otras modalidades, ya que posee las siguientes características:
  +   Contienen varios plugins de Webpack para **minificar y minizar el tamaño** de los archivos generados, tales como:
      1. **ExtractTextPlugin**: se encargará de que los estilos generados en el proyecto sean almacenados en **un archivo CSS único**, esto porque Webpack en conjunto con React **inyectan en el HTML el código CSS** y esto ocasiona que **el SEO de la aplicación** no sea del todo buena.
    
       2. **DefinePlugin**: se encarga de dictarle a Webpack en que entorno se encuentra.
     
       3. **AggressiveMergingPlugin**: se encarga de **unir los pequeños archivos menores de 1MB**, esto con el fin de **mejorar el rendimiento** de la aplicación.
     
       4. **UglifyPlugin**: se encarga de **minificar el contenido de los archivos**, esto con el fin de minimizar el tamaño de los mismos.
     
       5. **CompressionPlugin**: este importante plugin es el encargado de **comprimir lo máximo posible los archivos** y generar los bundles en formato **“.gzip”**, los cuales serán leídos por el **servidor Express**, el cual describimos en la **siguiente sección de este documento**.
______
### Utilizando la herramienta React Development Tools.
> React Development Tools es una extensión de nuestro navegador con la cual podremos visualizar, modificar y enviar (setear) los datos que pasan a través de Redux y sobre todo del estado de Redux. Cabe destacar que esta implementada de manera óptima para el modo de producción, pero no será funcional en dicha modalidad ya que no es permitido que el cliente vea toda la informacion latente de la aplicación desde su terminal.

#### ¿Cómo usar esta herramienta?
> Requiere únicamente que se instale la herramienta o plugin en nuestro navegador, ya que la configuración ya se implementó en el proyecto, luego de tener la herramienta o plugin instalado en el navegador se inicializa el proyecto con el siguiente comando.
   > `npm run start`

### Pasos a seguir para su correcto uso:
   + Instalar la herramienta o plugin en el navegador.
      - [Plugin para Google Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
      - [Plugin para Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/remotedev/).
      - [Plugin para Electron](https://github.com/GPMDP/electron-devtools-installer).
   + **Inicializar el proyecto** con el comando `npm run start`, para evitar inconvenientes es mejor ejecutar primero el comando `npm install` desde una **terminal situada en la raíz del proyecto** y posteriormente ejecutar el comando `npm run start` esto para evitar problemas la primera vez que inicializamos el proyecto ya que se puede dar el caso de que **no se tengan todas las dependencias instaladas localmente**.

#### Solo funciona en modo de desarrollo (Development).
______
##### React Development Tools.  
![React Development Tool](https://cloud.githubusercontent.com/assets/7957859/18002950/aacb82fc-6b93-11e6-9ae9-609862c18302.png)
______
##### React Development Tools Vista del Chart.  
![React Development Tool 1](https://github.com/Miyo-Excellent/Friender_Advance/blob/Friender/info/images/test/reduxDevTool/reduxDevTool.JPG)
______
##### React Development Tools Vista del Inspector.
![React Development Tool 2](https://github.com/Miyo-Excellent/Friender_Advance/blob/Friender/info/images/test/reduxDevTool/reduxDevTool2.JPG)
______
##### React Development Tools Vista del Monitor de Log's.
![React Development Tool 3](https://github.com/Miyo-Excellent/Friender_Advance/blob/Friender/info/images/test/reduxDevTool/reduxDevTool3.JPG)
______
