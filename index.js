function pronadjiBroj(niz) {
    let indeks = niz.indexOf(5);
    if (indeks !== -1) {
      console.log("Broj 5 se nalazi na poziciji " + indeks + ".");
    } else {
      console.log("Nema broja 5.");
    }
  }
  let niz = [1, 2, 5, 4, 3];
  pronadjiBroj(niz);