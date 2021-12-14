import { createContext, useState, useMemo } from "react";
import { useSelector } from "react-redux";

// Создание контекста
export const DataContext = createContext(null);

// Компонент - Провайдер контекста

export default function DataProvider({ children }) {
  // Получение данных из store
  const lastStep = useSelector((store) => store.formReducer.lastStep);

  // Текущий шаг формы
  const [activeStep, setActiveStep] = useState(0);

  // Проверка на первый шаг
  const isFirstStep = useMemo(() => {
    return activeStep === 0;
  }, [activeStep]);

  // Проверка на последний шаг
  const isLastStep = useMemo(() => {
    return activeStep === lastStep;
  }, [activeStep]);

  // При переходе на следующий шаг
  const handleNext = (data) => {
    // Если последний шаг формы - вывести данные формы в консоль
    if (isLastStep) {
      console.log(data);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  // При переходе на предыдущий шаг
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <DataContext.Provider
      value={{
        activeStep,
        isFirstStep,
        isLastStep,
        handleNext,
        handleBack,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
