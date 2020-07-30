
export interface InputProp {
  /**
   * @param predicated
   */
  id: string;
  predicted: string;
  value?: string;
  label?: string;
  error?: string;
  locked?: boolean;
  active?: boolean;
}
export interface InputState {
  active: boolean;
  value: string;
  error: string;
  label: string;
}
