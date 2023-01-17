function manageTextCript(){ //Passa para a funcao que decodifica (com parâmetro de criptografia) o texto do campo de entrada e depois de processada exibe no campo de saida
    campoSaidaMsg.value=decoderTextUser(textInputUser.value, 0);
}

function manageTextDescr(){ //Passa para a funcao que decodifica (com parâmetro de descriptografia) o texto do campo de entrada e depois de processada exibe no campo de saida
    campoSaidaMsg.value=decoderTextUser(textInputUser.value, 1);
}

function decoderTextUser(inputMsgUser, modeDecoderCtrl){ //Decodifica o texto do primeiro parâmetro com passe no valor do segundo parâmetro
    if(modeDecoderCtrl==0){ //Criptografa
        for(var i=0; i<5; i++){ //5 loops porque a chave usada tem 5 espacos
            inputMsgUser=inputMsgUser.replace(secretCriptKey[0][i],secretCriptKey[1][i]); //replace troca a primeira string encontrada (correspondete ao primeiro parâmetro) e substitui pela string do segundo parâmetro
        }
        return inputMsgUser;
    }
    else if(modeDecoderCtrl==1){ //Descriptografa
        for(var i=4; i>=0; i--){
            inputMsgUser=inputMsgUser.replace(secretCriptKey[1][i],secretCriptKey[0][i]); //Mesma lógica de criptografar, porém lê as chaves de trás para frente
        }
        return inputMsgUser;
    }
}

function genericBtnClick(idHtmlTag, functCallClick){ //Função que generaliza um botão clicável
    var genericBtnUser=document.getElementById(idHtmlTag);
    genericBtnUser.onclick=functCallClick;
}

var textInputUser, campoSaidaMsg;
var secretCriptKey=[["e","i","a","o","u"],["enter","imes","ai","ober","ufat"]]; //Chave de criptografia
textInputUser=document.getElementById("campo-entrada-usuario");
campoSaidaMsg=document.getElementById("campo-saida-mensagem");
genericBtnClick("botao-criptografar-usuario", manageTextCript);
genericBtnClick("botao-descriptografar-usuario", manageTextDescr);
