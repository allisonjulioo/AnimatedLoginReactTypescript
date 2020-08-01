import { FormEvent, ReactNode } from "react";

export interface IProps {
  children: ReactNode;
  onClick: (event: FormEvent<HTMLFormElement>) => void;
}