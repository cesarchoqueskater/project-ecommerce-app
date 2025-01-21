#  Maytu - Carrito de Compras CoderHouse

Este proyecto es un **carrito de compras** desarrollado en **React.js** para la venta de imagenes de artículos relacionados con museos. Permite explorar artículos, añadirlos al carrito, gestionar la cantidad de productos y realizar el proceso de compra.

---

## 🖥️ Descripción

El objetivo principal de este proyecto es implementar un sistema funcional de carrito de compras, utilizando tecnologías modernas como React.js y  Firebase para la base de datos.

---

## 📂 Estructura del Proyecto
    ```css
    project-ecommerce-app-reactjs/
    ├── public/                 # Archivos públicos
    ├── src/                    # Código fuente principal
    │   ├── assets/             # Recursos estáticos (imágenes, íconos, etc.)
    │   ├── components/         # Componentes reutilizables de React
    │   │   ├── Body.jsx
    │   │   ├── Cart.jsx
    │   │   ├── CartItem.jsx
    │   │   ├── CartItems.jsx
    │   │   ├── CartWidget.jsx
    │   │   ├── Item.jsx
    │   │   ├── ItemCount.jsx
    │   │   ├── ItemDetailContainer.jsx
    │   │   ├── ItemListContainer.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── OrderCheckout.jsx
    │   ├── context/            # Contexto de React para el carrito
    │   │   ├── cartContext.js
    │   │   ├── CartProvider.js
    │   ├── firebase/           # Configuración de Firebase
    │   │   ├── config.js
    │   │   ├── db.js
    │   ├── App.jsx             # Componente principal de la aplicación
    │   ├── index.jsx           # Punto de entrada de la aplicación
    ├── package.json            # Dependencias del proyecto
    ├── .gitignore              # Archivos y carpetas ignoradas por Git
    ├── README.md               # Documentación del proyecto


---

## 🛠️ Tecnologías Utilizadas

- **React.js**: Biblioteca para construir la interfaz de usuario.
- **Vite**: Herramienta de desarrollo para React.
- **Styled Components**: Estilización basada en componentes.
- **Firebase**: Base de datos y backend en tiempo real.
- **React Router**: Manejo de rutas para navegación entre vistas.

---

## ⚙️ Instalación y Uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/cesarchoqueskater/project-ecommerce-app-reactjs.git


2.	Accede al directorio del proyecto:
    ```bash
    cd project-ecommerce-app-reactjs

3.	Instala las dependencias:
    ```bash
    npm install

4.	Configura Firebase en el archivo src/firebase/config.js.

5.	Inicia el servidor de desarrollo:
    ```bash
    npm run dev

6.	Abre el navegador  con la ip que se muestra en la consola

✨ Características

- **Explorar Artículos**: Navega por una lista de artículos relacionados con museos.
- **Agregar al Carrito**: Agrega productos al carrito y actualiza sus cantidades.
- **Gestión de Carrito**: Elimina productos y ve su detalle
- **Orden de Compra**: Finaliza la compra y obten un codigo dde Cloud Store Firebase.

🚀 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Vite.
- `npm run build`: Genera una versión optimizada para producción.
- `npm run lint`: Ejecuta ESLint para analizar errores en el código.

🧑‍💻 Dependencias Principales

- **react**: ^17.0.0 || ^18.0.0
- **react-dom**: ^17.0.0 || ^18.0.0
- **react-router**: ^7.0.2
- **styled-components**: ^6.1.13
- **firebase**: ^11.2.0

⚙️ Dependencias Principales

1. Ve a la [Consola de Firebase](https://console.firebase.google.com/) e inicia sesión con tu cuenta de Google.

2. Crea un nuevo proyecto o utiliza uno existente.

3. En la sección **Configuración del Proyecto**, selecciona **Agregar aplicación web**.

4. Copia las credenciales que se generen, que se verán similares a esto:

   ```javascript
   const firebaseConfig = {
       apiKey: "TU_API_KEY",
       authDomain: "TU_AUTH_DOMAIN",
       projectId: "TU_PROJECT_ID",
       storageBucket: "TU_STORAGE_BUCKET",
       messagingSenderId: "TU_MESSAGING_SENDER_ID",
       appId: "TU_APP_ID",
       measurementId: "TU_MEASUREMENT_ID"
   };