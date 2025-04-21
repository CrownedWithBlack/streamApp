# StreamApp

## Descripción
Este proyecto esá pensado para ser una plataforma web de streaming, de momento solo cuenta con pocos elementos, la mayoría de placeholder.
En este segundo sprint procuré arreglar la deuda tecnica que dejé en el anterior sprint, la mayor parte del contenido se genera de forma automatica e intenté crear componentes y servicios reutilizables para reducir el boilerplate.

## Obejtivo
- A corto plazo: migrar el proyecto anterior de JS vanilla a Angular.
- A largo plazo: crear una aplicación web de streaming 100% funcional.

## Instalación / Como usar
- Descargar el repositorio directo desde GitHub: https://github.com/CrownedWithBlack/streamApp.git
- Clona el repositorio: `gh repo clone CrownedWithBlack/streamApp`


Una vez tengas los archivos en tu equipo, abre tu IDE, se recomienda usar VSCode. Una vez en vscode abre la terminal y navega hasta la ruta raíz del proyecto, para asegurarte que estés en la raíz usa el comando `ls` en la terminal, deberías ver algo como esto:

![capturaTerminal](readmeAssets/terminal.png)

Ahora usa el comando `npm install`, si no tienes instalado node/npm, lo puedes encontrar aquí: https://nodejs.org/es

Esto instalará los archivos necesarios para el proyecto, una vez que termine, vuelve a la terminal y escribe el comando `ng serve`. En la terminal se mostrara una dirección de localhost haz `ctrl + click` para abrir el enlace y se muestre el proyecto.


## Capturas
### Login
![login](readmeAssets/login.jpg)
### Catálogo
![catalogo](readmeAssets/catalogo.jpg)
### Detale
![detalle](readmeAssets/detalle.jpg)

## Dependencias / Bibliotecas
 - Angular 18.2.18
 - Bootstrap 5.3.5
 - ng-Bootstrap 17.0.1


## ¿Cómo lo hice?
Mi enfoque principal fue en hacerlo lo más modular y escalable posible, esto para reducir la carga de trabajo en futuros sprints. Esto lo logre por medio de algunos componentes compartidos los cuales se encuentran en la carpeta de **shared**. Además de eso, opté por crear un layout de rutas para ayudar a la reutilización de componentes, un ejemplo es el **nav bar** en la ruta de home **home**:

<p align=center>
    &lt;app-nav-bar&gt;&lt;/app-nav-bar&gt;
</p>
<p align=center>
&lt;router-outlet&gt;&lt;/router-outlet&gt;
</p>

De esta manera el nav bar se queda estático y el router se encarga de manejar las siguiente direcciones por medio de las rutas hijas de home: `home/catalogo, home/series`, etc.
También pensé en agregar mas directivas al template y generar contenido parametrizado por medio de `@Input()`de manera aún más dinamica, pero por falta de tiempo lo pospondré, aún así el código hardcodeado se redujo muchisimo en comparación con el sprint anterior.

En cuanto a librerías, quise seguir usando bootstrap ya que primero quiero tener cierto nivel de expericencia con un framework antes de pasarme a otro. En primera instacia decidí utilizar **bootstrap vanilla**, lo que hice fue instalarlo por medio de la terminal, después copié las rutas del `node_modules` y las añadí al `angular.json`. Cuando llegué a la parte de los modals tuve problemas y después de una pequeña investigación descubrí que los modals con **bootstrap vanilla** no son muy angular-friendly, por lo que instale **ngBootsrap** para manejar la logica de modals desde el script, para esto generé un **componente compartido** y un **servicio** que muestre los modals.

Esta vez toda la carga de datos; **paths**, **nombres**, **ids**, **reviews** se hace por medio de un json, para esto generé un **service** que hace la carga de datos usando el metodo `get` del `HttpClient`, también creé una **interface** para que me ayude con el tipado de datos del **service**. Cabe mencionar que todos los elementos están debidamente ordenados dentro de la estructura de carpetas.

## Problemas conocidos
Al igual que en el sprint anterior la mayoría de problemas son visuales, lo que más me sigue costando trabajo es que los elementos se comporten de manera apropiada en resoluciones muy pequeñas.

## Retrospectiva
### ¿Qué hice bien?
Estoy muy satisfecho con el nivel de reutilización de código que logré, si bien aún existe área de oportunidad, el nivel alcanzado es superior.
### ¿Qué no salió bien?
Al igual que en el sprint anterior el carrusel de bootstrap me sigue dando dolores de cabeza, llegué a considerar en quitarlo y dejar solo las cards, pero me gusta imponerme retos para aprender más, así que de momento lo dejaré. También tuve muuuchos problemas con los modals de ngBootstrap, ya que se me dificulta algo la comunicación entre componentes debido al intercambio de tipos de datos que se dan, y le dediqué mucho tiempo  a resolverlo, por fortuna al final lo logré resolver y los modal quedaron bien.
### ¿Qué puedo hacer diferente?
Sonará un poco a excusa, pero siento que el curso que nos proporcionaron no ayudó mucho. Así que de ahora en adelante si vuelvo a notar que algún otro curso se queda corto lo complementaré con otro curso de youtube o alguna otra fuente.
Además de que en este nuevo sprint me dedicaré a crear pequeños proyectos personales en angular para adquirir más experiencia.