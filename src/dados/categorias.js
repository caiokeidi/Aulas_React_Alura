
export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func => {
            func(this.categorias); //executa a função que foi passada na hora de se inscrever.
        });
    }

    adicionarCategoria(nome){
        this.categorias.push(nome);
        this.notificar()
    } 
}