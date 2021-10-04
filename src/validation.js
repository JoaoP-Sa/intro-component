function validation(){
    const inputs = ['fname', 'lname', 'password'];
    const inputsQty = inputs.length - 1;

    for(let i = 0; i <= inputsQty; i++){
        let val = document.getElementById(inputs[i]).value;
        let alert = document.getElementById(`${inputs[i]}Alert`);
        let emptyMsg = document.getElementById(`${inputs[i]}Empty`);

        if(val === ""){
            alert.style.display = 'inline-block'
            emptyMsg.style.display = 'block'
        }
        else{
            alert.style.display = 'none';
            emptyMsg.style.display = 'none';

            document.getElementById(inputs[i]).value = "";
        }
    }

    const email = document.getElementById('email');
    const emailAlert = document.getElementById('emailAlert');
    const emailEmpty = document.getElementById('emailEmpty');

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)[.]*$/;
      
    if (email.value.match(validRegex)) {
        emailAlert.style.display = 'none';
        emailEmpty.style.display = 'none';

        email.value="";
    } 
    else{
        emailAlert.style.display = 'inline-block';
        emailEmpty.style.display = 'block'; 
    }
}

export default validation;

//no regex o ^ representa o começo da linha, enquanto o $ representa o fim da linha