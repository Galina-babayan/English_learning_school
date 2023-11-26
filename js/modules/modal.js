function openModal (modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('hide');
    modal.classList.add('show', 'fade');    
    document.body.style.overflow = 'hidden'; 
    console.log(modalTimerId);
    if (modalTimerId){
        clearInterval(modalTimerId);
    }
    
}

    function closeModal (modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show', 'fade');
    modal.classList.add('hide');
    document.body.style.overflow = '';
}   


function modal (triggerSelector, modalSelector, pagePriceSelector, pageCoursesSelector, modalTimerId){
      
    // Modal

    const buttonsModal = document.querySelectorAll(triggerSelector),
    modal = document.querySelector(modalSelector),
    price = document.querySelector(pagePriceSelector),
    courses = document.querySelector(pageCoursesSelector);  

  
    modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == ''){
       closeModal(modalSelector);
    }
    });

    courses.addEventListener('click', (e) => {
    if (e.target === courses || e.target.getAttribute('data-modal') == ''){
        openModal(modalSelector, modalTimerId);
        }
    });

    price.addEventListener('click', (e) => {
    if (e.target === price || e.target.getAttribute('data-modal') == ''){
        openModal(modalSelector, modalTimerId);
        }
    });

    document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show', 'fade')){
       closeModal(modalSelector);
    }
    }) 

    buttonsModal.forEach (btn => {
    btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    })

  


    function showModalByScroll(){
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1){
    openModal(modalSelector, modalTimerId);
    window.removeEventListener('scroll', showModalByScroll);
    }
    }

    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {openModal};
export {closeModal};