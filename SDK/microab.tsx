type requestJWT = {
  generateJWT: string;
  style: number;
};

export const requestJWT = async (): Promise<requestJWT> => {
  const data = await fetch("http://127.0.0.1:3001/bootStrap/", {
    method: "GET",
  }).then((e) => e.json());

  return data;
};

export const handleEventAndSend = async (JWT: string, style: number) => {
  const data = { JWT, style };

  console.log("teste: ", data);
};
