let idade = 20

if (idade < 16){
    console.log("Não pode votar.")
}else if(idade == 16 || idade == 17 || idade >= 65){
    console.log("Voto opcional.")
}else{
    console.log("Voto obrigatório.")
}