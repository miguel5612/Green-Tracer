# Green-Tracer
Sistema de monitoreo inalambrico de la temperatura y la humedad

#Configuracion wifi en Raspberry pi 3:

Sistema operativo: raspbian
El wifi en la raspberry pi 3 debe ser configurado como access point te la manera que lo indica el siguiente video:

https://www.youtube.com/watch?v=u_I2mVsrxB4

Para que el AP comienze a funcionar apenas conectamos la raspberry se debe añadir la linea "sudo ap Green_Tracer abcd1234"
en el archivo de arranque como lo indica el siguiente tutorial:

http://pitando.net/2016/03/31/ejecuta-programas-al-inicio-de-tu-raspberry-pi/
recomendion, modificar solo el archivo init.d



Nombre del AP: Green_Tracer
Clave del AP: abcd1234


#Como iniciar:

* Programar el node mcu.
* Instalar node, filezilla, npm , express, socket-io, ejs en la raspberry
* Configurar el AP en la raspberry y añadir el script al incio
* encender la raspberry y esperar a que ella cree el acces point Green_Tracer
* Conectarse y encender el servidor node-js con el comando "npm start"

* Conectar el node mcu
* monitorear por puerto serie que la conexion se realize correctamente
* Abrir la pagina web y observar :).