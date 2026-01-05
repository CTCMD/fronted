async function login(){
    const email = document.getElementById("email").value;
    const res = await fetch(`${API_URL}/auth/login`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email})
    });
    if(res.ok){ localStorage.setItem("email", email); window.location.href="dashboard.html";}
    else {document.getElementById("msg").innerText="Acceso denegado";}
}
