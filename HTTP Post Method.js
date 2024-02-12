let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading")

function displayResult(result) {
    loadingEl.classList.add("d-none");
    requestStatusEl.textContent = result.code;
    httpResponseEl.textContent = JSON.stringify(result);
}

function sendPostRequest() {
    loadingEl.classList.remove("d-none");
    let data = requestBodyEl.value;
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "?"
        },
        body: JSON.stringify(data)
    };
    fetch(url, options)
        .then(function(response) {
            return response.json()
        }).then(function(jsonData) {
            displayResult(jsonData);
            console.log(jsonData);
        });
}

sendPostRequestBtnEl.addEventListener("click", sendPostRequest);