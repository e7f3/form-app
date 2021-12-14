import { useDispatch, useSelector } from "react-redux";
import { UpdateFormDataAction } from "../../store/formReducer";
import { createSchema } from "../../utils/createShema";
import { Button } from "@mui/material";
import { useSteps } from "../../hooks/useSteps";
import { Container } from "@mui/material";
import { useMemo } from "react";
import Form from "../elements/Form";
import Input from "../elements/Input";
import Title from "../elements/Title";

// Компонент - форма из нескольких шагов

export default function StepForm({ className }) {
  // Диспетчер для работы с Redux
  const dispatch = useDispatch();

  // Получение данных из store
  const formData = useSelector((store) => store.formReducer.formData);
  const stepSettings = useSelector((store) => store.formReducer.stepSettings);

  // Получаем данные из контекста
  const { activeStep, isFirstStep, handleNext, handleBack } = useSteps();

  // Получение name и label текущего шага формы
  const { name, label } = stepSettings[activeStep];

  // Создание schema для валидации формы с помощью yup
  const schema = useMemo(
    () => createSchema(stepSettings[activeStep]),
    [activeStep]
  );

  // При нажатии на кнопку next/submit
  const onSubmit = (data) => {
    // Обновить данные формы в store
    dispatch(UpdateFormDataAction({ key: name, value: data[name] }));

    // Обработать клик
    handleNext(data);
  };

  return (
    <div className={className}>
      <Container maxWidth="xs">
        <div className="step-form">
          <Title className="step-form__title" variant="h5">
            Шаг {activeStep + 1}
          </Title>
          <Form
            className="step-form__form"
            onSubmit={onSubmit}
            schema={schema}
            defaultValues={formData}
          >
            <Input
              name={name}
              label={label}
              defaultValue={formData[name]}
              size="medium"
            />
            <div className="step-form__buttons">
              <Button type="submit" variant="contained">
                Продолжить
              </Button>
              {!isFirstStep ? (
                <Button onClick={handleBack} variant="outlined">
                  Назад
                </Button>
              ) : (
                <></>
              )}
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}
