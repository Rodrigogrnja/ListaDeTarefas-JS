const inputTarefa = document.querySelector ('.input-tarefa'); // Seleciona o campo de input onde o usuário digita a tarefa
const btnTarefa = document.querySelector ('.btn-tarefa');     // Seleciona o botão "Adicionar tarefa"
const tarefas = document.querySelector ('.tarefas');          // Seleciona a lista <ul> onde as tarefas serão inseridas


function criaLi() {                                         // Cria e retorna um novo elemento <li> vazio para ser adicionado à lista de tarefas
    const li = document.createElement('li');
    return li; 
}


// Cria o <li>, define o texto, insere na lista, limpa o input e adiciona o botão de apagar.
// As responsabilidades são divididas em funções menores.
function criaTarefa (textoInput) {
    const li = criaLi(); 
    li.innerText = textoInput; 
    tarefas.appendChild(li);                    // Insere o novo <li> dentro da <ul class="tarefas">
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();                             // Chama a função para salvar a minha tarefa. 
}
  

// Evento de tecla pressionada no input: verifica se a tecla foi "Enter" e, se o campo não estiver vazio, adiciona a tarefa à lista
inputTarefa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (!inputTarefa.value) return;      // Impede a criação de tarefas com campo vazio (early return)
    criaTarefa(inputTarefa.value); 
    }
});
 

btnTarefa.addEventListener('click', () => {            // Evento de clique no botão "Adicionar tarefa": valida o input e chama criaTarefa()
    if (!inputTarefa.value) return;                        // Impede a criação de tarefas com campo vazio (early return) 
    criaTarefa(inputTarefa.value); 
});


// Limpa o campo de input após o usuário adicionar uma tarefa, deixando-o pronto para nova entrada
function limpaInput () {                   
    inputTarefa.value = '';
}
 

// Cria e adiciona um botão "Apagar" ao item <li> recebido, permitindo remover tarefas individualmente
function criaBotaoApagar (li) {                                
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}


document.addEventListener ('click', (event) => {
    const elemento = event.target;                          // Para capturar qual parte da página está sendo clicada
    if (elemento.classList.contains('apagar')) {            // Se clicar no 'apagar' remove a <li> 
        elemento.parentElement.remove(); 
        salvarTarefas();
    }
});


// Coleta todas as tarefas atualmente exibidas na lista, remove o texto do botão "Apagar"
// converte o array para JSON e salva no localStorage para persistência entre sessões
function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll ('li');  // Seleciona todos os itens <li> existentes na lista
    const listaDeTarefas = [];                           // Array que armazenará o texto limpo de cada tarefa

    // Percorre cada <li>, extrai o texto, remove a palavra "Apagar" (do botão) e adiciona ao array
    for (let tarefa of liTarefas) {
        let textoDatarefa = tarefa.innerText;
        textoDaTarefa = textoDaTarefa.replace('Apagar', '').trim();                //Serve para apagar a palavra do botão 'Apagar'.
        listaDeTarefas.push(textoDatarefa);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);  // Converte o array para string JSON para poder armazenar no localStorage
    localStorage.setItem('tarefas', tarefasJSON);        // Salva as tarefas no localStorage sob a chave 'tarefas'
}


// Recupera as tarefas salvas no localStorage e as recria na lista ao carregar (ou recarregar) a página
function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');    // Busca a string JSON salva no localStorage
    const listaDeTarefas = JSON.parse(tarefas);         // Converte a string JSON de volta para um array JavaScript

    // Recria cada tarefa salva chamando criaTarefa(), que insere o <li> e o botão "Apagar" na lista
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas(); // Executa ao carregar o script para restaurar as tarefas salvas anteriormente
