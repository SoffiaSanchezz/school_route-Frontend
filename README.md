# 🚍 School Route System - Logistics Platform

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-Backend-000000.svg)](https://expressjs.com/)

Una plataforma logística inteligente de nivel empresarial para la gestión integral de rutas escolares, diseñada con una arquitectura escalable y una interfaz de usuario premium tipo SaaS.

## 🚀 Visión General

El **School Route System** no es solo un gestor de rutas, es un motor logístico que maneja la jerarquía compleja de **Ruta → Horarios → Colegios → Estudiantes**. Permite optimizar la operación diaria de transporte para múltiples centros educativos de forma simultánea y en tiempo real.

### ✨ Características Principales

- **Dashboard Logístico:** KPIs en tiempo real, ocupación de flota y avisos operativos.
- **Timeline Futurista:** Visualización interactiva de paradas (estudiantes) y llegadas (colegios).
- **Gestión Multi-Colegio:** Soporte para recoger estudiantes de diferentes instituciones en una misma ruta.
- **Planificación de Horarios:** Sistema inteligente de jornadas (Mañana/Tarde) y tipos de operación (Recogida/Entrega).
- **Control de Flota:** Monitoreo técnico de vehículos, capacidad, combustible y mantenimiento.
- **UI Premium:** Interfaz oscura moderna con efectos de *Glassmorphism*, inspirada en estándares de la industria como Linear y Vercel.

## 🏗️ Arquitectura Técnica

### Frontend (`/school-route-system`)
- **Core:** React 19 + Vite.
- **Arquitectura:** Clean Architecture con separación estricta de capas (`app`, `core`, `infrastructure`, `modules`, `shared`).
- **Estado:** Zustand para gestión de sesión y roles.
- **Estilos:** Tailwind CSS v4 + Framer Motion para animaciones suaves.
- **Validación:** React Hook Form + Zod.

### Backend (`/route-backend`)
- **Motor:** Node.js + Express.
- **Base de Datos:** MongoDB (compatible con arquitectura de repositorio).
- **Seguridad:** Helmet, CORS y manejo centralizado de errores.
- **Rutas:** Estructura modular bajo `/api/v1`.

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js (Versión recomendada: 20+)
- npm o yarn

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   ```

2. **Configurar el Frontend:**
   ```bash
   cd school-route-system
   npm install
   npm run dev
   ```
   *Acceso: `http://localhost:5173`*

3. **Configurar el Backend:**
   ```bash
   cd ../route-backend
   npm install
   # Configura tu .env basado en la estructura del proyecto
   npm run dev
   ```
   *Acceso: `http://localhost:3000`*

## 📁 Estructura del Proyecto

```text
src/
├── app/            # Proveedores, Store global, Router
├── core/           # Constantes, Helpers, Utils (cn)
├── infrastructure/ # API clients, Repositorios
├── modules/        # Feature modules (Dashboard, Schools, Students, etc.)
│   └── [module]/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── store/
├── shared/         # UI Library atómica, Layouts (Sidebar, Navbar)
└── index.css       # Configuración de Tema Tailwind v4
```

## 🔐 Seguridad y Estándares

El proyecto sigue rigurosos estándares de seguridad:
- Archivos `.env` protegidos vía `.gitignore`.
- Prevención de fugas de memoria y secrets.
- Arquitectura desacoplada para facilitar auditorías y escalabilidad.

---

Desarrollado con enfoque en la excelencia técnica y operativa. 🚍✨
