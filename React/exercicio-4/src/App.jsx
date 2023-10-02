import { useState } from "react";
import styles from "./app.css"

export default function App () {

  const [copiarText, copiadoText] = useState("Copiar")

  function gerarSenha(ev) {
    

    var caracteres = "0123456789abcdefghijklmnopqrstuvwyxz@#$%!ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var tamanhoSenha = 16;
    var senha = ""

    for (var i = 0; i < tamanhoSenha; i++){
      var numeroAleatorio = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.substring(numeroAleatorio, numeroAleatorio + 1)
    }

    document.getElementById('senha').innerText = senha

    
    copiadoText("copiar")
    
  }

  function copiar() {
    copiadoText("copiado")

    let texto = document.getElementById('senha')
    console.log(texto.textContent)
    navigator.clipboard.writeText(texto.textContent)
    
  }



  return (
    <div className="container">
      <h1>Gerador de senhas</h1>
      <div className="buttons">
        <button
          onClick={gerarSenha}
        >Gerar!
        </button>
        <button 
        onClick={copiar}
        >{copiarText}</button>
      </div>
      <div id="senha"></div>
    </div>
  )
}