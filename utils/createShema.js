import * as yup from "yup";

// Конфигурация валидации в зависимости от настроек
const tuneYup = (yupSettings) => {
  let Yup = yup;
  const { type, regex, min, max, min_length, max_length } = yupSettings;

  switch (type) {
    case "STRING":
      Yup = yup.string();
      break;
    case "NUMBER":
      Yup = yup.number().integer();
      break;
    case "EMAIL":
      Yup = yup.string().email();
      break;
    default:
      Yup = yup.string();
      break;
  }

  Yup = Yup.required();

  if (regex) {
    Yup = Yup.matches(regex);
  }

  if (min !== undefined) {
    Yup = Yup.min(min);
  } else if (min_length !== undefined) {
    Yup = Yup.min(min_length);
  }

  if (max !== undefined) {
    Yup = Yup.max(max);
  } else if (max_length !== undefined) {
    Yup = Yup.max(max_length);
  }

  return Yup;
};

// Создание схемы для валидации формы

export function createSchema(settings) {
  // Сообщения в случае ввода невалидных данных
  yup.setLocale({
    mixed: {
      required: "Необходимо заполнить поле",
      matches: "Введите корректные данные",
      notType: "Введите корректные данные",
    },
    string: {
      matches: "Введите корректные данные",
    },
    number: {
      min: "Значение меньше допустимого",
      max: "Значение больше допустимого",
      integer: "Введите целое число",
    },
  });

  const { name, ...yupSettings } = settings;

  return yup.object().shape({
    [name]: tuneYup(yupSettings),
  });
}
