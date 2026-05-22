
export class SalzigFramework {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.components = {};
    }


    registerComponent(name, renderFn) {
        this.components[name] = renderFn;
    }

    render(componentName, state = {}) {
        if (this.components[componentName]) {
            this.root.innerHTML = this.components[componentName](state);
        } else {
            this.root.innerHTML = `<h1 style="color:red;">Error: Componente [${componentName}] no encontrado</h1>`;
        }
    }
}
