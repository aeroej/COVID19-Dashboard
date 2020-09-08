/**
 * fetch.html의 javascript 소스 여기로 옮기기
 * 해당 소스를 함수로 만들기
 * 만들어진 함수를 export 해보기
 */

export function getJson(){
    fetch('dayone_korea.json').then(function(response){
        response.text().then(function(text){
            // alert(text);
            document.querySelector('article').innerHTML = text;
        })
    })
}
