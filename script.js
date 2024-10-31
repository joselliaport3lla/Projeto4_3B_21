function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
}

function calcularCombinacao() {
    const n = parseInt(document.getElementById("n").value);
    const p = parseInt(document.getElementById("p").value);

    if (isNaN(n) || isNaN(p) || n < 0 || p < 0 || p > n) {
        document.getElementById("resultado").innerText = "Por favor, insira valores válidos para n e p.";
        return;
    }

    const combinacao = fatorial(n) / (fatorial(p) * fatorial(n - p));
    document.getElementById("resultado").innerText = `C(${n}, ${p}) = ${combinacao}`;
}
