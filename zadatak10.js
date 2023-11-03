function najmanjiDeljivSa3(niz) {
    let najmanjiDeljiv = Infinity;
    let pozicija = -1;
    for (let i = 0; i < niz.length; i++) {
      if (niz[i] % 3 === 0 && niz[i] < najmanjiDeljiv) {
        najmanjiDeljiv = niz[i];
        pozicija = i;
      }
    }
    console.log(
      "U zadatom nizu, najmanji broj deljiv sa 3 je " +
        najmanjiDeljiv +
        ", i on se nalazi na poziciji " +
        pozicija +
        "."
    );
  }
  let niz = [2, 4, 6, 9, 10, 15];
  najmanjiDeljivSa3(niz); 