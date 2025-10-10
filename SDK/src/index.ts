" use server";

import getSessionData from "./utils/getSessionData";
import { validateCookie } from "./utils/cookies";
import { getJWTPayload } from "./utils/jwt";

export type MicroabResponse = {
  generatedJWT: string;
  sessionid: string;
  style: number;
};

//  Passar essa função para outro arquivo, ele deve conter toda a inicialização da aplição.
export async function microab(
  projectId: string,
  apiKey: string,
  cookie: string | undefined
) {
  const validCookieData = validateCookie(cookie);

  if (validCookieData) {
    return validCookieData;
  }

  // Get information from server
  const serverResponse = await getSessionData(projectId, apiKey);

  // Convert data from back end
  const serverResponseStringfy = JSON.stringify(serverResponse);
  const payload = getJWTPayload(serverResponseStringfy);

  return {
    generatedJWT: serverResponse.generatedJWT,
    sessionid: payload.sessionid,
    style: payload.style,
  };
}

//  Passar essa função para outro arquivo, ele deve conter toda a inicialização da aplição.
export async function microABListener(
  sessionid: string,
  jwt: string,
  className: string = "handleEvent"
) {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;

    if (target.classList.contains(className)) {
      try {
        fetch("http://127.0.0.1:3001/event/count", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: jwt,
          },
          body: JSON.stringify({ sessionid: sessionid }),
        });
      } catch (err) {
        console.log("Error sending event to MicroAB server:", err);
      }
    }
  });
}
