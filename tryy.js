

var u1='https://cdn-api.co-vin.in/api/v2/appointment/sessions/calendarByDistrict?district_id=363&date=';
var str='';
function getInputValue(str){
    // Selecting the input element and get its value 
    var str,element = document.getElementById("myInput");
if (element != null) {
    str = element.value;
}
else {
    str = null;
}
var url=u1+str;
getapi(url);
    // Displaying the value

}
async function getapi(url) 
{
    // getInputValue(str);
    // var url=u1+str;
    console.log(url);
    var intro="Centers at which vaccine is available:"
    document.getElementById("intro").innerHTML = intro;
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    // var rd=JSON.parse(data);
    var centers=data.centers;
    console.log(centers[0]);
    let tab=`<tr>
          <th>Name</th>
          <th>Available Slots</th>
         </tr>`;
         var j=0;
         for(var i=0;i<centers.length;i++)
         {
            if(centers[i].sessions[0].available_capacity>0)
            {
                tab+=`<tr>
                <td>${centers[i].name}</td>
                <td>${centers[i].sessions[0].available_capacity}</td>
               </tr>`;
               j++;

            }
         }
         if(j==0)
         {tab="Not available anywhere.";}
         document.getElementById("avcenter").innerHTML = tab;
}


