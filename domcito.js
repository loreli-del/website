function calcular(){
    let nombre=document.getElementById('name1').value;
    let edad=parseInt(document.getElementById('edad1').value);
    var genere = document.querySelector('input[name="sexo"]:checked').value;
    var depo = document.querySelector('input[name="depor"]:checked').value;
    let aumento;
        aumento=edad+10;
    
    if (genere=="masculino"){
        alert("Escelente caballero, su edad aumentada es: "+aumento);
        alert("Su deporte practicado es:"+depo);
    }else{
        alert("Excelente señorita, su edad aumentada es: "+aumento);
        alert("Su deporte practicado es:"+depo);
    }

   
    
}