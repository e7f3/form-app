import { Typography } from "@mui/material";

// Компонент - кастомный заголовок

export default function Title({ variant, className, children }) {
  return (
    <div className={className}>
      <Typography variant={variant} component={variant}>
        {children}
      </Typography>
    </div>
  );
}
