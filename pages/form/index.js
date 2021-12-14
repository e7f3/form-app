import { server } from "../../config";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AddStepSettingsAction } from "../../store/formReducer";
import Steps from "../../components/modules/Steps";

// Страница с формой

export default function form({ data }) {
  const dispatch = useDispatch();
  const { formData } = data;

  // Записать данные о полях формы в store
  useEffect(() => {
    formData.map((fieldData, index) => {
      dispatch(AddStepSettingsAction(fieldData));
    });
  }, [formData]);

  return <Steps />;
}

// Запрос данных о полях формы

export async function getServerSideProps(context) {
  const response = await fetch(`${server}/api/form/getData`);
  const data = await response.json();

  // Если данных нет - вернуть Not found
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
