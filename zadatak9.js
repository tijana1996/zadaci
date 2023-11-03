function razvrstaj(niz) {
    let parniNiz = [];
    let neparniNiz = [];
    for (let broj of niz) {
      if (broj % 2 === 0) {
        parniNiz.push(broj);
      } else {
        neparniNiz.push(broj);
      }
    }
    console.log(parniNiz);
    console.log(neparniNiz);
  }
  let niz = [1, 2, 3, 4, 5, 6];
  razvrstaj(niz); 