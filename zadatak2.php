<?php
function smestiUNiz() {
    $brojevi = [];
    for ($i = 1; $i <= 30; $i++) {
        $brojevi[] = $i;
    }
    return $brojevi;
}
print_r(smestiUNiz());
?>