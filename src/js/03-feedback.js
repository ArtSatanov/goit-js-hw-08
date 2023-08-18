import throttle from 'lodash.throttle';


const refs = {
   form: document.querySelector('.feedback-form'),
   email: document.querySelector('input'),
   textarea: document.querySelector('textarea'),
};

console.log(refs.form);
console.log(refs.email);
console.log(refs.textarea);

const formData = {};

refs.textarea.addEventListener('input', onTextarea);
refs.email.addEventListener('input', onTextarea);


function onTextarea(e) {
   const value = e.target.value;
   // console.log(value);
   formData.msg = value;
}

function onClick(e) { 
   console.log('target>>>', e.target.name);
   console.log('currenttarget>>>', e.currentTarget.name);
}  

refs.form.addEventListener('click', onClick);


// const formDataSave = function (email, message) { 
//    const formData = [];
//    formData.push(email, message);
//    console.log(formData);
//    // if (!fromEmailEl.value && ) { }
//    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
// };

// formEl.addEventListener('input', formDataSave(fromEmailEl.value, fromMsgEl.value));
