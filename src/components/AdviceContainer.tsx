import { useEffect, useState } from "react";
import diceImg from "../assets/images/icon-dice.svg";
import getRandomAdvice from "../services/advices";

function AdviceContainer() {
  const [advice, setAdvice] = useState({ id: 0, advice: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const fetchRandomAdvice = async () => {
      const { slip } = await getRandomAdvice();
      setAdvice(slip);
    };
    fetchRandomAdvice();
  }, []);

  const handleClick = async () => {
    setIsButtonDisabled(true);
    const { slip } = await getRandomAdvice();
    setAdvice(slip);

    // Api has 2 second cache that returns the same advice
    setTimeout(async () => {
      setIsButtonDisabled(false);
    }, 2000);
  };

  return (
    <div
      className="
      relative mt-40 w-full max-w-xl rounded-lg bg-userDarkGrayishBlue px-6 pb-16 pt-10 text-center text-userLightCyan md:mt-0"
    >
      <p className="text-xs tracking-[0.2em] text-userNeonGreen">
        ADVICE #{advice.id}
      </p>
      <h1 className="mt-6 text-base tracking-tight">{advice.advice}</h1>
      <div className="mt-6 h-4 w-full bg-userDividerMobile bg-center bg-no-repeat md:bg-userDividerDesktop" />
      <button
        type="button"
        onClick={handleClick}
        disabled={isButtonDisabled}
        className={`
        absolute -bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-userNeonGreen
        hover:shadow-[0px_0px_47px_-3px_rgba(178,255,181,1)]
        ${isButtonDisabled && "opacity-50"}`}
      >
        <img src={diceImg} alt="" />
      </button>
    </div>
  );
}

export default AdviceContainer;
