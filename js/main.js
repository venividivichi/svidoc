

const infoContainer = document.getElementById("print_out");
const btn = document.getElementById("btn");
const tit = document.getElementById("try_hide");


/*var form = document.querySelector('#myForm');
var submit_js_btn = document.querySelector('#js_submit');


            submit_js_btn.addEventListener('click', function () {


                  const vvod = $('#vvvod').val();
                  const vvod2 = $('#vvvod2').val();



                    if (vvod == '' || vvod2 =='') {
                           document.getElementById("nameErrMsg").innerHTML = " Введіть щось в поля";
                           document.getElementById("vvvod").setAttribute('style', 'border: 2px solid #ff0000');
                           document.getElementById("vvvod2").setAttribute('style', 'border: 2px solid #ff0000');
                           return false
                    }

                    fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

                      .then(response => {

                        if (response.ok) {
                            return response.json();

                        }else {

                           return window.location.href='http://hsc.gov.ua/svidocnotfound/';
                        }
                       })
                        .then(renderHTML)

                        .catch(err => console.log('Error, with message:', err.statusText))


            }, false);*/


/* function press_btn() {

       const vvod = $('#vvvod').val();
       const vvod2 = $('#vvvod2').val();



       if (vvod == '' || vvod2 =='') {
              document.getElementById("nameErrMsg").innerHTML = " Введіть щось в поля";
              document.getElementById("vvvod").setAttribute('style', 'border: 2px solid #ff0000');
              document.getElementById("vvvod2").setAttribute('style', 'border: 2px solid #ff0000');
              return false
       }

       fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

         .then(response => {

           if (response.ok) {
               return response.json();

           }else {

              return window.location.href='http://hsc.gov.ua/svidocnotfound/';
           }
          })
           .then(renderHTML)

           .catch(err => console.log('Error, with message:', err.statusText))

           return false;
   }
*/

$("#myForm").on('submit', function(e) {
    e.preventDefault();
    const vvod = $('#vvvod').val();
    const vvod2 = $('#vvvod2').val();



    if (vvod == '' || vvod2 =='') {
        document.getElementById("nameErrMsg").innerHTML = " Введіть щось в поля";
        document.getElementById("vvvod").setAttribute('style', 'border: 2px solid #ff0000');
        document.getElementById("vvvod2").setAttribute('style', 'border: 2px solid #ff0000');
        return false
    }

    fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

        .then(response => {

        if (response.ok) {
        return response.json();

    }else {

        return window.location.href='http://hsc.gov.ua/svidocnotfound/';
    }
})
.then(renderHTML)

        .catch(err => console.log('Error, with message:', err.statusText))
})

/* $("#btn").on('touchstart click', function(){

     e.preventDefault();
     const vvod = $('#vvvod').val();
     const vvod2 = $('#vvvod2').val();

     fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

       .then(response => {

         if (response.ok) {
             return response.json();

         }else {

            return window.location.href='http://hsc.gov.ua/svidocnotfound/';
         }
        })
         .then(renderHTML)

         .catch(err => console.log('Error, with message:', err.statusText))

 })*/

/*var flag = false;
$("#btn").bind('touchstart click', function(){
  if (!flag) {
    flag = true;
    setTimeout(function(){ flag = false; }, 300);
    const vvod = $('#vvvod').val();
    const vvod2 = $('#vvvod2').val();

    fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

      .then(response => {

        if (response.ok) {
            return response.json();

        }else {

           return window.location.href='http://hsc.gov.ua/svidocnotfound/';
        }
       })
        .then(renderHTML)

        .catch(err => console.log('Error, with message:', err.statusText))
  }

  return false
});*/


/* $(document).ready(function() {
     $("#btnSubmit").click(function(){
          const vvod = $('#vvvod').val();
         const vvod2 = $('#vvvod2').val();

         fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

           .then(response => {

             if (response.ok) {
                 return response.json();

             }else {

                return window.location.href='http://hsc.gov.ua/svidocnotfound/';
             }
            })
             .then(renderHTML)

             .catch(err => console.log('Error, with message:', err.statusText))


     });
 });
*/

/*$(document).ready(function() {
            window.onload = function(){
                btn.addEventListener("click", function () {
                    const vvod = $('#vvvod').val();
                    const vvod2 = $('#vvvod2').val();



                    if (vvod == '' || vvod2 =='') {
                           document.getElementById("nameErrMsg").innerHTML = " Введіть щось в поля";
                           document.getElementById("vvvod").setAttribute('style', 'border: 2px solid #ff0000');
                           document.getElementById("vvvod2").setAttribute('style', 'border: 2px solid #ff0000');
                           return false
                    }

                    fetch(`http://10.30.1.208:8080/nais-exchange/resources/cars/RegisterVehiclesOwners/GetTechnicalPassport/${vvod}/${vvod2}`)

                      .then(response => {

                        if (response.ok) {
                            return response.json();

                        }else {

                           return window.location.href='http://hsc.gov.ua/svidocnotfound/';
                        }
                       })
                        .then(renderHTML)

                        .catch(err => console.log('Error, with message:', err.statusText))

                        return false;

                });
            };
        });*/

const keys = {
    nRegNew: {
        field1: `A`,
        field2: `Реєстраційний номер:`
    },
    dFirstReg: {
        field1: `B`,
        field2: `Дата першої реєстрації:`
    },
    dReg: {
        field1: `B.1`,
        field2: `Дата реєстрації:`
    },
    makeYear: {
        field1: `B.2`,
        field2: `Рік випуску:`
    },
    brand: {
        field1: `D.1`,
        field2: `Марка:`
    },
    model: {
        field1: `D2`,
        field2: `Модель:`
    },
    kind: {
        field1: `D3`,
        field2: `Тип:`
    },
    vin: {
        field1: `E`,
        field2: `Номер шасі (кузова, рами):`
    },
    totalWeight: {
        field1: `F.1`,
        field2: `Повна маса :`
    },
    ownWeight: {
        field1: `G`,
        field2: `Маса без навантаження :`
    },
    rankCategory: {
        field1: `J`,
        field2: `Категорія :`
    },
    capacity: {
        field1: `P.1`,
        field2: `Об'єм двигуна:`
    },
    fuel: {
        field1: `P.2`,
        field2: `Тип палива:`
    },
    color: {
        field1: `R`,
        field2: `Колір:`
    },
    nSeating: {
        field1: `S.1`,
        field2: `Кіль-сть сидячих місць з місцем водія:`
    },
    nStanding: {
        field1: `S.2`,
        field2: `Кіль-сть стоячих місць:`
    },
};

function renderHTML(data) {

    if (data && data.length) {

        brr = document.getElementById('second');
        brr2 = document.getElementById('first');
        $(brr2).hide(1000);
        $(brr).show(1000);

        /* document.getElementById('try_hide' ).style.display = 'block';*/
        /* document.getElementById('try_hide_first').style.display = 'none';*/
        let html = `<div class="container_out">`;

        data.forEach(item => {
            const keysKeys = Object.keys(keys);
        keysKeys.forEach(key => {
            /*const lastDiv = (item[key]) ? item[key] : '?'*/
            html += `<div class="rowContainer">
                            <div class="firstDiv">${keys[key].field1}</div>
                            <div class="secondDiv">${keys[key].field2}</div>
                            <div class="lastDiv">${(item[key]) ? item[key] : '?'}</div>
                        </div>`
    });
    });

        html += `</div>`;

        infoContainer.insertAdjacentHTML('beforeend', html);
    }


}