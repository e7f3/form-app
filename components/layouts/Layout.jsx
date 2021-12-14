import { Container } from "@mui/material";
import Main from "../elements/Main.jsx";

// Компонент - базовая разметка страницы

export default function Layout({ children }) {
  return (
    <Container fixed>
      <Main>{children}</Main>
    </Container>
  );
}
