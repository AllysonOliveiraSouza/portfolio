const listaSkills = ["Git","Github"," C#", "Visual Basic", "Asp net MVC", "Windows Forms", ".Net Core"," .Net CLI", "Asp Net Core", "Web Api", "Autenticação"," Autorização", "REST", "Sql", "Sql Server"," MySql", "Firebird", "Sqlite", "MongoDB", "Entity Framework", "IIS"," Modelagem de dados"," RabbitMQ", "Clean Architeture", "Microsserviços", "SOLID"," Html"," Css", "Javascript", "Typescript", "Bootstrap"," Tailwind", "React", "Next Js"];

const divListaTechsResume = document.getElementById("div-lista-techs-resume");

AddTecnologias();

function AddTecnologias(){
    divListaTechsResume.innerHTML +=`<div class="d-flex flex-wrap gap-4">
        ${listaSkills.map((t)=>{
        return `<div class="bg-light p-3 rounded-4">${t.trim()}</div>`
        }).join('')} 
    </div>`;
}


