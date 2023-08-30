class DisciplinaRepositorio{
    constructor(){
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplina.findIndex(disciplina => disciplina.codigo === codigo);
        
        if (indxDisciplinaARemover > -1) {this.disciplinas.splice(indxDisciplinaARemover, 1) }
    }

    listar() {
        return this.disciplinas;
    }
}

