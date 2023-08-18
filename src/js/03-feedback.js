import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('input'),
   textarea: document.querySelector('textarea'),
};

const formData = {};

dataOutput();
refs.form.addEventListener('input', throttle(onInputEvent, 500));
refs.form.addEventListener('submit', onSubmit);

function onInputEvent(e) {
   if (e.target.nodeName === 'INPUT') {
      formData.email = e.target.value;
   };
  if (e.target.nodeName === 'TEXTAREA') {
     formData.message = e.target.value;
   };
   localStorage.setItem('feedback-form-state',JSON.stringify(formData));
};

function onSubmit(e) {
   e.preventDefault();
   const savedData = localStorage.getItem('feedback-form-state');
   const parsedData = JSON.parse(savedData);
   console.log(parsedData);
   localStorage.removeItem('feedback-form-state');
   e.currentTarget.reset();
};

function dataOutput() {
   const savedData = localStorage.getItem('feedback-form-state');

      if (savedData) {
      const parsedData = JSON.parse(savedData);
      refs.email.value = parsedData.email || '';
      refs.textarea.value = parsedData.message || '';
   };
