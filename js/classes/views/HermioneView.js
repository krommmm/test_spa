export class HermioneView{

    render(){
        const el = document.querySelector("#root");
        if(el){
            el.innerHTML = `<h2>Hermione Granger</h2><p>Livre d'occasion</p>`;
        }
    }
}