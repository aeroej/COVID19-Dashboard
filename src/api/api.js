export function getJson(){
    fetch('dayone_korea.json').then(function(response){
        response.text().then(function(text){
            // alert(text);
            document.querySelector('article').innerHTML = text;
        })
    })
}