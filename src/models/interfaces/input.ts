import { ChangeEvent } from "react";

export interface InputProp {
  /**
   * @param predicated
   */
  id: string;
  icon: string;
  predicted: string;
  value?: string;
  label?: string;
  type?: string;
  error?: string;
  locked?: boolean;
  active?: boolean;
  focused?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export interface InputState {
  active: boolean;
  focused: boolean;
  value: string;
  error: string;
  label: string;
}
