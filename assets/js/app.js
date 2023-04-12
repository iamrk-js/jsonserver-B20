let baseUrl = `http://localhost:3000/posts`;
let cl = console.log;

let xhr = new XMLHttpRequest();

xhr.open("GET", baseUrl);


xhr.onload = function () {
    if (xhr.status === 200 || xhr.status === 201) {
        cl(xhr.response)
    }
}

xhr.send()