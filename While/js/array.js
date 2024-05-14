//area de criação de variaveis
var vet=[1,3,4,12];
var i=0
var par=0
var impar=0

//esse while vai verificar cada valor do vetor e separar se é par ou impar
while(i<vet.length){
    if(vet[i]%2==0){
        par=par+vet[i];
    }else{
        impar=impar+vet[i]
    }

i++
};

//esse if e else vai verificar qual é o maior
if(par>impar){
    console.log("o par eh maior com: ",par)
}else{
    console.log("o impar eh maior com: ",impar)
};