class Disciplina{
    constructor(codigo, nome){
        this.codigo = codigo;
        this.nome = nome;
        this.alunos = [];
    }

    get codigo(){ return this._codigo}
    
    set codigo(novoCodigo){ this._codigo = novoCodigo }
    
    get nome(){ return this._nome }
    
    set nome(novoNome){ this._nome = novoNome }

    adicionarAluno(aluno){ this.alunos.push(aluno) }
    
    removerAluno(aluno){ this.alunos.splice(this.alunos.indexOf(aluno), 1) }

    listar(){ return this.alunos }
}

