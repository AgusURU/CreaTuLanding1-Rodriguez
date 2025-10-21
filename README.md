# CreaTuLanding - Rodriguez

Este es el proyecto de la primera entrega del curso de React - CoderHouse.

## Descripción

Landing page de e-commerce construida con React que incluye los siguientes componentes:

- **NavBar**: Barra de navegación con logo, enlaces de navegación y widget de carrito
- **CartWidget**: Widget del carrito de compras que se muestra en la barra de navegación
- **ItemListContainer**: Contenedor principal que recibe props para mostrar un mensaje de bienvenida

## Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.js          # Componente de navegación principal
│   ├── CartWidget.js      # Widget del carrito de compras
│   └── ItemListContainer.js # Contenedor de productos con props
├── App.js                 # Componente principal de la aplicación
├── App.css               # Estilos principales
├── index.js              # Punto de entrada de React
└── index.css             # Estilos globales
```

## Características Implementadas

### ✅ NavBar
- Logo de la tienda "Rodriguez Store"
- Enlaces de navegación (Inicio, Productos, Categorías, Contacto)  
- Integración del CartWidget
- Diseño responsivo

### ✅ CartWidget
- Ícono de carrito de compras (🛒)
- Contador de productos (por ahora muestra 0)
- Efectos hover

### ✅ ItemListContainer
- **Utiliza props** para recibir el mensaje de bienvenida
- Mensaje personalizable desde el componente padre (App)
- Preparado para mostrar el catálogo de productos en futuras entregas

### ✅ Organización de Componentes
- NavBar e ItemListContainer son renderizados en App
- CartWidget es renderizado dentro de NavBar
- Uso correcto de props en ItemListContainer

## Instalación y Uso

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar el servidor de desarrollo:
   ```bash
   npm start
   ```
4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Tecnologías Utilizadas

- React 18.2.0
- CSS3 (estilos personalizados)
- Create React App

## Props Implementadas

El componente `ItemListContainer` recibe la prop `greeting` que contiene el mensaje de bienvenida:

```jsx
<ItemListContainer greeting="¡Bienvenidos a Rodriguez Store!" />
```

## Próximas Funcionalidades

- Catálogo de productos
- Funcionalidad del carrito de compras
- Sistema de categorías
- Páginas de producto individual

---

**Entrega 1 - CoderHouse React**  
**Alumno**: Rodriguez  
**Proyecto**: CreaTuLanding+Rodriguez