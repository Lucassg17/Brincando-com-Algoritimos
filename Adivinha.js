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

    <input/>
    <button>Compare com o meu Segredo</button>
    
</html>
<script>

    var segredos = [5,7,10,2]; // [] array
    var input = document.querySelector("input");
    input.focus(); // para dar um foco

    function verificar() {

        var achou = false;

        // length atualiza automaticamente a quantidade dentro do array, conforme você muda essa quant.
        for(var posicao = 0; posicao < segredos.length; posicao++) {

            if(input.value == segredos[posicao]) {
                alert("Você ACERTOU!");
                achou = true;
                break;
            } 
        }
        if(achou == false) {
            alert("Você ERROU!");
        }

        input.value = "";
        input.focus();
        
    }

    var button = document.querySelector("button");

    button.onclick = verificar
    
    </script>
