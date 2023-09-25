function buscar() {
  var vehicleType = document.getElementById("parametro1").value;
  var brandId = document.getElementById("parametro2").value;
  var modelId = document.getElementById("parametro3").value;
  var yearId = document.getElementById("parametro4").value;
  inputDoUsuario(vehicleType, brandId, modelId, yearId);
}

const inputDoUsuario = async (vehicleType, brandId, modelId, yearId) => {
  try {
    const result = await fetch(
      `https://parallelum.com.br/fipe/api/v2/${vehicleType}/brands/${brandId}/models/${modelId}/years/${yearId}`
    );
    const corpo = await result.json();
    document.getElementById("price").innerHTML = "Preço: " + corpo.price;
    document.getElementById("marca").innerHTML = "Marca: " + corpo.brand;
    document.getElementById("modelo").innerHTML = "Modelo: " + corpo.model;
    document.getElementById("anoModelo").innerHTML =
      "Ano Modelo: " + corpo.modelYear;
    document.getElementById("combustivel").innerHTML =
      "Combustivel: " + corpo.fuel;
    document.getElementById("codeFipe").innerHTML =
      "Codigo Fipe: " + corpo.codeFipe;
  } catch (error) {
    console.error("Erro:", error);
  }
};
