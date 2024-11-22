const selectHadir = document.getElementById('inputHadir')
const submit = document.getElementById('submit')
const inputNama = document.getElementById('inputNama')
const ul = document.getElementById('ul')
let randomizer = Math.floor(Math.random()*4)
let masukText = ["Present","Masuk dongg","Ada","Ngga bolos"]
let alphaText = ["Gatau kemana","Menghilang Dari lane","boloss","main ps"]
let izinText = ["Izin dulu","ada kebutuhan","ada urusan","lagi sibuk"]
let sakitText = ["Lagi di PUSKESMAS","Demam","GWS","Lagi Sakit"]

submit.onclick = function(){
    let h2 = document.createElement("h2")
    h2.className = 'h2'
    h2.textContent = ` si ${inputNama.value}, ${satu(selectHadir)} `

    let btn = document.createElement("button")
    btn.textContent = "delete"
    btn.className = 'delete'
    btn.onclick = function(){
        h2.classList.toggle('del')
    }

    if(inputNama.value == false){
        alert('Harus isi Nama Dong')
    }else{
        document.body.appendChild(h2)
        h2.appendChild(btn) 
    }


    function satu(a){
        if(a.value == 'hadir'){
            return masukText[Math.floor(Math.random()*4)]
        }if(a.value == 'izin'){
            return izinText[Math.floor(Math.random()*4)]
        }if(a.value == 'sakit'){
            return sakitText[Math.floor(Math.random()*4)]
        }if(a.value == 'alpha'){
            return alphaText[Math.floor(Math.random()*4)]
        }
    }
    // console.log(randomizer)
    // alert(satu(selectHadir))
}