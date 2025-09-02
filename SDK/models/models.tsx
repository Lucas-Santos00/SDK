export type requestStyleAndJWT = {
  generateJWT: string;
  style: number;
};

export type userCookieType =
  | {
      style: number;
    }
  | undefined;
