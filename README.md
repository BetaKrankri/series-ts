# Series Calculator

## Descripción del Proyecto

El proyecto 'Series Calculator' es una solución de un ejercicio proporcionado en una entrevista de trabajo para un puesto en Sngular. Está desarrollado utilizando React, Vite, Tailwind CSS y Vitest.

### Objetivos

Dadas las siguientes series numericas:

- Numeros Triangulares
- Serie de Fibonacci
- Numeros Primos

Desarrollar una clase con un método que entrege el termino n de la serie:

```math
 serie(n) = (primo(n+3) * triangular(n-1)) / fibonacci(n-2)
```

Realizar pruebas unitarias al método de la serie numérica usando los números naturales como entrada (10 casos de prueba en total).

Desarrollar 3 componentes de la tecnología preferida (React, Angular, Vue).

1. Un componente visual que mnuestra un formulario para introducir el número n
2. Un componente no-visual donde se calcule el tèrmino n de la serie
3. Un componente visual que muestra el resultado del cálculo

## Instalación

Sigue los pasos a continuación para instalar y ejecutar el proyecto en tu entorno local:

1. Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [https://nodejs.org](https://nodejs.org) e instalarlo siguiendo las instrucciones correspondientes a tu sistema operativo.

2. Clona el repositorio del proyecto desde GitHub:

   ```bash
   git clone https://github.com/BetaKrankri/series-ts.git
   ```

3. Navega al directorio del proyecto:

   ```bash
   cd series-ts
   ```

4. Instala las dependencias del proyecto utilizando npm o yarn:

   ```bash
   npm install
   ```

   o

   ```bash
   yarn
   ```

5. Una vez que se hayan instalado las dependencias, puedes ejecutar el proyecto en modo de desarrollo:

   ```bash
   npm run dev
   ```

   o

   ```bash
   yarn dev
   ```

   Esto iniciará el servidor de desarrollo de Vite y podrás acceder al proyecto en tu navegador a través del link que aparece en la consola.

## Pruebas

El proyecto utiliza Vitest para ejecutar las pruebas. A continuación, se muestran los pasos para ejecutar las pruebas:

1. Asegúrate de que las dependencias del proyecto estén instaladas siguiendo los pasos anteriores.

2. Ejecuta el siguiente comando para ejecutar las pruebas:

   ```bash
   npm run test
   ```

   o

   ```bash
   yarn test
   ```

   Esto ejecutará las pruebas y mostrará los resultados en la consola.
