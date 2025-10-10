import { GetServerSidePropsContext } from "next";
import { getJWTPayload } from "./jwt";

export function validateCookie(cookie?: string) {
  if (!cookie) return false;

  try {
    const cookieData = JSON.parse(cookie);
    const token = cookieData?.generatedJWT;
    if (!token) return false;

    const payload = getJWTPayload(token);
    if (!payload) return false;

    const now = Math.floor(Date.now() / 1000);
    if (payload.exp > now) {
      return cookieData;
    }

    return false;
  } catch (err) {
    console.error("Invalid cookie:", err);
    return false;
  }
}

export function removeAllCookies(context: GetServerSidePropsContext) {
  context.res.setHeader(
    "Set-Cookie",
    "microab_sessionid=; HttpOnly; Path=/; Max-Age=0"
  );
}

export function setNewCookie(data: string, context: GetServerSidePropsContext) {
  context.res.setHeader(
    "Set-Cookie",
    `microab_sessionid=${data}; HttpOnly; Path=/;`
  );
}
