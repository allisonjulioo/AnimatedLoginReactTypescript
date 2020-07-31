
export interface InputProp {
  /**
   * @param predicated
   */
  id: string;
  icon: string;
  predicted: string;
  value?: string;
  label?: string;
  error?: string;
  locked?: boolean;
  active?: boolean;
  focused?: boolean;
}
export interface InputState {
  active: boolean;
  focused: boolean;
  value: string;
  error: string;
  label: string;
}
