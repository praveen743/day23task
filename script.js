const createCard = (obj) => {
    var div = document.createElement("div");
    var img = document.createElement("img");
    img.src = obj.flags.png;
    div.appendChild(img);



    var para = document.createElement("p");
    para.innerText = obj.name.common;
    div.appendChild(para);
    var para1 = document.createElement("p");
    para1.innerText = obj.altSpellings[0];
    div.appendChild(para1);
    var newElem = document.createElement("BR");
    div.insertBefore(newElem, para1);

    var button = document.createElement("button");
    button.innerText = "Get weather report";

    button.setAttribute("id", i);
    button.addEventListener('click', async () => {
        let value = obj.name.common
        var wdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=7345e7c70fccaa047847f3d19df274d5`);
        var jwdata = await wdata.json();
        console.log(jwdata);
        window.alert(`*************************
                \nName:    ${jwdata.name}
                \nTemperature:    ${jwdata.main.temp}
                \nTemperature Max:    ${jwdata.main.temp_max}
                \nTemperature Min:    ${jwdata.main.temp_min}
                \nFeelslike:    ${jwdata.main.feels_like}
                \nGroundlevel:    ${jwdata.main.grnd_level}
                \nHumidity:    ${jwdata.main.humidity}
                \nPressure:    ${jwdata.main.pressure} `);
    })
    div.appendChild(button);

    document.body.appendChild(div)


}
fetch('https://restcountries.com/v3.1/all')
    .then(function (data) {
        return data.json();
    })
    .then(function (dataobj) {
        for (i = 0; i < dataobj.length; i++) {
            createCard(dataobj[i])
        }

    })
    .catch(function (err) {
        console.log(err)
    })


