# Proyecto Personal Expense Tracker

Este proyecto es una aplicación para gestionar transacciones financieras personales, dividida en un **backend** y un **frontend**. Está diseñado para proporcionar una solución práctica y escalable para rastrear ingresos y gastos.

## Estructura del Proyecto
```
PERSONAL-EXPENSE-TRACKER/
├── Back/              # Contiene el backend del proyecto
├── Front/             # Contiene el frontend del proyecto
└── README.md          # Documentación general del proyecto
```

## Descripción General
- **Backend**: Implementado con **Express.js** y **MongoDB**, utiliza el patrón **Domain-Driven Design (DDD)** para gestionar la lógica de negocio y las operaciones de datos. La documentación específica está disponible dentro de la carpeta `Back`.
- **Frontend**: Desarrollado con **React**, **Redux Toolkit** y **Vite**, ofrece una interfaz de usuario intuitiva. La documentación específica está disponible dentro de la carpeta `Front`.

## Requisitos
- **Node.js** (>= 18.x)
- **npm** o **yarn**
- **MongoDB** (instancia local o en la nube)

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd PERSONAL-EXPENSE-TRACKER
   ```
2. Sigue las instrucciones de instalación dentro de las carpetas `Back` y `Front`:
   - Para el backend: `cd Back` y ejecuta `npm install`.
   - Para el frontend: `cd Front` y ejecuta `npm install`.
3. Configura las variables de entorno en `Back/.env` (detalles en `Back/README.md`).
4. Inicia MongoDB si usas una instancia local.

## Ejecución
1. Inicia el backend:
   ```bash
   cd Back
   node index.js
   ```
2. Inicia el frontend en una terminal separada:
   ```bash
   cd Front
   npm run dev
   ```
3. Accede al frontend en `http://localhost:5173` (o el puerto asignado por Vite) y verifica la conexión con el backend en `http://localhost:5000`.

## Contribución
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/tu-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añade tu funcionalidad"`).
4. Sube los cambios (`git push origin feature/tu-funcionalidad`).
5. Abre un pull request.

## Autor
Alan Edu Hernández M.
alaneduh231@gmail.com
