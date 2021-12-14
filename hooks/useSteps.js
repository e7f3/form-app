import { useContext } from "react";
import { DataContext } from "../context/DataContext";

// Хук для работы с контекстом

export const useSteps = () => useContext(DataContext);
