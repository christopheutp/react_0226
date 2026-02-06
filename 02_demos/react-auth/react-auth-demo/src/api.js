const BASE_URL = "http://localhost:3000"

// se connecter
export async function loginRequest({ username, password}) {
    console.log(`username : ${username} password : ${password}` )
    const res = await fetch(`${BASE_URL}/auth/login`,{
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify({username,password})
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Login fail ${res.status} ${msg}`)
    }

    return res.json();
}


// acceder aux ressource securiser
export async function getSecureData(token) {
    const res = await fetch(`${BASE_URL}/secure/data`,{
        method: "GET",
        headers: { Authorization : `Bearer ${token}` },
    });

    if(!res.ok){
        const msg = await res.text();
        throw new Error(`Secure fail ${res.status} ${msg}`)
    }

    return res.json();
}