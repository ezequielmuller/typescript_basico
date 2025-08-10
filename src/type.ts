// Qualquer tipo - Cria o TIPO
type meuTipo = "Ezequiel";

// Cria um TIPO
type usuarioType = {
  nome:string;
  idade:number;
  apelido:string;
  // Se usar ? defini como não obrigatório
  escolaridade?:string
  localizacao: {
    endereco:string;
    bairro:string;
    cidade:string;
  };
  // Se usar | defini um valor padrão
  ativo:true | false;
};

// Atribui o TIPO 
let pessoa:usuarioType = {
  nome: 'Ezequiel',
  idade: 19,
  apelido: 'Ziki',
  escolaridade: 'Faculdade',
  localizacao: {
    endereco: 'Rua Typescript',
    bairro: 'TS',
    cidade: 'TypeCity',
  },
  ativo: true
}