const listaSkills = ["C#", "VB .NET", ".Net Core", "Asp Net Core", "Windows Forms", "Ef Core","Html", "Css", "Javascript","Typescript", "Bootstrap", "Tailwind", "React", "Next JS","SQL", "MySql", "Firebird", "Sqlite", "Sql Server", "Git", "Github", "Azure", "Api Rest", "POO",
"Solid", "Microsserviços"];

const divListaTechsResume = document.getElementById("div-lista-techs-resume");

AddTecnologias();

function AddTecnologias(){
    divListaTechsResume.innerHTML +=`<div class="d-flex flex-wrap gap-4">
        ${listaSkills.map((t)=>{
        return `<div class="bg-light p-3 rounded-4">${t.trim()}</div>`
        }).join('')} 
    </div>`;
}


