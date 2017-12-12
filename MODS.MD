### Modo **Desarrollo**:
> Esta modalidad no posee gran parte de las características totales del proyecto, con el fin de agilizar el desarrollo de modulo u otras cosas. Las características que tiene son las siguiente:
+ **CSS Modules**: Son estilos que se crean dinámicamente con el loader de Webpack **“css-loader”** esto con el propósito de evitar conflictos al maquetar los estilos de la aplicación.
+ **Server Side Rendering**: este módulo le permite renderizar todo desde el servidor para un posterior envió al cliente, incluyendo el estado inicial del **store de Redux**.
+ Contiene los middleware de **Webpack** como: **hot middleware, dev middleware y hot server middleware**. Esto con el fin de **actualizar la vista del navegador** cuando hallan cambios realizados en algún componente al instante. **Pero OJO:** el React-hot-loader **se rompe muy fácilmente**.
+ Contiene el plugin para **Webpack NoEmitOnErrorsPlugin**: Esto con el fin de que **Webpack** complete su proceso y no se detenga cuando encuentre un warning o error en algunas de sus configuraciones.
______
### Modo Análisis:
> Esta modalidad esta implementada con el fin de **mostrar los módulos en general del proyecto** incluyendo los **“Node Modules”**. La vista de Aplicación de análisis se guardará en la **carpeta dist/** en raíz con el nombre de **“report.html”** el cual solo funciona si el comando **“npm run start-analyzer”** está en ejecución.
Esta modalidad contiene los siguientes módulos:
+ **Webpack bundle analyzer**: este **plugin de Webpack** se ejecutará cuando le pasemos una **variable de entorno llamada “ANALYZER”** la cual es un boolean, y se encargara de añadir este plugin a Webpack, esto con el fin de **crear un archivo estático HTML** dentro de la carpeta **dist/** en la raíz del proyecto.
______
### Modo Producción:
> Esta modalidad fue implementada para el **despliegue o deploytment**, es la modalidad más cargada de configuraciones que las otras modalidades, ya que posee las siguientes características:
+ Contienen varios plugins de Webpack para **minificar y minizar el tamaño** de los archivos generados, tales como:
1. **ExtractTextPlugin**: se encargará de que los estilos generados en el proyecto sean almacenados en **un archivo CSS único**, esto porque Webpack en conjunto con React **inyectan en el HTML el código CSS** y esto ocasiona que **el SEO de la aplicación** no sea del todo buena.
2. **DefinePlugin**: se encarga de dictarle a Webpack en que entorno se encuentra.
3. **AggressiveMergingPlugin**: se encarga de **unir los pequeños archivos menores de 1MB**, esto con el fin de **mejorar el rendimiento** de la aplicación.
4. **UglifyPlugin**: se encarga de **minificar el contenido de los archivos**, esto con el fin de minimizar el tamaño de los mismos.
5. **CompressionPlugin**: este importante plugin es el encargado de **comprimir lo máximo posible los archivos** y generar los bundles en formato **“.gzip”**, los cuales serán leídos por el **servidor Express**, el cual describimos en la **siguiente sección de este documento**.
______
