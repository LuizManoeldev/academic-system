class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome, idade, matricula) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        
        if (alunoPesquisado.length > 0) { throw new Error('Aluno já cadastrado!'); }
        
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
      
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(aluno => aluno._matricula == matricula);
    }

    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    listar() {
        return this.repositorio.listar();
    }
}
