# Friender

## Descripción

 **_Friender_** Está pesando como una plataforma web que consiste en brindar opciones de empleo a sus usuarios, de forma dinámica, directa y seria. el proyecto consiste en varias etapas de desarrollo. Una Bolsa de Empleo en Real Time:  implementada inicialmente para brindar soporte tanto a las personas como a las empresas sobre anuncios laborales tanto requeridos como como en búsqueda por los usuaria o personas (NO Empresas).

## Componentes
 ### **Loggin.**
  1. Loggin.
   - Email o Usuario.
   - Contraseña.
 ### **_Ofertas._**

   #### **_Oferta_**
   + _Encabezado_: Titulo de la oferta o servicio.
   + _Descripción_: Descripción de la oferta o servicio.
   + _Logo / Imagen_: Imagen o logo de la empresa o persona / profesional.
   + _Salario / Precio_: Salario o precio de la oferta o servicio.
   + _Fecha_: Fecha de publicación de la oferta o servicio.
   + _Botones_
      - Like: Agregar a lista de ofertas que le gustan al usuario.
      - Favorito: Agregar a lista de ofertas favoritas del usuario.
      - Aplicar / Solicitar: El usuario aplicara o solicitara la oferta o servicio profesional seleccionada.
      - _Mas Información_: Botón (mostrar información completa de la Oferta o servicio).
 ### **Profesionales.**
  1. _Curriculum Vitae:_ Curriculum correspondiente al usuario de tipo persona o profesional, que contiene sus datos personales para que de ese modo las personas y empresas que requieran sus servicios o contratación pueda evaluar su perfil de forma cómoda.
     + **Virtual:** Curriculum editado desde la plataforma, rellenando campos predeterminados.
     + **Archivo:** Archivo **PDF, WORD, PNG o JPG** subido por el usuario.
 ### **Postulantes:**
  ##### Usuarios disponibles para su previa contratación.
   1. _Encabezado_: Nombre del Postulante.
   1. _Descripción_: Descripción del Postulante.
   1. _Logo / Imagen_: Imagen o logo del Postulante.
   1. _País_: País de residencia del Postulante.
   1. _Fecha_: Fecha de nacimiento del Postulante.
   1. _Botones_
      + Like: Agregar a lista de ofertas que le gustan al Postulante.
      + Favorito: Agregar a lista de ofertas favoritas del Postulante.
      + Curriculum: Curriculum del Postulante.
 ### **Empresas:**
  ##### Empresas con vacantes disponibles en las que los usuarios podrán postularse.
   1. _Encabezado_: Nombre de la Empresa.
   1. _Descripción_: Descripción de la empresa.
   1. _Logo / Imagen_: Imagen o logo de la empresa.
   1. _Sede Principal_: Sede Principal de la empresa.
   1. _Fecha_: Fecha de fundación de la empresa.
   1. _Botones_
      + Like: Agregar a lista de ofertas que le gustan de la Empresa.
      + Favorito: Agregar a lista de ofertas favoritas de la Empresa.
      + Ofertas: Ofertas laborales disponibles que tiene la empresa.
 ### **Home.**
  ##### Vista Principal de la Aplicación.
   1. _Componente Heredado_ (**Loggin**).
   1. Barra de Navegación.
      + Ofertas.
      + Profesionales.
      + Postulantes.
      + Empresas.
   1. Título de la App (Friender).
   1. Eslogan de la Empresa.
   1. Botón (Registrarse).
   1. Términos y Condiciones:
      + Descripción breve de términos: Al hacer **clic en "Registrarse"**, aceptas todos los **_términos y condicione_** además de aceptar nuestras **_Políticas de datos_**, incluso el uso de **_Cookies_**. Es posible que recibas notificaciones por correo electrónico de **_Friender_**, que puedes desactivar en cualquier momento.
 ### **Encabezado.**
   1. Encabezado **(Imagen Seleccionada por el Usuario).**
   1. Imagen de Perfil de Usuario **(Imagen Seleccionada por el Usuario - Centrada).**
   1. Barra de Navegación **(Botones: "Info", "Seguidores", "Mercado Laboral").**
   1. Barra de Búsqueda **(Botones: "Buscar", "Búsqueda Avanzada [Con Filtros]").**
   1. Botones Generales del Perfil (Botones: **"Notificaciones"**, **"Editar Perfil"**, **"Configuración"**, **"Cerrar Sesión"**).
 ### **Usuario.**
   1. **Personas y Empresas.**
      + Información del Usuario.
      + _Componente Heredado_ (**Encabezado**).
      + Información Relevante al Perfil.
 ### **Registro.**
   1. **Registro Para Empresas:**
      + Nombre o Razón Socia **(Este es el mismo nombre de Perfil).**
      + NIT **(Nombre de Identificación Tributaria).**
      + Lugar de Fundación **(País, Provincia, Municipio).**
      + Correo Electrónico.
      + Número Celular o Teléfono.
      + ID de usuario **(Ejemplo. @Tiendas_La14).**
      + Clave Principal Friender.
      + Fundación **(Día, Mes, Año).**
      + Tipo de Empresa. Sólo van haber dos opciones **(Inmobiliaria, Otros)**. **La Opción Inmobiliaria** va a facilitar la publicación sólo de inmuebles y la Opción Otros para el resto de las empresas para facilitar la **publicación de Vacantes en el Mercado Laboral**.
      + Residencia **(País, Provincia, Municipio).**
      + Clase **(Sede Principal, Sucursal).**
   1. **Registro Para Personas:**
      + Nombres.
      + Apellidos.
      + C.C **(Cedula de Identidad).**
      + Lugar de Nacimiento. **(País, Provincia, Municipio).**
      + Correo Electrónico.
      + Número de Celular.
      + ID Usuario (Ejemplo. **@Willi_Beltran**).
      + Nombre de Perfil (Este nombre el usuario lo podrá modificar cuantas veces quiera, reemplazará su nombre real y apellidos y el es que va aparecer en su perfil. Ejemplo. Willy o Maluma).
      + Clave Principal.
      + Fecha de Nacimiento **(Día, Mes, Año).**
      + Indicar si es Hombre o Mujer.
      + Residencia   **(País, Provincia, Municipio).**
 ### **Seguidores.**
   1. _Componente Heredado_ (**Encabezado**).
   1. _Usuarios Seguidos por Perfil o Usuario Loggeado._
 ### **Consultas y Reservas (PRO).**
   1. _Chat Desplegable_: (Componentes: "Usuarios [**'Usuarios Disponibles'**, **'Buscar Usuario'**, **'pup-pop (_Enumeración de la cantidad de Mensajes que no se Han Leído del Usuario en el Chat_)'**]").
   1. **Registro Para Cuentas Pro (Es Requerido Estar Registrado Previamente).**
      + Categoría **(Médicos, Abogados, etc.).**
      + Clase **(Psicólogos o Abogado Penalista...).**
      + Vincular la Cuenta ePayCo con la de Friender para poder procesar los pagos.
      + Establecer el valor de la consulta.
      + Establecer el valor por Reserva.
      + Días en los que labora **(Ejemplo. Lunes a Viernes).**
      + Horas en los que atiende **(Ejemplo. De 8:00 a.m. a 5:00 p.m.).**
      + Crear su segunda clave de manera segura.
      + Activar Cuenta Pro.
 ### **Sección de Selección de Categorías Laborales.**
   1. Sección con dos Links / Botones **("Favoritos", "Postulaciones").**
   1. Sección con Varios Links / Botones **("Categorías Laborales Principales Disponibles").**
 ### **Zona de Actualización.**
   1. _Componente Heredado_ (**Encabezado**).
   1. _Componente Heredado_ (**Sección de Selección de Categorías Laborales**).
   1. Sección con las **Vacantes y Consultas** Disponibles para Aplicar (_Botones de Cada Articulo_: **"Corazón: Like"**, **"Estrella: Favorito"**, **"Aplicar: Botón[Aplicar]"**).
 ### **Consultas y Reservas.**
   #### **Vistas Del Usuarios:**
   ##### **_Componentes:_**
   + **_Inicio / Home:_**  Vista inicial o vista raíz de **Friender**
     1. **_Conectores / Seguidores_**
        ##### **Loggeado**
         + _Componente Heredado_ (**Usuario**).
         + _Componente Heredado_ (**Zona de Actualización**).
         + _Componente Heredado_ (**Consultas y Reservas (PRO)**).
        ##### **No Loggeado**
         + _Componente Heredado_ (**Home**).
     2. **_Ofertas:_**  Vista de las **Ofertas de Empleo Generales de Friender**.
        ##### _Componente Heredado_ (**Ofertas**).
     3. **_Profesionales:_**  Vista de las **Servicios Profesionales Generales de Friender**.
        ##### _Componente Heredado_ (**Profesionales**).
     4. **_Postulantes:_**  Vista de las **Postulantes Disponibles para Laborar en una Empresa u Ofrecer Servicios en Friender**.
        ##### _Componente Heredado_ (**Postulantes**).
     5. **_Empresas:_**  Vista de las **Empresas Disponibles para Ofertar Vacantes de Empleo en Friender**.
        ##### _Componente Heredado_ (**Empresas**).

