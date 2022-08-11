let tich =1;
function clickon() {

   let so= +document.getElementById("nhap").value
    for( let i= 1; i<=so; i++){
        tich = tich*i
    }
    document.getElementById("hienthi").innerHTML=tich
    console.log(tich)
}