<meta charset="UTF-8">

<script>

  function pulaLinha(){
    document.write("<br>");
  }

  function mostra(frase){
    document.write(frase);
    pulaLinha();
  }

  var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));

  var numero = 1;
  var totalIdades = 0;

  while (numero <= totalFamiliares){
    var idade = parseInt(prompt("Informe idade do familiar:"));
    totalIdades = totalIdades + idade;
    numero++;
  }

  var mediaIdades = totalIdades/totalFamiliares;
  mostra("A média das idades é " + mediaIdades);
  mostra("FIM");
</script>
