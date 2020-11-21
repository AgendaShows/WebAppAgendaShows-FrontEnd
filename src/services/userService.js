export const createUsersApi = async (userData) => {

    const registerURL = "http://localhost:5000/api/registrate";

    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userData)
    }

    try {
        const response = await fetch(registerURL, options);

        if (response.ok) {
            return await response.json(userData)
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
}

export const loginUserApi = async (userCredentials) => {

    const loginURL = "http://localhost:5000/api/auth/login"

    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userCredentials)
    }

    try {
        const response = await fetch(loginURL, options);

        if (response.ok) {
            return await response.json(userCredentials)
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
}