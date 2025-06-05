# ByRosy - Diseño de Cocinas y Espacios

![ByRosy Logo](public/R.svg)

## 📋 Descripción

ByRosy es una landing page profesional para un negocio especializado en diseño de cocinas de alta gama dirigido por Rosy Santisteban. Este sitio web está diseñado para mostrar la experiencia de más de 30 años de Rosy en la creación de cocinas personalizadas que combinan elegancia, funcionalidad y diseño exclusivo.

## ✨ Características

- **Diseño Elegante**: Interfaz minimalista con estética sofisticada en tonos dorados y neutros
- **Experiencia Inmersiva**: Secciones con parallax y transiciones suaves
- **Responsive**: Adaptable a todos los dispositivos (móvil, tablet, escritorio)
- **Alto Rendimiento**: Optimizado para carga rápida y SEO
- **Formulario de Contacto**: Integración con EmailJS para envío de mensajes directos
- **Galería de Proyectos**: Muestra de trabajos destacados con diseño visual atractivo
- **Integración con Redes Sociales**: Enlaces a Instagram, WhatsApp y Facebook

## 🚀 Secciones Principales

1. **Hero**: Presentación elegante con imagen de fondo y llamada a la acción
2. **About**: Historia y experiencia de Rosy Santisteban
3. **Servicios**: Presentación de los 5 valores diferenciadores (Conexión y Entendimiento, Diseño a Medida, Selección de Materiales, Estética que trasciende, Cercanía en todo momento)
4. **Proyectos**: Galería de cocinas y espacios diseñados previamente
5. **Contacto**: Formulario de contacto con integración de EmailJS y enlaces a redes sociales

## 💻 Tecnologías Utilizadas

- **Framework**: [Astro](https://astro.build/) con componentes React
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Formularios**: [EmailJS](https://www.emailjs.com/)
- **Tipografías**: Playfair Display, Tempting, Inter
- **Despliegue**: Servicio de hosting a elección del cliente

## 📧 Funcionalidad de Contacto

El sitio cuenta con un formulario de contacto completamente funcional que:
- Valida datos del usuario
- Envía correos electrónicos directamente a Rosy
- Proporciona confirmación inmediata al usuario
- Captura información clave: nombre, correo, teléfono y detalles del proyecto

## 🛠️ Instalación y Uso

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/byrosy.git
```

2. Instalar dependencias:
```bash
cd byrosy
npm install
```

3. Iniciar servidor de desarrollo:
```bash
npm run dev
```

4. Construir para producción:
```bash
npm run build
```

## 📝 Configuración del Email

Para configurar el servicio de correo electrónico:

1. Crear una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar un servicio de email y una plantilla
3. Obtener las credenciales (service_id, template_id, user_id)
4. La integración ya está implementada en el componente Contact.astro

## 👩‍💼 Acerca de Rosy Santisteban

Rosy cuenta con más de 30 años de experiencia en el diseño de cocinas, closets, baños y espacios de vida. Su enfoque único combina la elegancia europea con la calidez mexicana, creando espacios que no solo son hermosos, sino también perfectamente adaptados al estilo de vida de cada familia.

---

Desarrollado con ❤️ para Rosy Santisteban

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).


