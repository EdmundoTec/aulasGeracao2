const estados = [
    {
        "id":11,
        "sigla": "RO",
        "nome": "Rondônia",
        "regiao": {
            "id": 1,
            "sigla": "N",
            "nome": "Norte",
        }
    }
]


// console.log(estados(0).regiao.nome)

for(let index = 0; index < estados.length; index ++){
    const estado = estados [index]
    if(estado.regiao.nome === 'Sul'){
        console.log(estado)
    }
}