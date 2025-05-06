export class HarryView {
    render() {
        const el = document.querySelector("#root");
        if (el) {
            el.innerHTML = `<h2>Harry Potter</h2><p>Le chouchou du directeur</p>`;
        }
    }
}
