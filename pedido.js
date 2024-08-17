
function padraoCEP(){
    let textBoxCEPvalue = document.getElementById("cepInput").value;
    if(textBoxCEPvalue[2] != '.'&&  textBoxCEPvalue.length > 2 ){
            document.getElementById("cepInput").value = textBoxCEPvalue.slice(0,2)+"."+textBoxCEPvalue.slice(2,textBoxCEPvalue.lenght);
    }
    if(textBoxCEPvalue[6] != '-'&&  textBoxCEPvalue.length > 6 ){
        document.getElementById("cepInput").value = textBoxCEPvalue.slice(0,6)+"-"+textBoxCEPvalue.slice(6,textBoxCEPvalue.lenght);
}
}
function padraoCartaoCredito(){
        let textBoxCEPvalue = document.getElementById("cartaoCreditoInput").value;
        if(textBoxCEPvalue[4] != ' '&&  textBoxCEPvalue.length > 4 ){
                document.getElementById("cartaoCreditoInput").value = textBoxCEPvalue.slice(0,4)+" "+textBoxCEPvalue.slice(4,textBoxCEPvalue.lenght);
        }
        if(textBoxCEPvalue[9] != ' '&&  textBoxCEPvalue.length > 9 ){
            document.getElementById("cartaoCreditoInput").value = textBoxCEPvalue.slice(0,9)+" "+textBoxCEPvalue.slice(9,textBoxCEPvalue.lenght);
        } 
        if(textBoxCEPvalue[14] != ' '&&  textBoxCEPvalue.length > 14 ){
                document.getElementById("cartaoCreditoInput").value = textBoxCEPvalue.slice(0,14)+" "+textBoxCEPvalue.slice(14,textBoxCEPvalue.lenght);
            }
}