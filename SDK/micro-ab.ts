import bootStrapMicroAB from "./boot-strap-call";

export default class MicroAB {
    testeId: number;
    serverData: {jwt: string | undefined,
        sessionId: string | undefined,
        style: number | undefined} | undefined;

    constructor(testeId: number, userCookie?: object) {
        this.testeId = testeId;

        if(!userCookie){
            bootStrapMicroAB().then((e) => {
                const jsonData = typeof e === "string" ? JSON.parse(e) : e;
                this.serverData = {jwt: jsonData.generateJWT,
                    sessionId: jsonData.sessionid,
                    style: jsonData.style,      
            }
            });
        }
    }

    sendEvent(){
        if (this.testeId) {
            console.log(`Sending event for test ID: ${this.testeId}`);
        }
    }

}