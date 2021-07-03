form.onsubmit = (event)=>{
    event.preventDefault() 
    if(!password.value &&!ism.value&&!surname.value &&!emailg.value&&!password.value&&!passwordcopy.value) error.textContent='Ma\'lumotlarni kiriting !' 
    else error.textContent=''
    if(ism.value.length>15) ismp.textContent='Iltimos 15 tadan kam belgi kiriting'
    else ismp.textContent=''
    if(surname.value.length>15) surp.textContent='Iltimos 15 tadan kam belgi kiriting'
    else surp.textContent=''
    if(emailg.value.length<5) email_p.textContent='Iltimos 5 tadan ko\'p belgi kiriting'
    else if(emailg.value.indexOf('@')==-1) email_p.textContent='Emailga (@) belgisini ham kiriting'
    else if(emailg.value.indexOf('.')==-1)  email_p.textContent='Emailga nuqta (.) ham kiriting'
    else if(emailg.value.indexOf('com')==-1)  email_p.textContent='Emailga (com) ham kiriting'
    else email_p.textContent=''
    if(password.value.length!==8) password_p.textContent='Iltimos passwordga 8 ta belgi kiriting !'
    else if(!password.value.match(/[1-9]/)) password_p.textContent='Iltimos passwordga raqamlar kiriting !'
    else if(!password.value.match(/[a-z]/)) password_p.textContent='Iltimos passwordga kichkina harflar kiriting !'
    else if(!password.value.match(/[A-Z]/)) password_p.textContent='Iltimos passwordga katta harflar kiriting !'
    else password_p.textContent=''
    if(password.value !==passwordcopy.value) password_pt.textContent='Parollar mos emas'
    else password_pt.textContent=''    
    if(!password_p.textContent&&!password_pt.textContent&&!ismp.textContent&&!surp.textContent&&!email_p.textContent) {
        error.style.color='green'
        error.textContent="Muvaffaqiyatli yuborildi"
    }
} 
