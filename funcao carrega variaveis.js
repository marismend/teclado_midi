async function custom_carrega_variaveis_comercial(params){
    // Função que carrega as variáveis iniciais no bot comercial
    let {
        ecommerce
    } = params;
  
    let config = {
        
        "fila ecommerce": {
            "enabled": true,
            "comentario": "teste"            
        },
    }
      let variaveis_iniciais = config[ecommerce].variaveis_iniciais;
  
    return config[ecommerce];  
  }