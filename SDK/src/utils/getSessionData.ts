" use server";

export default async function getSessionData(projectId: string, apiKey: string) {
    const url = "http://127.0.0.1:3001";

    try{
        const data = await fetch(`${url}/bootStrap/${projectId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: apiKey,
            },
    });

    return await data.json();
    }catch(err){
        console.log("Error fetching session data from MicroAB server:", err);
        return {generatedJWT: "", sessionid: "", style: 0};
    }

}