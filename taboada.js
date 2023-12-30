function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

function MontaTaboada(num, el) {
    for (let index = 1; index <= 100; index++) {
        var result = index * num;
        const section = document.createElement("section");
        const div = document.createElement("div");
        const p = document.createElement("p");
        const text = document.createTextNode(index + " x " + num + " = " + result);
        section.appendChild(div);
        div.appendChild(p)
        p.appendChild(text);
        document.getElementById(el).appendChild(section);
        document.getElementById(el).style.display = 'flex'
    }
}

function ApagaTaboada(el) {
    for (let index = 1; index <= 100; index++) {
        var elemento = document.getElementById(el).querySelector('section');
        elemento.parentElement.removeChild(elemento);
    }
}

var isTaboada = false;
function CalculaTaboada(el) {
    var num = document.getElementById("entrada").value;
    if (num > 0) {
        if (!isTaboada) {
            isTaboada = true;
            MontaTaboada(num, el)
        } else {
            ApagaTaboada(el);
            MontaTaboada(num, el);
        }
    } else {
        alert("Digite um Número Inteiro")
    }


}