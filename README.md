# CreaTuLanding1+Rodriguez

Entrega 1 - CoderHouse React

## Componentes Implementados

- **NavBar**: Barra de navegación con logo, enlaces y CartWidget
- **CartWidget**: Widget del carrito de compras
- **ItemListContainer**: Contenedor que recibe props para mostrar mensajes

## Estructura

```
src/
├── components/
│   ├── NavBar.js
│   ├── CartWidget.js
│   └── ItemListContainer.js
└── App.js
```

## Uso de Props

El componente `ItemListContainer` recibe la prop `greeting`:

```jsx
<ItemListContainer greeting="¡Bienvenidos a Rodriguez Store!" />
```

## Instalación

```bash
npm install
npm start
```