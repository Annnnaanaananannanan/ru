// JavaScript Document
function openCity(evt, cityName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" и спрятать их
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}






document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.forma').forEach(function(form) {    
        var frm = form;
        var inputs = form.querySelectorAll('.validate-input-at .input-at');
        var butsend = form.querySelector('.form-at-btn');
        butsend.addEventListener('click', function(){
            var check = true;
            for(var i=0; i<inputs.length; i++) {
                if(!validate(inputs[i])){
                    showValidate(inputs[i]);
                    check=false;
                }
            }
            // Отправка формы        
            if (check) {
                fetch("/send.php", {
                    method: 'POST',
                    body: new URLSearchParams(new FormData(form))
                })
                .then(response => response.json())
                .then(data => {
                    if(data.frm_check === 'error'){ 
                        form.querySelector(".result-at").innerHTML = "<div class='error-at'>Ошибка: " + data.msg + "</div>";                    
                    } else {
                        form.querySelector(".result-at").innerHTML = "<div class='success-at'>Ваше сообщение отправлено!</div>"; 
                        form.style.display = "none";
                    }
                });
            }
        });
        form.querySelectorAll('.form-at .input-at').forEach(function(input){
            input.addEventListener('focus', function(){
                hideValidate(input);
            });
        });
        
    });    
});

function validate(input) {
    if(input.value.trim() === ''){
        return false;
    }
}

function showValidate(input) {
    var thisAlert = input.parentElement;
    thisAlert.classList.add('alert-validate');
}

function hideValidate(input) {
    var thisAlert = input.parentElement;
    thisAlert.classList.remove('alert-validate');
}
