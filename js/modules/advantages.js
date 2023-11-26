import { getData } from "../servises/servises";

function advantages(){
  // вариант без использования классов, просто создаем на лету:
    // Advantages:

 

    getData('http://localhost:3000/advantages')
           .then(data => createAdvantageCard(data));

    
    // axios.get('http://localhost:3000/advantages')
    //     .then(data => {
    //         console.log(data.data);
    //         createAdvantageCard(data.data)
    //     });

    function createAdvantageCard(data){
        data.forEach(({img, title, text}) => {
            const element = document.createElement('div');
            
            element.classList.add('advantages__card');

            element.innerHTML = `
                <img src=${img}/>
                <h4>${title}</h4>
                <h5>
                    ${text}
                </h5>
      
        `;

        document.querySelector('.advantages__block').append(element);
        });
    };
}

export default advantages;