## ¿Que es Friender?
> Es una red social para profesionales y empresas que desean y/o requieren algún tipo de servicios de otros/as empresas o profesionales.

## ¿En qué consiste?
> Consiste en que las empresas y profesionales pueda solicitar o brindar de forma fácil, rápida y segura los servicios en los que estén especializado dichas entidades.

## ¿A quién está dirigido el proyecto?
> Esta dirigido a profesionales específicos y a empresas de todo tipo.

## ¿Qué aporta esta plataforma a deferencias de otras?
> Deja a los usuarios clientes contactarse de manera directa con los usuarios proveedores de servicios de una forma rápida y directa, sin intermediarios.

> Los usuarios clientes podrán concretar su compra de algún tipo de servicio bajo la misma plataforma mediante varias pasarelas de pago, cancelar el servicio personalmente con el usuario proveedor del servicio.

## ¿Qué tengo tienen que brindar los usuarios para poder utilizar la plataforma?
> Comúnmente nada, la plataforma es gratuita casi en su totalidad. A diferencia de los usuarios PREMIUM (que pagan por una mejor captación de clientes).

## ¿Qué diferencias hay entre los distintos tipos de usuarios?
> El usuario común solo está limitado a solicitar servicios y a publicarlos sin promesa de que sus servicios sean los más vendidos o cotizados.

> El usuario PREMIUM o el usuario pago tendrá el beneficio de subir su nivel de notoriedad para que de esta forma sus servicios sean más cotizado y más vendidos en la plataforma.

#### [Lista Completa de los Profesionales Aceptados por la Plataforma Friender](https://github.com/Miyo-Excellent/Friender_Advance/blob/friender/CATEGORIES.MD)

## ¿Qué información pide el registro?
> La información requerida para los usuarios es la siguiente:
+ Personas:
  - Apellido.
  - Clave principal de la cuenta del usuario.
  - Correo electrónico.
  - Días de la semana que labora (EJ: de lunes a viernes).
  - Fecha de nacimiento (día, mes, año).
  - ID de usuario (EJ: @tienda_la14).
  - Hora en las que está disponible (EJ: de 8:00 AM – 7:30 PM).
  - Nombre.
  - Numero de celular, teléfono o número de contacto (opcional).
  - Profesión (todas las profesiones mencionadas anteriormente).
  - Residencia (país, provincia, municipio).
  - Ubicación (país, provincia, municipio).
+ Empresas:
  - Clave principal de la cuenta del usuario.
  - Correo electrónico.
  - Días de la semana que labora (EJ: de lunes a viernes).
  - Fundación (Día, mes, año).
  - ID de usuario (EJ: @tienda_la14).
  - Lugar de fundación (país, provincia y municipio).
  - NIT (Nombre de identificación tributaria).
  - Nombre o razón social (Nombre de usuario o perfil).
  - Numero de celular, teléfono o número de contacto.
  - Tipo de empresa. Solo abran dos tipos (Sucursal, Sede Principal).
  - Ubicación (País, provincia, municipio). [OJO: LOS PROFESIONALES DEBEN ABRIR PRIMERO UNA CUENTA FREE Y POSTERIORMENTE MIGRAR A PRO]

## ¿Cómo se desarrollará el proyecto?
> **Tecnologías a utilizar:**
--- Las tecnologías que se usaran serán.
+ **Front-End:**
- **React.js:** el cual facilitara el modelado de las vistas al usuario de una manera más fluida, adicionalmente facilita la migración a una futura aplicación móvil.
+ **Back-End:**
- **Node.js**: Nos brinda rapidez y estabilidad gracias a su modelo transferencia asíncrono.
- **Base de datos**: se utilizará **MongoDB** el cual facilita la transferencia de los datos en petición del usuario al servidor mediante paquetes Json, adicional a esto al ser una base de datos no relacional será mucho más eficiente la gestión de grandes peticiones de datos al servidor, ganado así mucho en rendimiento.

## ¿Qué tipo de servidor se utilizará para este proyecto?
> De preferencia un servidor **VPS** basado en **Nginx**.

##¿Qué estrategia de desarrollo se aplicará?
> Será mediante **MVC** (Modelo-Vista-Controlador).
>> Se manejará las metodologías **LEAN**, **Rest** y **SCRUM**. • Será una **SPA** (Sigle Page Aplication).

## ¿Cómo se trabajará en el desarrollo de esta aplicación web?
> Sera construida en módulos. **¿Por qué?**. Porque de esa manera el proyecto se hará mas fácil de manipular cuando tenga un tamaño considerable y porque facilitara el desarrollo y la escalabilidad del mismo al momento de reutilizar es código o módulos ya creados.
>> Dependerá de los módulos o extensiones que se le vallan implementado a lo largo del tiempo.
>> Se tendrá en consideración de primera instancia la semántica de los documentos, de esta manera se ganará posicionamiento en los buscadores.

## Orden de módulos a desarrollar (Inicialmente).
1. --- Info Page.
2. --- Registro.
3. --- Inicio / Home.
4. --- Empresas
5. --- Perfil.
6. --- Editar Perfil.
7. --- Compartir Articulo.
8. --- Lista De Conectados.
9. --- Servicios.
10. --- Mensajes.
11. --- Me Gusta, Favorito, Comentar, De Artículo.
12. --- Módulo De Categorías (Profesionales).
13. --- Reportar Articulo.
14. --- Chat.
15. --- Configuraciones.

## ¿Cómo estará compuesto el registro de un usuario?
> Estará basado en una típica vista de registro (si, no está registrado se le notificará al usuario que se registre para hacer las acciones deseadas como comprar o publicar).
>> **Este módulo está basado en cuatro niveles:**
+ **Nivel 1:** serán para los artesanos/usuarios comunes o **free** (solo podrán mostrar estados, actualizar, eliminar comentarios y modificar sus perfiles a su antojo). **Siempre y cuando no violen los términos de acuerdos con el registro.**

+ **Nivel 2:** será para las **empresas:** es similar al nivel 1 con la diferencia de, que en este nivel podrán eliminar o suspender procesos hacia usuarios o clientes en específico o en general. Si la empresa llega a violar los acuerdos será demandada por un moderador del sitio y/o plataforma.

+ **Nivel 3:** será para **moderadores:** Estos moderadores serán los encargados de responder al bienestar de la plataforma y de los usuarios en su totalidad. Su labor es **vigilar** que todo valla en orden y como se planteara día a día.

+ **Nivel 4:** será únicamente para los **administradores de la plataforma** y estará bajo su responsabilidad todo el procesado de la plataforma, datos, penalizaciones, eliminación de usuarios y datos maliciosos para la plataforma en si misma.

## ¿La aplicación será escalable?
> Por supuesto con las herramientas que se desarrollara tendrán mucho tiempo en mercado.
>> Sera completamente escalable y después de desarrollarla al 100% podrá tener.
>>> En un futuro se llevara este proyecto a una aplicación para Android e IOS.
