const useUtils = () => {
  function formatar(grandeza) {
    let x = grandeza;
    switch (x) {
      case "unidade":
        x = "Un - (Unidade)";
        break;
      case "kilograma":
        x = "Kg - (Quilograma)";
        break;
      case "tonelada":
        x = "T - (Tonelada)";
        break;
      case "bins":
        x = "Caixas / Bins / Pallet";
        break;
      case "saca10":
        x = "Saca de 10kg";
        break;
      case "saca20":
        x = "Saca de 20kg";
        break;
      case "saca30":
        x = "Saca de 30kg";
        break;
      case "saca40":
        x = "Saca de 40kg";
        break;
      case "saca50":
        x = "Saca de 50kg";
        break;
      case "saca60":
        x = "Saca de 60kg";
        break;

      default:
        break;
    }
    return x;
  }
  function paraReal(valor) {
    let x = valor;
    if (!valor) return "------";
    x = parseFloat(valor).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    return x;
  }
  function formatarData(valor) {
    const dateString = valor;
    const dateParts = dateString.split("T");
    const date = dateParts[0].split("-").join("/");
    let time = dateParts[1].split(".")[0];

    // Remove timezone information if it exists
    if (time.endsWith("+00:00")) {
      time = time.substring(0, time.length - 6);
    }

    const formattedDate = `${date} - ${time}`;
    return formattedDate;
  }
  function paraRealInput(valor) {
    let x = valor;
    let length = valor.length;

    x = x.replace(/[^0-9]/g, "");
    if (length >= 14)
      x = x.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
    if (length >= 13)
      x = x.replace(/^(\d{2})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
    if (length >= 11)
      x = x.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3,$4");
    if (length >= 10) x = x.replace(/^(\d{3})(\d{3})(\d{2})$/, "$1.$2,$3");
    if (length >= 9) x = x.replace(/^(\d{2})(\d{3})(\d{2})$/, "$1.$2,$3");
    if (length >= 7) x = x.replace(/^(\d{1})(\d{3})(\d{2})$/, "$1.$2,$3");
    if (length >= 6) x = x.replace(/^(\d{3})(\d{2})$/, "$1,$2");
    if (length >= 5) x = x.replace(/^(\d{2})(\d{2})$/, "$1,$2");
    if (length >= 3) x = x.replace(/^(\d{1})(\d{2})$/, "$1,$2");

    return "R$" + x;
  }
  function paraFloat(valor) {
    // input value
    const inputValue = valor;

    // remove currency symbol and thousands separator
    const strippedValue = inputValue.replace(/[R$,]/g, ".");

    // replace decimal separator with dot
    const dotValue = strippedValue.replace(/\./g, "");

    // convert to float
    const floatValue = parseFloat(dotValue);

    return floatValue
  }

  function corLucro(valor) {
    let x = "claro";
    if (valor > 0) {
      x = "verde_claro";
    } else if (valor == 0) {
      x = "claro";
    } else {
      x = "vermelho";
    }
    return x;
  }
  return {
    formatar,
    formatarData,
    paraReal,
    paraRealInput,
    paraFloat,
    corLucro,
  };
};

export default useUtils;