export class RonView{

    render(){
        const el = document.querySelector("#root");
        if(el){
            el.innerHTML = `<h2>Ron Wisley</h2><p>L'ami roux</p>`;
        }
    }
}