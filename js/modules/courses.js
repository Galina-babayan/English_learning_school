import { getData } from "../servises/servises";

function courses (){

        // используем классы для карточек
    // Courses:

    class coursesCard {
        constructor(src, titleName, titleAge, text, time, map, parentSelector, ...classes){
            this.src = src;
            this.titleName = titleName;
            this.titleAge = titleAge;
            this.text = text;
            this.time = time;
            this.map = map;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;

        }

        render(){
            const element = document.createElement('div');

            if(this.classes.length === 0) {
                this.element = 'courses__column';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className)); 
            }
            
            element.innerHTML = `
                <div class="courses__img">
                    <img
                        class="courses__image"
                        src=${this.src}
                        alt="course-description"
                        />
                    </div>
                <div class="courses__description">
                    <div class="courses__title">
                        <h3>${this.titleName}</h3>
                        <h4>${this.titleAge}</h4>
                    </div>
                    <div class="courses__subtitle">
                        <p>
                            ${this.text}
                        </p>
                    </div>
                    <div class="courses__time">
                        <div class="courses__time-flex">
                            <img
                            class="courses__time-image"
                            src="./assets/images/imagesMain/m_time.png"
                            alt="course-description"
                            />
                            <p>${this.time}</p>
                        </div>
                        <div class="courses__place">
                            <img
                            src="./assets/images/imagesMain/m_map.png"
                            alt="course-description"
                            />
                            <p>
                            ${this.map}
                            </p>
                        </div>
                    </div>
                    <div class="request__button btn d-flex justify-content-end">
                        <button data-modal class="button">Подробнее</button>              
                    </div>
                </div>
          
            `;

        this.parent.append(element);
        }
    }

    getData('http://localhost:3000/courses')
        .then(data => {
            data.forEach(({img, titleName, titleAge, text, time, map}) => {
                new coursesCard(img, titleName, titleAge, text, time, map, '.courses__row', 'courses__column').render();
            })
        });

    // axios.get('http://localhost:3000/courses')
    //     .then(data => {
    //         data.data.forEach(({img, titleName, titleAge, text, time, map}) => {
    //             new coursesCard(img, titleName, titleAge, text, time, map, '.courses__row', 'courses__column').render();
    //         })
    //     });

};

export default courses;