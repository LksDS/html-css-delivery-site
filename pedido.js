
function padraoCEP(){
    let textBoxCEPvalue = document.getElementById("cepInput").value;
    console.log(textBoxCEPvalue[2])
    if(textBoxCEPvalue[2] != '.'&&  textBoxCEPvalue.length > 2 ){
            document.getElementById("cepInput").value = textBoxCEPvalue.slice(0,2)+"."+textBoxCEPvalue.slice(2,textBoxCEPvalue.lenght);
    }
    if(textBoxCEPvalue[6] != '-'&&  textBoxCEPvalue.length > 6 ){
        document.getElementById("cepInput").value = textBoxCEPvalue.slice(0,6)+"-"+textBoxCEPvalue.slice(6,textBoxCEPvalue.lenght);
}
}