function convert() {
    const cantidad = document.getElementById("cantidad").value;
    const dMoneda = document.getElementById("dMoneda").value;
    const aMoneda = document.getElementById("aMoneda").value;

    const url = `https://api.exchangeratesapi.io/latest?base=${dMoneda}&symbols=${aMoneda}&access_key=kx0FIg023KgNdPZso1uUeOGSQUTisZ2T`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[aMoneda];
            const cantiConvertida = cantidad * rate;

            document.getElementById("cantConvertida").innerHTML = `${cantiConvertida} ${aMoneda}`;
        })
        .catch(error => console.error(error));
}