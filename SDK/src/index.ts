" use server";

import getSessionData from "./getSessionData";

export default async function microab() {
    const serverResponse = await getSessionData()
    return {...serverResponse}
}
