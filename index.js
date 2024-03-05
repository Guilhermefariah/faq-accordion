let setas = document.querySelectorAll("p[name='seta']")
            setas.forEach( (item, i) =>{
                setas[i].addEventListener('click', alterarCor)

                function alterarCor(){
                    let guarda1 = i

                    let verif =setas[i].innerHTML
                    if(setas[i].innerHTML == verif){
                        setas[i].innerHTML = "<img src='seta aberta.png'>"
                        console.log(i)
                        let pergunta = document.querySelectorAll("div[name='pergunta']")
                        console.log(pergunta)
                        pergunta[i].classList.remove("alt")
                        console.log(pergunta[i])
                        let conteudo = document.querySelectorAll("p[name='paragrafo']")
                        conteudo[i].classList.replace("alt-p","p")    
                        
                   if(i==0){
                    pergunta[1].classList.add("alt")
                    conteudo[1].classList.replace("p","alt-p") 
                    setas[1].innerHTML = "<img src='icone.png'>"

                    pergunta[2].classList.add("alt")
                    conteudo[2].classList.replace("p","alt-p") 
                    setas[2].innerHTML = "<img src='icone.png'>"
                    console.log("oi")
                   }

                   if(i==1){
                    pergunta[0].classList.add("alt")
                    conteudo[0].classList.replace("p","alt-p") 
                    setas[0].innerHTML = "<img src='icone.png'>"

                    pergunta[2].classList.add("alt")
                    conteudo[2].classList.replace("p","alt-p") 
                    setas[2].innerHTML = "<img src='icone.png'>"
                    console.log("oi")
                   }

                   if(i==2){
                    pergunta[1].classList.add("alt")
                    conteudo[1].classList.replace("p","alt-p") 
                    setas[1].innerHTML = "<img src='icone.png'>"

                    pergunta[0].classList.add("alt")
                    conteudo[0].classList.replace("p","alt-p") 
                    setas[0].innerHTML = "<img src='icone.png'>"
                    console.log("oi")
                   }

                   
                    }
                       
                   
                    
                    
                }
            }) 
