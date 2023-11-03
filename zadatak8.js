function nadjiParove(niz, zbir) {
    let parovi = [];
    for (let i = 0; i < niz.length; i++) {
      for (let j = i + 1; j < niz.length; j++) {
        if (niz[i] + niz[j] === zbir) {
          parovi.push([niz[i], niz[j]]);
        }
      }
    }
    return parovi;
  }
  let niz = [2, 7, 8, 4, 3];
  console.log(nadjiParove(niz, 10)); 