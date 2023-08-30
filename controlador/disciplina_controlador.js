class DisciplinaControlador{
    constructor(){
        this.servico = new DisciplinaService()
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nomeDisciplina");
        
        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
            
       return disciplinaInserida
    }
    listarDisciplinas() {
        const disciplinas = this.servico.listar();
        disciplinas.forEach(disciplina => this.inserirDisciplinaNoHtml(disciplina))
    }

     inserirDisciplinaNoHtml(disciplina) {
        const ListaDisciplinasElemento = document.querySelector('#listaDisciplinas');
        const linha = document.createElement("li");

        let alunos = disciplina.alunos
        if(alunos.length == 0) {alunos = "Sem Alunos"}
        
        linha.textContent = `Codigo: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${alunos}`;
        ListaDisciplinasElemento.appendChild(linha);
    }
}
