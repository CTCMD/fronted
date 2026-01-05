async function calcular(){
    const ingresos=parseFloat(document.getElementById("ingresos").value);
    const gastos=parseFloat(document.getElementById("gastos").value);
    const res = await fetch(`${API_URL}/calculator`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ingresos,gastos})
    });
    const data = await res.json();
    document.getElementById("resultado").innerHTML=
        `<p>Beneficio: ${data.beneficio} €</p>
         <p>IRPF: ${data.irpf} €</p>
         <p>IVA: ${data.iva} €</p>`;
}
