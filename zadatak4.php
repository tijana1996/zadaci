<?php

function brojParnih() {
    $brojac = 0;
    for ($i = 1; $i <= 30; $i++) {
        if ($i % 2 === 0) {
            $brojac++;
        }
    }
    return $brojac;
}
echo brojParnih(); 
?>