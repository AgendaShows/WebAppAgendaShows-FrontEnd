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

export const getUnaBandaApi = async () => {

    const URI = "http://localhost:5000/api/obtenerBanda/5fb9441dac48ca16f821162b";

    try {
        const response = await fetch(URI);

        if (response.ok) {
            const unaBanda = await response.json();
            return unaBanda;
        } else {
            throw new Error("Error al obtener la informacion")
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
}

export const getBandaApi = async () => {

    const url = "http://localhost:5000/api/obtenerBanda/:id";

    try {
        const response = await fetch(url);

        if (response.ok) {
            const banda = await response.json();
            return banda;
        } else {
            throw new Error("Error al obtener la informacion")
        }
    } catch (error) {
        console.error("A ocurrido un error", error); 
    }
}