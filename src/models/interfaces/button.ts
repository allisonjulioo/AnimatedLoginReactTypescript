import { FormEvent, ReactNode } from "react";

export interface IProps {
  active?: boolean;
  children: ReactNode;
  onClick: (event: FormEvent<HTMLFormElement>) => void;
}