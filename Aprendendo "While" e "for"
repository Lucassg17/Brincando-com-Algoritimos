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

     function pulaLinha() {
        document.write ("<br>");
    }

    function mostrar(frase){
        document.write(frase);
        pulaLinha();
    }

    var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";

    var maximoTentativas = 3;
    var tentativaAtual = 1;

    while(tentativaAtual <= maximoTentativas) {
        var loginInformado = prompt("Informe seu login:");
        var senhaInformada = prompt("Informe sua senha:");

        if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
            alert("Bem-vindo, " + loginInformado);
            tentativaAtual = maximoTentativas;
        } else {
            if(tentativaAtual == 3 ) {
                alert("Número de tentativas ultrapassado!");
            } else {
                alert("Login inválido. Tente novamente");
            }
        }
        tentativaAtual = tentativaAtual + 1 // isso é o mesmo que => tentativaAtual++
    }

    mostrar("Além do while, temos também o for, sendo utilizado para montar a tabuada do número 7. Segue um exemplo:");
    for(var multiplicador = 1; multiplicador <= 10; multiplicador++) {
        mostrar(7 * multiplicador);
    }
     
    mostrar("FIM!");

</script>
