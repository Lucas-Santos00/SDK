export function getJWTPayload(token: string) {
  return JSON.parse(atob(token.split(".")[1]));
}
