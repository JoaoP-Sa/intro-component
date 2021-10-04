function validation(){
    const inputs = ['fname', 'lname', 'password'];
    const inputsQty = inputs.length - 1;

    for(let i = 0; i <= inputsQty; i++){
        let val = document.getElementById(inputs[i]).value;
        let alert = document.getElementById(`${inputs[i]}Alert`);
        let emptyMsg = document.getElementById(`${inputs[i]}Empty`);

        val === "" ? alert.style.display = 'inline-block' : alert.style.display = 'none';
        val === "" ? emptyMsg.style.display = 'block' : emptyMsg.style.display = 'none';
    }

    const email = document.getElementById('email');
    const emailAlert = document.getElementById('emailAlert');
    const emailEmpty = document.getElementById('emailEmpty');

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)[.]*$/;
      
    if (email.value.match(validRegex)) {
        emailAlert.style.display = 'none';
        emailEmpty.style.display = 'none';
    } 
    else{
        emailAlert.style.display = 'inline-block';
        emailEmpty.style.display = 'block'; 
    }
}

export default validation;

//no regex o ^ representa o começo da linha, enquanto o $ representa o fim da linha