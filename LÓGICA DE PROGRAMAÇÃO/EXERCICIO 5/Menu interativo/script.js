let o = "encerrar"
do {
      o = prompt(" inicio\n Menu\n Dashboard\n Guia\n Encerrar");
          switch (o) {
              case "inicio":
                  alert("inicio")
                  break
              case "menu":
                  alert("Menu")
                  break
              case "dashboard":
                  alert("Dashboard")
                  break
              case "guia":
                  alert("guia")
                  break
              case "encerrar":
                  alert("Finalizando o programa")
                  break
              default:
                  alert("Opção inválida")
          }
  } while(o != "encerrar")