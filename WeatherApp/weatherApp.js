let valueSearch=document.getElementById("valueSearch");

let city=document.getElementById("city");
let temprature=document.getElementById("temprature")
let discription=document.querySelector('.discription');
let clouds=document.getElementById("clouds");
let humidity=document.getElementById("humidity");
let pressure=document.getElementById("pressure");
let form= document.querySelector('form');
let main= document.querySelector('main');
// console.log(form);
form.addEventListener('submit',function(e)
{
    // alert('Hello');
    // console.log(valueSearch.value);
    e.preventDefault();
    if(valueSearch.value !="")
        {
            searchWeather();
        }
});

let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;
const searchWeather=()=>
    {
        fetch(url+'&q='+valueSearch.value)
        .then(response=>response.json())
        .then (data=>
            {
             console.log(data)
             console.log(data.name);
             if(data.cod==200)
                {
                    city.querySelector('#cityname').innerText=data.name;
                    // console.log(data.sys.country);
                    let country=data.sys.country;
                    let src="https://flagsapi.com/"+country+"/shiny/32.png"
                    // console.log(src);
                    city.querySelector('img').src=src
                    tempicon=data.weather[0].icon
                    let imgsrc="https://openweathermap.org/img/wn/"+tempicon+"@4x.png"
                    // console.log(imgsrc);
                    temprature.querySelector('img').src=imgsrc;
                    document.querySelector('figcaption span').innerText=data.main.temp;
                    // console.log(data.weather[0].description);
                    // document.querySelector(".discription").innerText=data.weather[0].description;
                    discription.innerText=data.weather[0].description;
                    clouds.innerText=data.clouds.all;
                    humidity.innerText=data.main.humidity;
                    pressure.innerText=data.main.pressure;


                }
                else{
                    main.classList.add('error');
                    setTimeout(()=>{main.classList.remove('error')},1000)
                }

                valueSearch.value=""
            });

            

            // const initApp=()=>{
            //     valueSearch.value="Pune";
            //     searchWeather();
            // }
            // setTimeout(initApp(),1000)

            
            
             

    }