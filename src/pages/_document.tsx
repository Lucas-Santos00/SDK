import { Html, Head, Main, NextScript } from "next/document";
import { requestJWT } from "../../SDK/microab";

export default async function Document() {
  const JWT = await requestJWT();
  console.log(JWT);

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
