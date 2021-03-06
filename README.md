#### Nota: La aplicación fue desarrollada con el IDE VSCode y Nodejs 16.3.0 tomar en cuenta esto principalmente la version de Nodejs, ademas de eso, esta version usa Docker. Reemplace todo lo que este entre los simbolos <> por sus datos personales, obviamente eliminando tambien los <>.

# Descripción

Esta aplicación es una API sencilla desarrollada en Nodejs, usando las librerías express y cowsay, en la cual seleccionamos una de las imágenes predefinidas que tiene la librería cowsay y le enviamos un mensaje. Como resultado nos devuelve la imagen con el mensaje ingresado. Al final de este documento dejo unas capturas de pantalla de esta.

# Instrucciones para usar en otro equipo
1. Clone el repositorio actual con la siguiente instrucción:

        git clone https://github.com/jsubarte/API-COWSAY.git

   o de clic al botón Code y luego en Download ZIP y descomprima en su directorio local.
2. Abra el terminal y diríjase al directorio raíz del proyecto que acaba de clonar o descargar.
3. Ejecute la siguiente instrucción:

        docker build . -t <SU USUARIO DE DOCKER>/<NOMBRE QUE LE QUIERE DAR A LA IMAGEN>

   Esto creara la imagen de Docker en base a las especificaciones del archivo Dockerfile.
4. Ahora proceda a crear y ejecutar el contenedor con la siguiente instrucción:

        docker run -p <NUMERO DE PUERTO DEL CONTENEDOR>:3000 -d <SU USUARIO DE DOCKER>/<NOMBRE QUE LE DIO A LA IMAGEN CON LA INSTRUCCION ANTERIOR>

   Esto creara el contenedor mapeando el número de puerto del contenedor asignado por usted con el puerto de la aplicación esto ejecutará el contenedor y estará listo para usar la aplicación.
5. Abra su navegador ( Chrome / Mozilla ) y vaya a la dirección:

        http://localhost:<NUMERO DE PUERTO DEL CONTENEDOR> 
 
    podrá ver la pantalla inicial de la aplicación.
6. Seleccione la figura que desea utilizar de la lista desplegable y escriba su mensaje, luego de esto de clic en el botón enviar.
7. Se le mostrara una nueva pantalla con la imagen seleccionada y el mensaje ingresado, para volver simplemente de clic en Regresar.

# Capturas de pantalla

### Pantalla de configuración

![Alt Pantalla1](https://github.com/jsubarte/actividad-01/blob/Main/img-capturas/img1.PNG)

### Pantalla de salida

![Alt Pantalla2](https://github.com/jsubarte/actividad-01/blob/Main/img-capturas/img2.PNG)