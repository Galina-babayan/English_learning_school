import { getData } from "../servises/servises";

function team(){
       
    // Team:
       getData('http://localhost:3000/teacher')
       .then(data => createTeamCard(data));

    function createTeamCard(data){
        data.forEach(({img, name, position,text}) => {
            const element = document.createElement('div');
        
            element.classList.add('team__column');

            element.innerHTML = `
            <div class="team__card">
                <div class="team__img">
                    <img src=${img} alt="Team Image" />
                </div>
                <div class="team__content">
                    <h2>${name}</h2>
                    <h3>${position}</h3>
                    <p>
                        ${text}
                    </p>
                </div>
            </div>
        `;

        document.querySelector('.team__row').append(element);
        });
    };

}

export default team;