# Trabajo Práctico Nº1: Introducción a Git y GitHub

Este repositorio contiene el desarrollo del Trabajo Práctico Nº1  **"Introducción a Git y GitHub"**.

## Objetivos

- Comprender el funcionamiento básico de Git como sistema de control de versiones.
- Aprender a utilizar GitHub para alojar y colaborar en proyectos.
- Familiarizarse con comandos esenciales de Git.
- Crear y gestionar repositorios remotos.
- Realizar commits, push, pull y resolución de conflictos.

## Contenido

El repositorio incluye:
- Este archivo `README.md` con la descripción general del trabajo.
- Un archivo de texto de ejemplo llamado `ejemplo.txt`.

## Requisitos

- Tener instalado Git.
- Contar con una cuenta en GitHub.
- Haber configurado correctamente el nombre de usuario y correo con `git config`.

## Autor

- Nombre: Ulises Daniel Gordillo
- Año: 2025


# Trabajo Práctico Nº2: Node.js y uso de módulos nativos

Este repositorio contiene el desarrollo del Trabajo Práctico Nº2 de la materia [Nombre de la materia], enfocado en el uso del entorno de ejecución **Node.js** y sus módulos nativos principales.

## 🧠 Objetivos

- Comprender el funcionamiento básico del entorno Node.js.
- Aprender a utilizar módulos nativos para trabajar con el sistema operativo, archivos, rutas, eventos y servidores HTTP.
- Desarrollar scripts simples que empleen cada uno de los módulos estudiados.

## 📦 Módulos utilizados

### 1. `os`
Permite obtener información del sistema operativo, como:
- Arquitectura (`os.arch()`)
- Plataforma (`os.platform()`)
- Memoria total y libre (`os.totalmem()`, `os.freemem()`)
- Información de CPU (`os.cpus()`)

### 2. `fs`
Módulo para trabajar con el sistema de archivos:
- Lectura y escritura de archivos (`fs.readFile`, `fs.writeFile`)
- Renombrado de archivos (`fs.rename`)
- Funciona de manera asíncrona con callbacks

### 3. `path`
Permite manipular rutas de archivos y directorios de manera multiplataforma:
- Unir rutas (`path.join`)
- Obtener nombre del archivo o extensión (`path.basename`, `path.extname`)

### 4. `http`
Se utiliza para crear servidores web básicos:
- Crear servidor con `http.createServer`
- Manejar solicitudes y respuestas
- Enviar mensajes como `¡Hola, Mundo!`

### 5. `events`
Módulo para trabajar con el sistema de eventos de Node.js:
- Crear emisores de eventos personalizados con `EventEmitter`
- Escuchar y emitir eventos definidos por el desarrollador

## 🗂️ Estructura del proyecto

