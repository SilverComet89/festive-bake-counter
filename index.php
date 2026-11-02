<?php
    require_once __DIR__ . '/vendor/autoload.php';

    use Festive\Nutrition;

    $nutrition = new Nutrition();
?>
<html>
    <head>
        <title>Festive Bake Counter</title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" type="image/png" href="/images/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Festive Bake Counter" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta name="description" content="A fun little counter of how many Festive Bakes you've had this year">
        <meta name="author" content="Ben Faulkner from Silver Comet">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="theme-color" content="#001645" />
    </head>
    <body>
        <section id="logo">
            <img src="/images/logo.webp" alt="Festive Bake Counter Logo" width="200" height="200">
        </section>
        <section id="counter">
            <button id="minus">-</button>
            <input type="number" id="count" value="2" min="0">
            <button id="plus">+</button>
        </section>
        <section id="nutrition">
            <div>nutrition</div>
            <table>
                <tbody>
                    <tr>
                        <td>Energy kJ<td>
                        <td id="energykj"></td>
                    </tr>
                    <tr>
                        <td>Energy kcal<td>
                        <td id="energykcal"></td>
                    </tr>
                    <tr>
                        <td>Fat<td>
                        <td id="fat"></td>
                    </tr>
                    <tr>
                        <td>of which saturates<td>
                        <td id="saturates"></td>
                    </tr>
                    <tr>
                        <td>Carbohydrates<td>
                        <td id="carbohydrates"></td>
                    </tr>
                    <tr>
                        <td>of which sugars<td>
                        <td id="sugars"></td>
                    </tr>
                    <tr>
                        <td>Protein<td>
                        <td id="protein"></td>
                    </tr>
                    <tr>
                        <td>Salt<td>
                        <td id="salt"></td>
                    </tr>
                </tbody>
            </table>
        </section>
        <script src="counter.js"></script>
    </body>
</html>
