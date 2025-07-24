# Backend de Rastreador de Gastos Personales

Este proyecto es una aplicación backend para gestionar transacciones financieras personales, construida con **Express.js**, **MongoDB** y el patrón arquitectónico **Domain-Driven Design (DDD)**. Proporciona APIs RESTful para crear, actualizar, obtener y eliminar transacciones.

## Tabla de Contenidos
1. [Descripción de la Arquitectura](#descripción-de-la-arquitectura)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Prerrequisitos](#prerrequisitos)
4. [Instalación](#instalación)
5. [Variables de Entorno](#variables-de-entorno)
6. [Endpoints de la API](#endpoints-de-la-api)
7. [Tecnologías Utilizadas](#tecnologías-utilizadas)
8. [Uso](#uso)
9. [Contribuir](#contribuir)
10. [Autor](#Autor)

## Descripción de la Arquitectura
La aplicación sigue los principios de **Domain-Driven Design (DDD)**, organizando el código en capas: **Dominio**, **Aplicación**, **Infraestructura** e **Interfaces**. Esta separación garantiza modularidad, mantenibilidad y escalabilidad.

- **Dominio**: Define la lógica de negocio principal y las entidades (por ejemplo, la clase `Transaction`).
- **Aplicación**: Contiene la lógica de servicios que orquesta las interacciones entre el dominio y la infraestructura.
- **Infraestructura**: Gestiona la persistencia de datos y servicios externos (por ejemplo, repositorio de MongoDB).
- **Interfaces**: Administra las rutas HTTP y el manejo de solicitudes/respuestas usando Express.js.

## Estructura del Proyecto
```
personal-expense-tracker/
├── src/
│   ├── application/
│   │   └── transaction/
│   │       └── transaction.js        # Capa de servicio para operaciones de transacciones
│   ├── config/
│   │   └── db.js                    # Configuración de conexión a MongoDB
│   ├── domain/
│   │   └── transaction/
│   │       └── transaction.js        # Entidad de transacción con reglas de negocio
│   ├── infrastructure/
│   │   └── transaction/
│   │       └── transactionRepository.js  # Repositorio de MongoDB para operaciones de datos
│   ├── interfaces/
│   │   └── transaction/
│   │       └── transactionRouter.js  # Rutas de Express para las APIs de transacciones
│   └── index.js                     # Punto de entrada de la aplicación
├── .env                             # Variables de entorno
├── package.json                     # Dependencias y scripts del proyecto
└── README.md                        # Documentación del proyecto
```

## Prerrequisitos
- **Node.js** (>= 18.x)
- **MongoDB** (instancia local o en la nube)
- **npm** o **yarn**
- Un archivo `.env` con las variables de entorno requeridas (ver [Variables de Entorno](#variables-de-entorno))

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd personal-expense-tracker
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` en el directorio raíz con las variables de entorno necesarias (ver más abajo).
4. Inicia el servidor de MongoDB (si usas una instancia local).
5. Ejecuta la aplicación:
   ```bash
   node index.js
   ```

## Variables de Entorno
Crea un archivo `.env` en el directorio raíz con las siguientes variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/personal_expense_db
```

- **PORT**: El puerto en el que se ejecuta el servidor Express (predeterminado: 5000).
- **MONGO_URI**: La cadena de conexión a MongoDB (actualiza con los detalles de tu instancia de MongoDB).

## Endpoints de la API
La API proporciona los siguientes endpoints bajo la ruta base `/api/transactions`:

| Método | Endpoint            | Descripción                          | Cuerpo/Parámetros de la Solicitud       |
|--------|---------------------|--------------------------------------|----------------------------------------|
| POST   | `/`                 | Crear una nueva transacción          | `{ amount, description, category, type, date }` |
| PUT    | `/update/:id`       | Actualizar una transacción por ID    | `id` (parámetro), `{ amount, description, category, type, date }` (cuerpo) |
| GET    | `/`                 | Obtener todas las transacciones      | Ninguno                                |
| DELETE | `/:id`              | Eliminar una transacción por ID      | `id` (parámetro)                       |

### Ejemplos de Solicitudes
1. **Crear una Transacción**:
   ```bash
   curl -X POST http://localhost:5000/api/transactions \
   -H "Content-Type: application/json" \
   -d '{"amount": 100, "description": "Compra de supermercado", "category": "Alimentos", "type": "expense"}'
   ```
2. **Obtener Todas las Transacciones**:
   ```bash
   curl http://localhost:5000/api/transactions
   ```

## Tecnologías Utilizadas
- **Node.js**: Entorno de ejecución de JavaScript para el backend.
- **Express.js**: Framework web para construir APIs RESTful.
- **MongoDB**: Base de datos NoSQL para almacenar transacciones.
- **Mongoose**: ODM para MongoDB para definir esquemas e interactuar con la base de datos.
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
- **cors**: Habilita el uso compartido de recursos entre orígenes (CORS).

## Uso
1. Asegúrate de que MongoDB esté en ejecución (localmente o mediante un proveedor en la nube como MongoDB Atlas).
2. Configura el archivo `.env` con la cadena de conexión correcta a MongoDB.
3. Inicia el servidor:
   ```bash
   node index.js
   ```
4. El servidor se ejecutará en `http://localhost:5000` (o el puerto especificado en `.env`).
5. Usa herramientas como Postman o curl para interactuar con los endpoints de la API.

## Contribuir
¡Las contribuciones son bienvenidas! Para contribuir:
1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/tu-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m "Añade tu funcionalidad"`).
4. Sube los cambios a la rama (`git push origin feature/tu-funcionalidad`).
5. Abre un pull request.

## Autor
Alan Edu Hernández M.
alaneduh231@gmail.com