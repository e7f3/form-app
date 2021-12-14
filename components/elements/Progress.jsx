import { useSelector } from "react-redux";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useSteps } from "../../hooks/useSteps";

// Компонент отображающий прогресс шагов в заполнении формы

export default function Progress({ className }) {
  // Получение данных из store
  const stepSettings = useSelector((store) => store.formReducer.stepSettings);

  // Получение текущего шага из контекста
  const { activeStep } = useSteps();

  return (
    <div className={className}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {Object.keys(stepSettings).map((step) => (
          <Step key={step}>
            <StepLabel>{stepSettings[step].label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
