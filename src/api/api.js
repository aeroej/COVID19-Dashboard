/**
 * fetch.html의 javascript 소스 여기로 옮기기
 * 해당 소스를 함수로 만들기
 * 만들어진 함수를 export 해보기
 */

    // button 삭제
    // document.getElementById('getData').addEventListener('click', getData);
    
window.onload = getData();

function getData(){
    fetch('https://api.covid19api.com/dayone/country/south-korea/status/confirmed')
    .then((res)=>res.json())
    .then((data) => {
        let output = `
            <h2>COVID19-DayOne</h2>
        `;
        data.forEach(function(e){
            output += `
            <u1>
                <li>Country : ${e.Country}</li>
                <li>CountryCode : ${e.CountryCode}</li>
                <li>Cases : ${e.Cases}</li>
                <li>Date : ${e.Date}</li>
            </u1>      
            </br>              
            `;
        })
        // return output;
        document.getElementById('output').innerHTML = output;
    });
}

// export default getData;