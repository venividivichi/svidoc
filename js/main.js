
var infoContainer = document.getElementById("print_out");
var btn = document.getElementById("btn");


btn.addEventListener("click", function() {
    var vvod = $('#vvvod').val();
    var myRequest = new XMLHttpRequest();

    myRequest.open('GET', 'http://10.30.1.208:8080/nais-exchange/resources/cars/v1/cert/' + vvod);
    myRequest.onload = function() {

        if (myRequest.status != 200) {
            alert(myRequest.status + ': ' + myRequest.statusText);
            document.location.href='notfound.html';
        } else {
            var myData = JSON.parse(myRequest.responseText);
            console.log(myData[5]);
            renderHTML(myData);
            /*console.log(myData[0]);*/
        }
    };
    myRequest.send();

});

function renderHTML(data) {

    var htmlString = "";

    for (var i = 0; i < data.length; i++) {
        var htmlString;
        var obj = Object.keys(data[i]);
        for(var j = 0; j < Object.keys(data[i]).length; j++) {
            var propertyName = obj[j]
            htmlString += renderDiv(propertyName, data[i][propertyName])
        }

        // htmlString += "<p>" + "Дата народження: " + data[i].birthday  + "<br>"
        //                     + "Тип кузова: " + data[i].body + "<br>"
        // 					+ "Марка-модель: " + data[i].brand + "<br>"
        // 					+ "Об'єм двигуна: " + data[i].capacity + "<br>"
        // 					+ "Адреса: " + data[i].clntAddress + "<br>"
        // 					+ "ІД: " + data[i].clntId + "<br>"
        // 					+ "Колір: " + data[i].color + "<br>"
        // 					+ "Дата реєстрації: " + data[i].dReg + "<br>"
        // 					+ "ТСЦ №: " + data[i].dep + "<br>"
        // 					+ "Док ІД: " + data[i].docId + "<br>"
        // 					+ "Тип палива: " + data[i].fuel + "<br>"
        // 					+ "ІНН: " + data[i].innChar + "<br>"
        // 					+ "Тип ТЗ за конструкцією: " + data[i].kind + "<br>"
        // 					+ "Рік випуску: " + data[i].makeYear + "<br>"
        // 					+ "Номер кузова: " + data[i].nBody + "<br>"
        // 					+ "Номер двигуна: " + data[i].nEngine + "<br>"
        // 					+ "Номерний знак: " + data[i].nRegNew + "<br>"
        // 					+ "П.І.Б. власника: " + data[i].name + "<br>"
        // 					+ "Номер свідоцтва: " + data[i].newCert + "<br>"
        // 					+ "НЗА: " + data[i].nza + "<br>"
        // 					+ "Операція реєстрації: " + data[i].operName + "<br>"
        // 					+ "Власна вага: " + data[i].ownWeight + "<br>"
        // 					+ "Тип ТЗ за призначенням: " + data[i].purpose + " прідурак" + "<br>"
        // 					+ "Загальна вага: " + data[i].totalWeight + "<br>"
        // 					+ "VIN авто: " + data[i].vin + "<br>"	+	".</p>";
    }

    infoContainer.insertAdjacentHTML('beforeend', htmlString);
}

function renderDiv(propertyName, value) {
    var divString = "<div id=" + propertyName + ">" + value + "</div> <br>"
    return divString;
}

