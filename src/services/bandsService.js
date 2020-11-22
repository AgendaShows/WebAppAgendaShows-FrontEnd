export const getBandasApi = async () => {

    const URL = "http://localhost:5000/api/obtenerBandas";

    try {
        const response = await fetch(URL);

        if (response.ok) {
            const recital = await response.json();
            return recital;
        } else {
            throw new Error("Error al obtener la informacion")
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
};

export const getBandaApi = async () => {

    const URL = "http://localhost:5000/api/obtenerBanda/5fa7a642e0c8a928ec0d3fc2";

    try {
        const response = await fetch(URL);

        if (response.ok) {
            const recital = await response.json();
            return recital;
        } else {
            throw new Error("Error al obtener la informacion")
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
}