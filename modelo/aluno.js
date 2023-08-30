class Aluno {

    constructor(nome, idade, matricula) {
        this._nome = nome;
        this._idade = idade;
        this._matricula = matricula;
        this.ValidarIdade()
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade){
        this._idade = idade;
    }

    ValidarIdade() {
        if ( this._idade < 18) {
            throw new Error('A idade deve ser maior que 18 anos');
        }
    }
}
