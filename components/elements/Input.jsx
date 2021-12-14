import { TextField } from "@mui/material";

// Компонент - кастомный input для работы с react-hook-form

export default function Input({ register, name, ...props }) {
  return <TextField inputProps={{ ...register(name) }} {...props} />;
}
