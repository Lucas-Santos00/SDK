import type { NextApiRequest, NextApiResponse } from "next";

async function getStyleAndJWT(req: NextApiRequest, res: NextApiResponse) {
  const privateKey = "privatesdasdsad";
  const url = "http://127.0.0.1:3001";

  const microABRequest = await fetch(`${url}/bootStrap/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${privateKey}`,
    },
  }).then((data) => data.json());

  res.status(200).json(microABRequest);
}

export default getStyleAndJWT;

/*
async init(): Promise<void> {
  "This init the application, requsting a JWT and a style (if there is no user cookie for the style) that return an object used to assing to Microab class parametes";

  const microABServerRequest = await fetch(`${this.url}/bootStrap/`, {
    method: "GET",
  }).then((data) => data.json());

  if (!this.userCookie) {
    this.style = serverRequest.style;
  }

  this.jwt = microABServerRequest.generateJWT;

  console.log(this.jwt, this.style);
}*/
