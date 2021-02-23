// let quaProm = Number(prompt("Сколько раз в неделю Вы ездите на метро?")); 
// let ticketPrice = 8;
// let sumOfTickets = quaProm * ticketPrice;
// alert("За неделю вы тратите: "+sumOfTickets+" грн");

var credentials = {
    login: 'admin',
    password: 'qwerty',
};

    var idLogin = document.getElementById('login');
    var idPass = document.getElementById('pass');
    var idInput = document.getElementById('button')
    function inputFalse() {
        idInput.outerHTML = '<input type = "button" style="background:red; id ="button" name="button" value="Не верно!">';
      }
      function inputTrue() {
        idInput.outerHTML = '<input type = "button" style="background:green; id ="button" name="button" value="Вы Вошли!">';
      }
    idInput.onclick = function() {
        if(idLogin.value == credentials.login && idPass.value == credentials.password){
          setTimeout(inputTrue, 2000);
        }else{
          setTimeout(inputFalse, 2000);
        }
        
    }
    