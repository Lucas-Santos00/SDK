" use server";

import getSessionData from "./utils/getSessionData";

export type MicroabResponse = {
    generatedJWT: string;
    sessionid: string;
    style: number;
};

export async function microab(projectId: string, apiKey: string) {
    const serverResponse = await getSessionData(projectId, apiKey);
    return {...serverResponse}
}

export async function microABListener(sessionid: string, jwt: string, className: string = 'handleEvent') {

    document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains(className)) {
        try{
            fetch("http://127.0.0.1:3001/event/count", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                Authorization: jwt,
                    },
                body: JSON.stringify({"sessionid": sessionid})
            });
        }catch(err){
            console.log("Error sending event to MicroAB server:", err);
        }
    }
});

}

// `${styles.secondary} handleEvent`