let btnClose = document.querySelector('#btnClose')
let con = document.querySelector('#con')

function togglecon (){
    con.classList.toggle('buttonlink')
}
btnClose.onclick = togglecon