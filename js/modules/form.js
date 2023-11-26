import { openModal, closeModal } from "./modal";
import { postData } from "../servises/servises";

function form (formSelector, modalTimerId){
      // Form

      const form = document.querySelector(formSelector);
      const name = document.querySelector('#name');
      const phone = document.querySelector('#phone');
  
      const message = {
          loading: 'assets/images/imagesMain/spinner.svg',
          success: 'Спасибо! Скоро мы свяжемся с вами',
          failure: 'Что-то пошло не так...'
        };
  
  
      function bindPostData(){
          form.addEventListener('submit', (e) => {
              e.preventDefault();
  
              const statusMessage = document.createElement('img');
              statusMessage.src = message.loading;
              statusMessage.style.cssText = `
                 display: block;
                 margin: 0 auto;
              `;
                     
              form.insertAdjacentElement('afterend', statusMessage);           
  
              const formData = new FormData(form);            
  
              const json = JSON.stringify(Object.fromEntries(formData.entries()));        
  
              console.log(name.value);
  
              if(checkName(name) && checkNumber(phone)){
                  postData('http://localhost:3000/requests', json)
                  .then(data => {
                   console.log(data);
                   showThanksModal(message.success);            
                   statusMessage.remove();
                  })
                  .catch(() => {
                   showThanksModal(message.failure);
                  })
                  .finally(() => {
                   form.reset();
                  }); 
              }
          })
      };
  
      bindPostData(form);
  
      function showThanksModal (message){
          const prevModal = document.querySelector('.consult__dialog');
          prevModal.classList.add('hide');
  
          openModal('#popup', modalTimerId);
  
          const thanksModal = document.createElement('div');
          thanksModal.classList.add('consult__dialog');
          thanksModal.innerHTML = `
              <div class="consult__content">
                   <div class="consult__content-thanks">
                       <div class="consult-thanks">${message}</div>                                         
                   </div>
              </div>
          `;
  
          document.querySelector('#popup').append(thanksModal);
          setTimeout(() => {
              thanksModal.remove();
              prevModal.classList.add('show', 'fade');
              prevModal.classList.remove('hide');
              closeModal('#popup');
          },4000);
      }
  
      
      function checkNumber(number){ 
          const numberWarning = document.querySelector('.consult__number')
  
          const numberFormat = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
          if(number.value.match(numberFormat)){
              return true;
          }
          else {
              let element = document.createElement('p')
              element.classList.add('red')
              element.textContent = "Введите корректный номер телефона"
              numberWarning.append(element);
                  phone.focus();
                  setTimeout(() => {
                      numberWarning.removeChild(element);                        
                  }, 3000)
              return false;
          }
  
      }
     
      function checkName(name){ 
          const nameWarning = document.querySelector('.consult__name');  
          
          const lettersFormat = /^[А-яЁёA-aZ-z]/;
          if(name.value.match(lettersFormat)){
              return true;
          }
          else {
              const element = document.createElement('p')
              element.classList.add('red')
              element.textContent = "Имя должно содержать только  буквы!"
              nameWarning.append(element);
              name.focus();
              setTimeout(() => {
                  nameWarning.removeChild(element);                        
              }, 3000)
              return false;
          }
      }

}

export default form;