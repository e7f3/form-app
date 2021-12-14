import React from "react";
import { useForm } from "react-hook-form";
const { yupResolver } = require("@hookform/resolvers/yup");

// Компонент формы для работы с react-hook form

// Валидация формы с помощью yup

export default function Form({
  defaultValues,
  schema,
  onSubmit,
  children,
  ...props
}) {
  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  // Регистрация дочерних input-ов для работы с react-hook-form

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
                error: !!errors[child.props.name],
                helperText: errors[child.props.name]?.message,
              },
            })
          : child;
      })}
    </form>
  );
}
