import { useEffect } from "react";

const SdkComponent = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.matches(".classe-x")) {
        console.log("Cliquei em:", target.textContent);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <></>;
};

export default SdkComponent;
