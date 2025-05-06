export class HarryFansView{

    render(){
        const el = document.querySelector("#root");
        if(el){
            el.innerHTML = `<h2>Fans de Harry</h2><p>Ils sont nombreux !</p>`;
        }
    }
}