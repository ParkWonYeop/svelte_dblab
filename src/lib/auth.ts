export async function verifyJWT(token: string) : Promise<boolean> {
    const checkJWT = await fetch("http://114.204.182.71:8080/token", {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
    })

    if(checkJWT.ok) {
        return true;
    }

    return false
}