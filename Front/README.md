# Frontend del Rastreador de Gastos Personales

Este proyecto es el frontend de una aplicación para gestionar transacciones financieras personales, construido con **React**, **Redux Toolkit** y **Vite**. Proporciona una interfaz de usuario para crear, actualizar, ver y eliminar transacciones, integrándose con un backend Express.js.

## Tabla de Contenidos
1. [Descripción de la Arquitectura](#descripción-de-la-arquitectura)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Prerrequisitos](#prerrequisitos)
4. [Instalación](#instalación)
5. [Uso](#uso)
6. [Tecnologías Utilizadas](#tecnologías-utilizadas)
7. [Contribuir](#contribuir)
8. [Autor](#Autor)

## Descripción de la Arquitectura
El frontend utiliza **Redux Toolkit** para la gestión del estado global, con un enfoque en la modularidad y la separación de preocupaciones. La estructura incluye:

- **Store**: Configuración central del estado global con reducers para transacciones.
- **Componentes**: Reutilizables para formularios y listas de transacciones.
- **Features/Transactions**: Lógica específica de transacciones (slices y thunks).
- **Services**: Capa de comunicación con el backend mediante API.

## Estructura del Proyecto
```
Front/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── assets/
│   │   ├── images/
│   │   ├── styles/
│   │   └── videos/
│   ├── components/
│   │   ├── TransactionForm.jsx
│   │   └── TransactionList.jsx
│   ├── features/
│   │   └── transactions/
│   │       ├── transactionSlice.js
│   │       └── transactionThunks.js
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── .gitignore
├── .eslintrc.json
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Prerrequisitos
- **Node.js** (>= 18.x)
- **npm** o **yarn**
- Un backend funcional en `http://localhost:5000/api` (como el descrito previamente)

## Instalación
1. Navega al directorio `Front`:
   ```bash
   cd Front
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Asegúrate de que el backend esté en ejecución.
4. Inicia el proyecto:
   ```bash
   npm run dev
   ```

## Uso
1. Inicia el servidor backend en `http://localhost:5000`.
2. Ejecuta el frontend con `npm run dev`.
3. Abre `http://localhost:5173` (o el puerto asignado por Vite) en tu navegador.
4. Usa la interfaz para gestionar transacciones (agregar, editar, eliminar, listar).

## Tecnologías Utilizadas
- **React**: Biblioteca para construir interfaces de usuario.
- **Redux Toolkit**: Gestión del estado global.
- **Vite**: Herramienta de desarrollo rápido.
- **Axios**: Cliente HTTP para solicitudes al backend.
- **CSS**: Estilos globales en `assets/styles/styles.css`.

## Contribuir
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/tu-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añade tu funcionalidad"`).
4. Sube los cambios (`git push origin feature/tu-funcionalidad`).
5. Abre un pull request.

## Autor
Alan Edu Hernández M.
alaneduh231@gmail.com