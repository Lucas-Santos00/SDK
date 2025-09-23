import Image from "next/image";
import styles from "@/styles/Home.module.css";

const MicroAbComponent = (  ) => {

  return (
    <>
      <a
        className={`${styles.primary} handleClick`}
        href="#"
        rel="noopener noreferrer"
      >
        <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Deploy now (A)
      </a>
    </>
  );
};

export default MicroAbComponent;
