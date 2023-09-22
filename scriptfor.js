function gerarTabuada() {
    let num = document.getElementById('txtn')
    let tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        /* let n = Number(num.value) */
        tab.innerHTML = ''
        for (c = 0 ; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${Number(num.value)} x ${c} = ${Number(num.value)*c}`
            tab.appendChild(item)
        }
    }
}
