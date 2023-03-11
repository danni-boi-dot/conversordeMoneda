function convert() {
  const cantidad = document.getElementById("cantidad").value;
  const dMoneda = document.getElementById("dMoneda").value;
  const aMoneda = document.getElementById("aMoneda").value;

  var myHeaders = new Headers();
  myHeaders.append("apikey", "kx0FIg023KgNdPZso1uUeOGSQUTisZ2T");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const url = `https://api.apilayer.com/exchangerates_data/convert?to=${aMoneda}&from=${dMoneda}&amount=${cantidad}`; 

  fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Se produjo un error al obtener el tipo de cambio.");
      }
      return response.json();
    })
    .then((data) => {
      const cantiConvertida = data.result.toFixed(3);
      document.getElementById(
        "cantConvertida"
      ).textContent = `${cantiConvertida} ${aMoneda}`;
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
}
