class DisciplinaService{
    constructor(){
        this.repositorio = new DisciplinaRepositorio()
    }

    inserir(codigo, nome){
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo)
        if(disciplinaPesquisada.length > 0){ throw new Error('Já existe uma disciplina com esse código') }
        
        const disciplina = new Disciplina(codigo, nome)
        this.repositorio.inserir(disciplina)
        
        return disciplina

    }
    
    remover(codigo){
        this.repositorio.remover(codigo)
    }

    inserirAluno(codigo, aluno){
        const disciplinaPesquisada = this.repositorio.listar().find(disciplina => disciplina.codigo === codigo)
        disciplinaPesquisada.inserirAluno(aluno)
    }

    removerAluno(codigo, aluno){
        const disciplinaPesquisada = this.repositorio.listar().find(disciplina => disciplina.codigo === codigo)
        disciplinaPesquisada.removerAluno(aluno)
    }

    pesquisarPorCodigo(codigo){
        return this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo)
    }

    listar(){
        return this.repositorio.listar()
    }


}