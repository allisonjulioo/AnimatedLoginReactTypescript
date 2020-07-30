import React, { Component, FormEvent } from "react";
import { InputProp, InputState } from "../../models/interfaces/input";
import "./style.scss";

export class Input extends Component<InputProp, InputState> {
  constructor(props: InputProp) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label",
    };
  }

  changeValue(event: FormEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    this.setState({ value, error: "" });
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}`;

    return (
      <div id="input">
        <div className={`field ${fieldClassName}`}>
          {active && value && predicted && predicted.includes(value) && (
            <p className="predicted">{predicted}</p>
          )}
          <input
            id={this.props.id}
            type="text"
            value={value}
            placeholder={label}
            onChange={this.changeValue.bind(this)}
            onKeyPress={() => this.handleKeyPress.bind(this)}
            onFocus={() => !locked && this.setState({ active: true })}
            onBlur={() => !locked && this.setState({ active: false })}
          />
          <label htmlFor={this.props.id} className={error && "error"}>
            {error || label}
          </label>
        </div>
      </div>
    );
  }
}
