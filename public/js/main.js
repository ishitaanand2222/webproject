const cityName=document.getElementById('cityName');
const submitBtn=document.getElementById('submitBtn');

const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');


const getInfo = aysnc(event)=>{
   event.preventDefault();
   let cityVal=cityName.value;
   if(cityVal==""){
    city_name.innerText="Write before u search";
   }
   else{
     try{
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=3bbb29cda3f6ba3c4e446f7ea2fbb3e7`
    const response=await fetch(url);
    const data =await response.json();
    const arrData=[data];
    city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;


    temp.innerText=arrData[0].main.temp;
    temp_status.innerText=arrData[0].weather.main.temp;
     }catch{
      city_name.innerText="enter name preoprel"
     }
   }
}

submitBtn.addEventListener('click',getInfo);