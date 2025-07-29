const projetosPg = [
    {
        id:"1",
        titulo: "Venda de Veículo",
        descricao: "Esse projeto simula a venda de um veículo. São Preenchidos os campos do comprador, e ao final, é gerada uma venda, com as informações preenchidas",
        srcImg: "assets/simulador-venda-veiculo.png"
    },
        {
        id:"3",
        titulo: "App Verificar IMC",
        descricao: "Um aplicativo feito em react native, que realiza o cálculo de indíce de massa corporal",
        srcImg: "assets/app-imc.png"
    },
        {
        id:"4",
        titulo: "Quiz dos Países",
        descricao: "Aplicação desktop de um jogo de perguntas e respostas, feita em C# e utilizando conceitos de orientação à objeto, e orientação à evento.",
        srcImg: "assets/quiz_paises.PNG"
    },
        {
        id:"5",
        titulo: "Projeto Pokémon",
        descricao: "Página interativa sobre pokémons, feito em html, css, e javascript",
        srcImg: "assets/pokemon.PNG"
    }
];

const projetosDetalhes = [
    {id:'1',tituloProjeto: 'Venda de Veículo', srcVideo: 'https://www.youtube.com/embed/U2pos-J4YKk', descricaoProjeto: 'Esse projeto simula a venda de um veículo. São Preenchidos os campos do comprador, e ao final, é gerada uma venda, com as informações preenchidas', gitHub: 'https://github.com/AllysonOliveiraSouza/Venda-de-Veiculo', tecnologiasUsadas: ['Html', 'Css', 'Javascript', 'Php', 'MySql'], curiosidadesProjeto: 'Esse projeto foi desenvolvido em um processo seletivo para Programador Jr. Foi me passado um prazo de 48 horas para desenvolvê-lo, foi um grande desafio, pois tive que aprender a linguagem php nesse tempo, além, de vários outros conhecimentos que não tinha. Infelizmente não passei no processo, mas gostaram bastante do código desenvolvido.' },
    {id:'3', tituloProjeto: 'App Verificar IMC', srcVideo: 'https://www.youtube.com/embed/r1GmhhK5JWM', descricaoProjeto: 'Um aplicativo feito em react native, que realiza o cálculo de indíce de massa corporal', gitHub: 'https://github.com/AllysonOliveiraSouza/imc-mobile', tecnologiasUsadas: ['React Native', 'Node JS', 'Javascript'], curiosidadesProjeto: 'Esse foi o primeiro projeto de estudo na linguagem React Native' },

    {id:'4', tituloProjeto: 'Quíz dos países', srcVideo: 'https://www.youtube.com/embed/ngXw5ITjJWI', descricaoProjeto: 'Aplicação desktop de um jogo de perguntas e respostas, feita em C# e utilizando conceitos de orientação à objeto, e orientação à evento.', gitHub: 'https://github.com/AllysonOliveiraSouza/QuizDeBandeirasPaises', tecnologiasUsadas: ['C#', '.Net', 'POO'], curiosidadesProjeto: 'Esse projeto me capacitou entender melhor a linguagem C#' },

    {id:'5', tituloProjeto: 'Projeto Pokémon', srcVideo: 'https://www.youtube.com/embed/86mIO7C2V94', descricaoProjeto: 'Página interativa sobre pokémons, feito em html, css, e javascript', gitHub: 'https://github.com/AllysonOliveiraSouza/projeto-pokemon', tecnologiasUsadas: ['Html', 'Css', 'Javascript'], curiosidadesProjeto: 'Esse projeto foi a porta inicial para entender sobre programação web, ele literalmente me fez abrir a mente.' }
];

const ifVideoProjeto = document.getElementById('iframe-video-projeto');
const tituloProjetoVideo = document.getElementById('titulo-projeto-video');
const modalTitulo = document.getElementById('modal-titulo');
const descricaoProjeto = document.getElementById('descricao-projeto');
const containerListaProjetos = document.getElementById('container-lista-projetos');
const boxGithubProjeto = document.getElementById("box-github-projeto");
const linkGithubProjeto = document.getElementById("link-github-projeto");
const boxTecnologiasProjeto = document.getElementById("box-tecnologias-projeto");
const tecnologiasProjeto = document.getElementById("tecnologias-projeto");
const btnFechaTecnologias = document.getElementById("btn-fecha-tecnologias");
const boxListaTecnologias = document.getElementById("box-lista-tecnologias");
const btnCloseModal = document.getElementById('btn-close-modal');
const modal = document.getElementById("detalhes-projeto");

CarregaProjetos();
AddHandleClickBtnVerProjeto();
boxGithubProjeto.addEventListener('click', ()=> linkGithubProjeto.click());
boxTecnologiasProjeto.addEventListener('click',()=>{
    tecnologiasProjeto.classList.remove('d-none');
});
btnFechaTecnologias.addEventListener('click',()=> tecnologiasProjeto.classList.add('d-none'));
modal.addEventListener('hidden.bs.modal',()=> LimpaModal());

// #region Functions

function LimpaModal(){
    ifVideoProjeto.setAttribute('src','');
}

function CarregaDadosProjeto(id){
    const p = projetosDetalhes.find(pp=>pp.id===id);
    
    ifVideoProjeto.setAttribute('src',p.srcVideo);
    tituloProjetoVideo.innerHTML = p.tituloProjeto;
    ifVideoProjeto.setAttribute('title',p.tituloProjeto);
    modalTitulo.innerHTML = 'Projeto';
    descricaoProjeto.innerHTML= p.descricaoProjeto;        
    linkGithubProjeto.setAttribute('href', p.gitHub);    
    boxListaTecnologias.innerHTML = "";

    p.tecnologiasUsadas.forEach((tech)=>{
        boxListaTecnologias.innerHTML+=`
        <div class="tecnologia bg-gradient-primary-to-secondary p-3 rounded-4 text-white">
        ${tech}
        </div>`;
    });
}

function AddHandleClickBtnVerProjeto(){
const btnsVerProjeto = document.querySelectorAll('.btn-ver-projeto');
btnsVerProjeto.forEach((btn)=>{
    btn.addEventListener('click', ()=> CarregaDadosProjeto(btn.value));
});
}

function CarregaProjetos(){
    const qtdProjetos = projetosPg.length;

        for(i=0;i<qtdProjetos;i++){

            const projeto = projetosPg[i];
            const classMb = (i!=(qtdProjetos-1))?" mb-5":"";

            containerListaProjetos.innerHTML+=`
            <div class="card overflow-hidden shadow rounded-4 border-0${classMb}">
                <div class="card-body p-0">
                  <div class="d-flex flex-column-reverse flex-lg-row align-items-center">
                    <div class="p-5">
                      <h2 class="fw-bolder">${projeto.titulo}</h2>
                      <p>
                        ${projeto.descricao}
                      </p>
                    <button
                        type="button"
                        class="btn btn-dark btn-ver-projeto"
                        data-bs-toggle="modal"
                        data-bs-target="#detalhes-projeto"
                        value="${projeto.id}"
                      >
                        Ver projeto
                    </button>
                    </div>
                    <img
                      class="img-project"
                      src="${projeto.srcImg}"
                      alt="..."
                    />
                  </div>
                </div>
            </div>`;   
    }     
}  

// #endregion




