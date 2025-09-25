" use server";

export default async function getSessionData(){

    const privateKey = "7a4f1e0e61c2d6d3c3b07a49722b3b9c21b0e6f67a41d7fa2bffb309b8f6c2d5";
    const url = "http://127.0.0.1:3001";
    const projectId = 534;
    
    const data = await fetch(`${url}/bootStrap/${projectId}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: privateKey,
        },
    });

    return await data.json();

}