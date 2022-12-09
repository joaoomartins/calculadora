function teclas() {
    botoes = event.keyCode;

    console.log(botoes);

    switch (botoes) {
        //ENTER
        case 13:
            total();
            break;
            
        case 8:
            limpar();
            break;    
            
        case 47: 
            adicionar_numero("/");
            break;
         
        case 42:
            adicionar_numero("*");
            break;
            
        case 45:
            adicionar_numero("-");
            break;
            
        case 43:
            adicionar_numero("+");
            break;

        case 46:
            adicionar_numero(".");
            break;    
            
        case 48:
            adicionar_numero(0);
            break;
            
        case 49:
            adicionar_numero(1);
            break;
            
        case 50:
            adicionar_numero(2);
            break;
            
        case 51:
            adicionar_numero(3);
            break;
            
        case 52:
            adicionar_numero(4);
            break;
            
        case 53:
            adicionar_numero(5);
            break;   
        
        case 54:
            adicionar_numero(6);
            break;    

        case 55:
            adicionar_numero(7);
            break;

        case 56:
            adicionar_numero(8);
            break;    

        case 57:
            adicionar_numero(9);
            break;    
    }
}

document.body.onkeypress = teclas;