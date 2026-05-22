import { SalzigFramework } from './framework.js';

// Inicializamos el framework apuntando al contenedor principal
const app = new SalzigFramework('app');

// Definimos la estructura de nuestra página usando HTML dentro de JavaScript
app.registerComponent('MainLayout', (state) => {
    return `
        <header class="site-header">
            <h1>${state.title}</h1>
            <p class="subtitle">Desarrollado bajo mi propio framework de renderizado.</p>
        </header>
        
        <main class="site-content">
            <section class="card">
                <h2>¿Cómo funciona?</h2>
                <p>Este sitio web no usa librerías externas. Todo el HTML que ves está siendo procesado e inyectado dinámicamente por código nativo.</p>
                <button id="actionBtn" class="btn">Probar interactividad</button>
            </section>
        </main>

        <footer class="site-footer">
            <p>© 2026 - Creado por ${state.author} • Dominio en trámite</p>
        </footer>
    `;
});

// El estado global con la información de tu web
const siteState = {
    title: "SALZIG 666",
    author: "Salzig"
};

// Ejecutamos el renderizado en el navegador
app.render('MainLayout', siteState);

// Agregamos eventos de JavaScript después de que el HTML exista en pantalla
document.getElementById('actionBtn').addEventListener('click', () => {
    alert('¡Framework Salzig respondiendo perfectamente en tiempo real!');
});
