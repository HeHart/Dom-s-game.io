class reuniao {
  static reunioes = []
  constructor(id, data, assunto) {
    this.id = id;
    this.data = data;
    this.assunto = assunto;
    this.participantes = []

    reuniao.reunioes.push(this)
  }
  static listarReunioes(nome) {
    return reuniao.reunioes.filter(reu => {
      return reu.participantes.some(p => p.name === nome);
    })
  }
  static entrarReuniao(id, pessoa) {
    const reu = reuniao.reunioes.find(r => r.id === id)
    if (!reu) {
      console.log(`Reuniao ${id} não encontrada para ${pessoa.name}$`)
    }
    reu.participantes.push(pessoa)
  }


}

class participante {
  constructor(nome, contato) {
    this.name = nome
    this.email = contato
    this.reunioes = []
  }
  join(id) {
    reuniao.entrarReuniao(id, this)
    this.meetingsList()
  }
  meetingsList() {
    this.reunioes = reuniao.listarReunioes(this.name)
  }
}

class Empregado {
  constructor(nome, contato, setor) {
    this.name = nome
    this.email = contato
    this.reunioes = []
    this.setor = setor
  }
  join(id) {
    reuniao.entrarReuniao(id, this)
    this.meetingsList()
  }
  meetingsList() {
    this.reunioes = reuniao.listarReunioes(this.name)
  }
}
const maria = new Empregado("Maria", 'Mariazinha@gmail.com', 'TI')
const carlos = new participante("Carlos", "carlos@instituicao.com")
new reuniao(1, "2024-07-01", "Planejamento de Projeto")
new reuniao(2, "2027-09-02", "Caminhada matinal")
carlos.join(1); 
maria.join(1)


console.log(reuniao.reunioes[0].participantes)





