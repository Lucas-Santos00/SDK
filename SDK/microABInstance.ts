// This file can be ruinning on front-end

import type { userCookieType } from "./models/models";

class Microab {
  private url: string;
  private jwt: string | null = null;
  private style: number | null = null;
  private userCookie: userCookieType = undefined;

  constructor(userCookie?: { style: number }) {
    this.userCookie = userCookie;
    this.url = "http://127.0.0.1:3001";
  }

  async init(): Promise<void> {
    const res = await fetch("/api/microabRoute");
    const data = await res.json();
    this.jwt = data.generateJWT;
    this.style = data.style;
  }

  async sendEventCount() {
    fetch(`${this.url}/event/count`, {
      method: "POST",
      body: JSON.stringify({ jwt: this.jwt, style: this.style }),
    });

    console.log({ jwt: this.jwt, style: this.style });
  }
}

export default Microab;
