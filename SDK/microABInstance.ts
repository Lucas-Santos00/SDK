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

  async sendEventCount() {
    fetch(`${this.url}/event/count`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwt: this.jwt, style: this.style }),
    });
  }

  attachClickListener(selector: string) {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches(selector)) {
        this.sendEventCount();
      }
    };

    document.addEventListener("click", handler);

    // Remove the listener
    return () => document.removeEventListener("click", handler);
  }

  async init(): Promise<void> {
    const JWT_StyleFromAPI = await fetch("/api/microabRoute");
    const data = await JWT_StyleFromAPI.json();
    this.jwt = data.generateJWT;
    this.style = data.style;
  }
}

export default Microab;
