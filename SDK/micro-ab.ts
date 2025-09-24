"use server";

export default class MicroAB {

    private readonly apiKey = "7a4f1e0e61c2d6d3c3b07a49722b3b9c21b0e6f67a41d7fa2bffb309b8f6c2d5"; // Must use env variable
    private readonly url = "http://127.0.0.1:3001";
    private readonly projectId = 534; // Must be number value
    testeid: number;
    sdkData: {generatedJWT: string, sessionid: string, style: number} | undefined;


    private constructor(testeid: number){
        this.testeid = testeid;
    }

    static async init(testeid: number, userCookie?: { name: string, value: string }){
        
        const instance = new MicroAB(testeid);
        if(!userCookie){ // If user has no cookie, fetch from API
            const response = await instance.sessionAPIRoute();
            instance.sdkData = response;
            return response
        }

        console.log(" ----- Use userCookie ----- ");
        const response = {generatedJWT: "asdffgh1234dasd", sessionid: "fdsfsadqesda", style: 0};
        instance.sdkData = response;
        return response;
    }

    async sessionAPIRoute(){
        const microAbReply = await fetch(`${this.url}/bootStrap/${this.projectId}`, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            Authorization: this.apiKey,
            },
        });

        return await microAbReply.json();
    }



}