<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<script>

    alert ("Olá Mundo!")

    var ano = 3;

    function pulaLinha() {
        document.write ("<br>");
    }

    function mostrar(frase){
        document.write(frase);
        pulaLinha();
    }

    mostrar("Marcos tem: " + (ano + 22) + " anos.");
    mostrar("Lucas não tem: " + (ano + 19) + " anos.");
    mostrar("Lucas tem: " + (ano + 20) + " anos.");
    mostrar("João tem: " + (ano + 30) + " anos.");


</script>
