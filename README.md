# 🚗 Car Market Platform

## 📂 Estructura del Proyecto

```
├── README.md
├── apps/
│   ├── api/
│   │   ├── src/
│   │   │   ├── common/
│   │   │   │   ├── decorators/
│   │   │   │   ├── filters/
│   │   │   │   ├── guards/
│   │   │   │   ├── interceptors/
│   │   │   │   ├── middleware/
│   │   │   │   ├── pipes/
│   │   │   │   └── utils/
│   │   │   ├── config/
│   │   │   ├── database/
│   │   │   │   ├── migrations/
│   │   │   │   └── seeds/
│   │   │   └── modules/
│   │   │       ├── auth/
│   │   │       ├── dealerships/
│   │   │       ├── financing/
│   │   │       ├── listings/
│   │   │       ├── notifications/
│   │   │       ├── reports/
│   │   │       ├── uploads/
│   │   │       ├── users/
│   │   │       ├── vehicles/
│   │   │       └── workshops/
│   │   └── test/
│   ├── mobile/
│   │   ├── android/
│   │   ├── ios/
│   │   └── src/
│   │       ├── assets/
│   │       ├── components/
│   │       ├── context/
│   │       ├── navigation/
│   │       ├── screens/
│   │       ├── services/
│   │       ├── theme/
│   │       └── utils/
│   └── web/
│       ├── public/
│       └── src/
│           ├── app/
│           ├── assets/
│           ├── components/
│           │   ├── admin/
│           │   ├── auth/
│           │   ├── financing/
│           │   ├── layout/
│           │   ├── ui/
│           │   ├── user/
│           │   └── vehicles/
│           ├── lib/
│           │   ├── api/
│           │   ├── config/
│           │   └── utils/
│           └── styles/
├── docs/
│   ├── api/
│   ├── architecture/
│   ├── decisions/
│   └── endpoints/
├── package.json
├── packages/
│   ├── config/
│   │   ├── eslint/
│   │   ├── jest/
│   │   ├── prettier/
│   │   └── typescript/
│   ├── types/
│   │   └── src/
│   │       ├── api/
│   │       ├── enums/
│   │       ├── interfaces/
│   │       └── models/
│   ├── ui/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── icons/
│   │   │   └── theme/
│   │   └── stories/
│   └── utils/
│       ├── src/
│       │   ├── api/
│       │   ├── date/
│       │   ├── error-handling/
│       │   ├── formatters/
│       │   ├── storage/
│       │   └── validators/
│       └── test/
└── scripts/
    └── update-readme.js
```

*Última actualización: 7 jun 2025, 6:23 p. m. (2c1d8de)*
## 📦 Estructura del Proyecto

```
car-market/
├── .github/                 # GitHub Actions workflows
├── apps/
│   ├── api/                 # Backend API (NestJS)
│   ├── web/                 # Web frontend (SvelteKit)
│   └── mobile/              # Mobile app (React Native)
├── packages/                # Código compartido
│   ├── ui/                  # Componentes UI compartidos
│   ├── types/               # Tipos TypeScript compartidos
│   ├── config/              # Configuraciones compartidas
│   └── utils/               # Utilidades compartidas
└── docs/                    # Documentación
```

## 🚀 Comenzando

### Requisitos Previos

- Node.js 18+
- npm 9+ o yarn 1.22+
- Docker (opcional, para desarrollo con contenedores)
- PostgreSQL 14+

### Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/car-market.git
   cd car-market
   ```

2. Instalar dependencias:
   ```bash
   # Instalar dependencias del workspace
   npm install
   
   # Instalar dependencias específicas de cada aplicación
   cd apps/api && npm install
   cd ../web && npm install
   cd ../mobile && npm install
   ```

3. Configuración del entorno:
   ```bash
   # Copiar archivos de ejemplo de entorno
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.example apps/web/.env
   cp apps/mobile/.env.example apps/mobile/.env
   ```

4. Iniciar servicios (desarrollo):
   ```bash
   # Iniciar API
   npm run start:dev --workspace=api
   
   # Iniciar Web
   npm run dev --workspace=web
   
   # Iniciar Mobile (requiere emulador/dispositivo)
   npm run android --workspace=mobile
   # o
   npm run ios --workspace=mobile
   ```

## 🎯 Objetivo General
Diseñar y desarrollar una plataforma integral (web + app móvil) que permita la publicación, compra, financiación, gestión y servicio postventa de vehículos nuevos y usados, conectando compradores, vendedores, concesionarias, talleres, financieras y organismos estatales.

## 🚀 Características Principales

### 1. Marketplace de Vehículos
- Publicación de vehículos con fotos y ficha técnica
- Búsqueda y filtros avanzados
- Comparación de vehículos
- Historial detallado del auto
- Sistema de favoritos y alertas
- Chat en tiempo real

### 2. Gestión de Stock
- Herramientas completas de gestión de inventario
- Importación masiva de vehículos
- Control de reservas y disponibilidad
- Panel de estadísticas

### 3. Financiación Integral
- Simulador de cuotas interactivo
- Integración con múltiples financieras
- Proceso de preaprobación
- Documentación digital

### 4. Postventa y Garantías
- Gestión de garantías
- Sistema de reclamos
- Programación de revisiones
- Historial de servicios

## 🛠️ Tecnologías

### Frontend
- **Web**: SvelteKit
- **Móvil**: Svelte Native / React Native

### Backend
- Node.js + NestJS
- PostgreSQL (Base de datos principal)

### Integraciones
- AFIP
- MercadoPago
- DNRPA
- Servicios de scoring crediticio

## 🔒 Seguridad
- Autenticación JWT
- Cifrado de extremo a extremo
- Protección contra CSRF/XSS
- Cumplimiento RGPD/LPDP Argentina

## 📊 Analítica e IA
- Dashboard de métricas en tiempo real
- Sistema de recomendaciones
- Chatbot asistente
- Detección de fraude
- Análisis predictivo

## 🚀 Despliegue
- Infraestructura en la nube
- CI/CD automatizado
- Contenedores Docker
- Sistema de respaldo
- Monitoreo 24/7

## 🎨 UX/UI
- Diseño mobile-first
- Flujos de usuario optimizados
- Modo oscuro
- Páginas públicas con información relevante

## 📈 Escalabilidad
- Arquitectura multitenant
- Caché con Redis
- Almacenamiento en la nube con Cloudinary
- Red de entrega de contenido (CDN)
- Balanceo de carga

## 🧪 Testing

Ejecutar los tests:

```bash
# Ejecutar todos los tests
npm test

# Ejecutar tests de API
npm test --workspace=api

# Ejecutar tests de Web
npm test --workspace=web
```

## 🤝 Contribución

1. Hacer un Fork del proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Hacer commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Hacer push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  Hecho con ❤️ por el equipo de Car Market Platform
</div>