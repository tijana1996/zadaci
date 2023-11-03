<?php
function zbirCifara($broj) {
    $zbir = 0;
    while ($broj > 0) {
        $cifra = $broj % 10;
        $zbir += $cifra;
        $broj = (int) ($broj / 10);
    }
    return $zbir;
}
echo zbirCifara(14); 
echo zbirCifara(123); 
?>
