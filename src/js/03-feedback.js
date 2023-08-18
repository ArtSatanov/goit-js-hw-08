import throttle from 'lodash.throttle';


const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('input'),
   textarea: document.querySelector('textarea'),
};

const formData = {};
refs.form.addEventListener('input', onInputEvent);
refs.form.addEventListener('submit', onSubmit);

// refs.textarea.addEventListener('input', onTextarea);
// refs.email.addEventListener('input', onTextarea);

function onInputEvent(e) {
   if (e.target.nodeName === 'INPUT') {
      console.log('Input', e.target.value);
      formData.email = e.target.value;
   }
  if (e.target.nodeName === 'TEXTAREA') {
     console.log('text area', e.target.value);
     formData.message = e.target.value;
   } 
   localStorage.setItem('feedback-form-state',JSON.stringify(formData));
};

function onSubmit(e) {
   e.preventDefault();
   const savedData = localStorage.getItem('feedback-form-state');
   const parsedData = JSON.parse(savedData);
   console.log(parsedData);

};

// function onClick(e) { 
//    console.log('target>>>', e.target.name, e.target.nodeName);
//    console.log('currenttarget>>>', e.currentTarget);
// }  





