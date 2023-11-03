function drugiNajveci(niz) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    for (let broj of niz) {
      if (broj > max1) {
        max2 = max1;
        max1 = broj;
      } else if (broj > max2 && broj < max1) {
        max2 = broj;
      }
    }
    return max2;
  }
  let niz = [1, 4, 3, 2, 5];
  console.log(drugiNajveci(niz));