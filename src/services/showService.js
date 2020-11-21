export const getRecitalByFecha = async () => {

    const URL = "http://localhost:5000/api/obtenerRecitalPorFecha";

    try {
        const response = await fetch(URL);

        if (response.ok) {
            const recital = await response.json()
            return recital;
        } else {
            throw new Error("Error al obtener la informacion")
        }

    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
};

export const getFullRecital = async () => {

    const URI = "http://localhost:5000/api/obtenerFullRecital/:id";

    try {
        const response = await fetch(URI);

        if (response.ok) {
            const fullRecital = await response.json()
            return fullRecital;
        } else {
            throw new Error("Error al obtener la informacion")
        }

    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
};