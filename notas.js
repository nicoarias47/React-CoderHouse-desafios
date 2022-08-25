/* 
----- CLASE 2: JSX & transpiling -----


1_ ---SUGAR SYNTAX---

• Clases: templates, donde podemos almacenar propiedades (keys y 
valores) y metodos (funciones).


2_ --- BABEL ---

•Retrocompatibilidad: https://caniuse.com/
Nos permite ver la compatibilidad de las herramientas en los 
diferentes browsers.

Es importante que podamos ser compatibles en la mayoria de 
buscadores.
 -----------------------------------
•BABLE: Nos permite compilar nuestro codigo a uno nuevo el cual
sera compatible con muchos mas buscadores. https://babeljs.io/

antes: Crear carpeta output y src (src= donde creamos nuestro proyecto)
1_ Instalar babel en nuestro proyecto desde la pagina:
npm install --save-dev @babel/preset-flow

2_ En el Json, en script agregar un script:
"build": "babel src -d output"
"build": "babel src -d output --watch" (hay un observador y transpila en
    tiempo real, como en sass ;) )

3_ Crear archivo babel.config.json

4_ agregar al archivo babel:
{ "presets": ["@babel/preset-env"] }

5_ Ejecutar npm run build y se transpila la carpeta src a output.

 -----------------------------------

3_ --- WEBPACK ---
Nos ayuda a mantener nuestro proyecto ordenado
Minifica nuestro codigo para produccion

4_ --- TRANSPILING ---
Convertir un codigo en uno que sea legible por mas browsers.

5_ ----- JSX -----
Lenjuage similar a html el cual se transpila a html
Nos permite mezclar html + js


-------------------------------
import React from "react";
import "./styles.css"

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Hola Mundo</h1>
            </div>
        )
    }
}

export default App;


----------------------------------
COMO UTILIZAR CSS

utilizamos className ="" en el archivo jsx y en el archivo css 
se escribe igual

JSS ejemplo:
Consta de un objeto llamado style:
Se utiliza camelCase y no los - ("-"). ej => font-size = fontSize:


const styles = {
    heading: {
        color: "red",
        fontSize: 24,
    },
    tres: {
        backgroundColor: "blue"
    }
}

<h1 style={styles.heading}>Aprendiendo JSX</h1>
<p style={styles.tres}>Hola</p>
<p style={{color: "blue", fontSize: 2rem}}>Style desde la misma linea</p>


-------------------------------
FRAGMENT
Debemos colocar los elementos dentro de un div o un fragment para
que el codigo funcione.
EJ de fragment:


    <>
        <h1>pepe</h1>
        <h2>Hola</h2>
    </>

    <div>
        <h1>pepe</h1>
        <h2>Hola</h2>
    </div><
*/





/* 
----- CLASE 3: Componentes I -----
#levantar la app = npm run start
# Para testing:
Jest + React-Testing-Library
Jest + Enzyme


1: Limpiamos proyecto:
rm: nombres de los archivos a eliminar

logo.svg
setupTests.js
app.test
reportWebVitals.js

2: Eliminar:


#Components
Crear una carpeta en src para los componentes, llamada components

Crear componente tipo funcion = rafce + tab

#Instalar dependencias
•Material UI: Libreria de CSS que nos provee componentes, comando de instalacion en inicio de la pagina.
*/

/*
----- CLASE 4: Componentes II -----

•Instalar Dependencias:
Siempre al descargar un proyecto de react debemos instalar las 
dependencias, con npm install.

componentes de clase: Eran los unicos que podian tener un state (estado)

Ciclos de Vida:
***** Investigar xD ******









*/
