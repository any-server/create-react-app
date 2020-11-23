// fetch(url, options) // [1] получаем заголовки
//     .then(response => response.json()) // [2] - получаем тело запроса
//     .then(result => console.log(result));

// const pathUrl = 'https://rostof.ru/api/v1/node/12596.json';
// const pathUrl = 'https://api.github.com/users/facebook';
// const pathUrl = 'https://rostof.ru/json';

// const options = {
//     method: 'GET',
//     mode: 'no-cors', 
//     hesders: {
//         'Content-Type': 'application/json;charset=utf-8',
//     },
//     // body: JSON.stringify({ name: 'Tom'}),
// };  

const options = {
    method: 'GET',
    hesders: {
        'Content-Type': 'application/json;charset=utf-8',
    },
};  

const fetchData = (pathUrl) => {
   return  fetch(pathUrl)
//    return fetch(pathUrl, { mode: 'no-cors' })
        // .then(response => JSON.parse(response))
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(result => {
            console.log("result ", result);
            console.log("result.body ", result.body);
            console.log("result.body.und[0].value ", result.body.und[0].value);
            // console.log("JSON.parse(result) ", JSON.parse(result));
            // console.log("JSON.parse(result).body ", JSON.parse(result).body);
        })   
}



console.log("Start");
fetchData('https://rostof.ru/api/v1/node/12596.json');
// fetchData('https://rostof.ru/json');
console.log("End");