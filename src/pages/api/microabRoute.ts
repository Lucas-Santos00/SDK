// This file HAVE to run in back End only!
import type { NextApiRequest, NextApiResponse } from "next";
import Microab from "../../../SDK/microABInstance";

async function getStyleAndJWT(req: NextApiRequest, res: NextApiResponse) {
  const privateKey =
    "7a4f1e0e61c2d6d3c3b07a49722b3b9c21b0e6f67a41d7fa2bffb309b8f6c2d5"; //7a4f1e0e61c2d6d3c3b07a49722b3b9c21b0e6f67a41d7fa2bffb309b8f6c2d5
  const url = "http://127.0.0.1:3001";

  const microABRequest = await fetch(`${url}/bootStrap/${Microab.projectID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: privateKey,
    },
  })
    .then((data) => data.json())
    .catch((err) => err);

  console.log(microABRequest);

  res.status(200).json(microABRequest);
}

export default getStyleAndJWT;
