# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    ## storeapp — Gestión de productos de gimnasio (prototipo)

    Proyecto base creado con React + TypeScript + Vite. Este repositorio sirve como punto de partida para el microfrontend de gestión de productos del gimnasio.

    URL remota del repositorio:

      https://github.com/deiberepos/storeapp

    Resumen rápido
    - Plantilla: Vite + React + TypeScript
    - Build: Vite
    - Rama protegida para producción: `master`
    - Rama de desarrollo: `dev`

    Clonar el repositorio

    ```bash
    # clona el repo
    git clone https://github.com/deiberepos/storeapp.git
    cd storeapp

    # instalar dependencias
    npm install

    # iniciar el servidor de desarrollo
    npm run dev
    ```

    Flujo de ramas recomendado

    - `master` — rama protegida, sólo cambios por PR aprobados. Contiene releases/producción.
    - `dev` — rama de integración para trabajo diario. Los feature branches salen de `dev`.

    Crear y subir la rama `dev` (si aún no existe)

    ```bash
    # crear la rama dev local y subirla
    git checkout -b dev
    git push -u origin dev
    ```

    Trabajo con Pull Requests

    - Crea una rama por feature desde `dev`: `feature/mi-feature`.
    - Haz commits atómicos y descriptivos.
    - Abre un Pull Request hacia `dev` para revisión.
    - Después de revisar y aprobar, mergea a `dev`.
    - Cuando quieras preparar un release a producción, abre un PR desde `dev` hacia `master` y sigue el proceso de revisión/QA.

    Protección de `master`

    Se recomienda configurar las reglas de protección de rama en GitHub:

    - Requerir revisiones de PR (al menos 1 aprobación).
    - No permitir force-pushes ni eliminaciones.
    - Requerir que los checks de CI pasen antes de permitir merge (si se usan).

    Si quieres que yo configure la protección automáticamente puedo intentarlo con la CLI `gh` (necesito permisos de repo). Si prefieres hacerlo manualmente en la UI de GitHub: Settings → Branches → Add rule → `master`.

    Notas útiles

    - Para crear un release puedes usar `git tag -a v1.0.0 -m "Release 1.0.0"` y `git push origin v1.0.0`.
    - Si necesitas que configure un pipeline de CI/CD (GitHub Actions), puedo añadir un workflow básico.

    Contacto

    Si quieres, empiezo ahora mismo a instalar Material UI y crear los componentes base (header + lista de productos) en la rama `dev`.

    ---
    Archivo generado automáticamente: actualización para flujo de trabajo y protección de ramas.
