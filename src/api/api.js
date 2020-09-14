/**
 * fetch.html의 javascript 소스 여기로 옮기기
 * 해당 소스를 함수로 만들기
 * 만들어진 함수를 export 해보기
 */

    // button 삭제
    // document.getElementById('getData').addEventListener('click', getData);
    
window.onload = getData();

function getData(){
    fetch('https://api.covid19api.com/dayone/country/south-korea')
    .then((res)=>res.json())
    .then((data) => {
        let output = `
            <div class="container mb-4">
                <h3 class="display-4 mb-4">Day One All Status</h2>
                <h5 class="text-monospace">Returns all cases by case type for a country from the first recorded case.
                </h5>
            </div>
            <table class="container" align ="center">
                <thead>
                    <tr align ="center">
                        <th width="200">Country</th>
                        <th width="200">Date</th>
                        <th width="100">Confirmed</th>
                        <th width="100">Recovered</th>
                        <th width="100">Deaths</th>
                        <th width="100">Active</th>
                    </tr>
                </thead>
            </table>

            
        `;
        data.forEach(function(e){
            output += `
            <table class="container" align ="center">
                <tbody>
                    <tr align ="center">
                        <td width="200">${e.Country}</td>
                        <td width="200">${e.Date}</td>
                        <td width="100">${e.Confirmed}</td>
                        <td width="100">${e.Recovered}</td>
                        <td width="100">${e.Deaths}</td>
                        <td width="100">${e.Active}</td>
                    </tr>
                </tbody>     
            </table>           
            `;
        })
        // return output;
        document.getElementById('output').innerHTML = output;
    });
}

// export default getData;