const phoneMask = (text: string) => {
  text = text.replace(/\D/g, ""); //Remove tudo o que não é dígito
  text = text.replace(/^(\d{2})(\d)/g, `($1) $2`); //Coloca parênteses em volta dos dois primeiros dígitos
  text = text.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return text;
};

export { phoneMask };
