import ListeLogements from "@/Assets/Api/Logements.json";

const GetAllLogement = () => {
    return ListeLogements;
}

const GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id)

    return OneLogement
}

export const LogementService = {
    GetAllLogement, GetOneLogement
}

export default LogementService