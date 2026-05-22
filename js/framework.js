// El núcleo de tu propio framework web
export class SalzigFramework {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.components = {};
    }

    // Registra un nuevo componente visual (una función que escupe HTML)
    registerComponent(name, renderFn) {
        this.components[name] = renderFn;
    }

    // Renderiza el componente en la pantalla pasándole un estado de datos
    render(componentName, state = {}) {
        if (this.components[componentName]) {
            this.root.innerHTML = this.components[componentName](state);
        } else {
            this.root.innerHTML = `<h1 style="color:red;">Error: Componente [${componentName}] no encontrado</h1>`;
        }
    }
}
