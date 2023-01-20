function decoderTextUser(inputMsgUser, keyRelationDec){ //Decodifica o texto de entrada com base numa matriz chave de relação. Retorna a mensagem decodificada 
    for(var i=0; i<keyRelationDec[0].length; i++){ //A quantidade de loops é referente a quantidade de itens da primeira linha da matriz
        inputMsgUser=inputMsgUser.replace(keyRelationDec[0][i],keyRelationDec[1][i]); //replace troca a primeira string encontrada (correspondete ao primeiro parâmetro) e substitui pela string do segundo parâmetro
    }
    changeVisibIten();
    return inputMsgUser;
}

function changeVisibIten(){ //Esconde a mensagem e a imagem antes do processamento e mostra o campo de exibição
    document.getElementById("mensagem-antes-processamento").style.display='none'; //Esconde
    document.getElementById("campo-pos-processamento").style.display='block'; //Mostra
    iconPageSvg.href="imagens/icone-cadeado-aberto.svg";
    setTimeout(function(){iconPageSvg.href="imagens/icone-cadeado-fechado.svg"},2000);
}

function genericBtnClick(idHtmlTag, functCallClick){ //Função que generaliza um botão clicável
    var genericBtnUser=document.getElementById(idHtmlTag);
    genericBtnUser.onclick=functCallClick;
}

function copiarSaidaText(){
    campoSaidaMsg.disabled=false; //Ativa a edição do textarea
    campoSaidaMsg.select(); //Seleciona o texto do textarea
    document.execCommand("copy"); //Copia para a área de transferência o texto selecionado
    campoSaidaMsg.disabled=true; //Desativa a edição da textarea
    btnCopyOutput.value="Copiado ✓"; //Muda o texto do botão
    setTimeout(function(){btnCopyOutput.value="Copiar"}, 1000); //Muda novamente o texto do botão depois de 1 segundo, para não precisar criar uma função que apenas muda o texto, passado o código dentro da função setTimeout
    window.getSelection().removeAllRanges(); //Remove o texto selecionado
}

var secretCriptKey=[[/e/gi,/i/gi,/a/gi,/o/gi,/u/gi],["enter","imes","ai","ober","ufat"]]; //Chave de criptografia. /.../gi é uma expressão regular, g de global e i para retirar o case sensitive
var secretDescriKey=[[/enter/gi,/imes/gi,/ai/gi,/ober/gi,/ufat/gi],["e","i","a","o","u"]]; //Chave de descriptografia
var textInputUser=document.getElementById("campo-entrada-usuario");
var campoSaidaMsg=document.getElementById("campo-saida-mensagem");
var btnCopyOutput=document.getElementById("botao-copiar-saida");
var iconPageSvg=document.getElementById("head-icone-pagina");
genericBtnClick("botao-criptografar-usuario", function(){campoSaidaMsg.value=decoderTextUser(textInputUser.value, secretCriptKey)}); //Dessa forma é possível passar uma função com parâmetros e manipular seu retorno ao clicar no botão
genericBtnClick("botao-descriptografar-usuario", function(){campoSaidaMsg.value=decoderTextUser(textInputUser.value, secretDescriKey)});
genericBtnClick("botao-copiar-saida", copiarSaidaText);
