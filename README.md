# Marketplace de Cartas

Este es un marketplace donde los usuarios pueden ver, comprar y vender cartas de Pokémon, Yu-Gi-Oh! y Magic. Está desarrollado con Next.js, TypeScript, Tailwind CSS y Supabase.

## 🚀 Tecnologías utilizadas

- Next.js 15
- TypeScript
- Tailwind CSS
- Supabase (Base de datos y autenticación)
- Vercel (opcional para despliegue)

---

## 🧑‍💻 Requisitos previos

Asegúrate de tener instalado:

- Node.js v18 o superior
- npm o yarn
- Git
- Cuenta en [Supabase](https://supabase.com)

---

## 📦 Instalación

Clona el repositorio:

```bash
git clone https://github.com/TU_USUARIO/marketplace.git
cd marketplace
```

Instala las dependencias:

```bash
npm install
# o
yarn install
```

---

## ⚙️ Configuración

1. Crea un archivo `.env.local` y agrega tus variables de entorno:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_clave_anonima
```

2. Asegúrate de que tu Supabase tenga las siguientes tablas:

- `users`
- `cards`
- `listings`

> Puedes revisar el esquema en el archivo `supabase/schema.sql` si está incluido.

---

## ▶️ Cómo iniciar el proyecto

Inicia el entorno de desarrollo con:

```bash
npm run dev
# o
yarn dev
```

Esto abrirá la app en [http://localhost:3000](http://localhost:3000)

---

## 🧪 Scripts útiles

- `npm run build` – compila el proyecto para producción
- `npm run lint` – analiza el código con ESLint
- `npm run format` – formatea el código con Prettier

---

## 👥 Colaboradores

- Héctor
- Alan
- Benjamín

---

## ✅ To-do (puedes actualizar esta sección)

- [x] Autenticación de usuario
- [x] Subida y venta de cartas
- [ ] Filtros de búsqueda
- [ ] Carrito de compras
- [ ] Pago con tarjeta

---

## 📄 Licencia

MIT © 2025 — [Tu Nombre o equipo]

---

## 🌐 [Opcional] Despliegue en Vercel

Este proyecto puede ser desplegado fácilmente en [Vercel](https://vercel.com):

1. Crear cuenta en [vercel.com](https://vercel.com)
2. Importar este repositorio desde GitHub
3. Configurar las variables de entorno:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

4. Click en **Deploy** y listo.

🔗 URL de producción: https://TUDOMINIO.vercel.app (ajusta según tu caso)
