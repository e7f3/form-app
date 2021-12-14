import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import StepForm from "./StepForm.jsx";
import Progress from "../elements/Progress.jsx";
import { useSteps } from "../../hooks/useSteps";

// Компонент - форма из нескольких шагов с отслеживанием прогресса

export default function Steps() {
  // Получение данных из store
  const stepSettings = useSelector((store) => store.formReducer.stepSettings);

  // Получение данных из контекста
  const { activeStep } = useSteps();

  // Если данных о шаге формы нет - показывать заглушку
  return (
    <div className="steps">
      {stepSettings[activeStep] ? (
        <>
          <Progress className="steps__progress" />
          <StepForm className="steps__form" />
        </>
      ) : (
        <CircularProgress className="steps__loading" />
      )}
    </div>
  );
}
