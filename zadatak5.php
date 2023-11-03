<?php
function fooBar() {
    for ($i = 1; $i <= 30; $i++) {
        if ($i % 3 === 0 && $i % 5 === 0) {
            echo 'foobar ';
        } elseif ($i % 3 === 0) {
            echo 'foo ';
        } elseif ($i % 5 === 0) {
            echo 'bar ';
        } else {
            echo $i . ' ';
        }
    }
}
fooBar();
?>