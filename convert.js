function convert() {
  const cantidad = document.getElementById("cantidad").value;
  const dMoneda = document.getElementById("dMoneda").value;
  const aMoneda = document.getElementById("aMoneda").value;

  const url = `https://api.exchangeratesapi.io/latest?base=${dMoneda}&symbols=${aMoneda}&access_key=kx0FIg023KgNdPZso1uUeOGSQUTisZ2T`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Se produjo un error al obtener el tipo de cambio.");
      }
      return response.json();
    })
    .then((data) => {
      if (!data.rates || !data.rates[aMoneda]) {
        throw new Error(
          `No se pudo obtener el tipo de cambio para la moneda ${aMoneda}.`
        );
      }
      const rate = data.rates[aMoneda];
      const cantiConvertida = cantidad * rate;
      document.getElementById(
        "cantConvertida"
      ).textContent = `${cantiConvertida} ${aMoneda}`;
    })
    .catch((error) => {
      console.error(error);
      alert(error.message);
    });
}
