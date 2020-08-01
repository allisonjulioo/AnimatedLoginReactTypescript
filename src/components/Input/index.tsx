import React, { ChangeEvent, Component } from "react";
import { InputProp, InputState } from "../../models/interfaces/input";
import "./style.scss";

export class Input extends Component<InputProp, InputState> {
  constructor(props: InputProp) {
    super(props);

    this.state = {
      active: (props.locked && props.active) || false,
      focused: (props.locked && props.focused) || false,
      value: props.value || "",
      error: props.error || "",
      label: props.label || "Label",
    };
  }

  changeValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ value, error: "" });
    this.props.onChange(event);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.which === 13) {
      this.setState({ value: this.props.predicted });
    }
  }

  render() {
    const { active, focused, value, error, label } = this.state;
    const { predicted, locked } = this.props;
    const fieldClassName = `field ${(locked ? active : active || value) &&
      "active"} ${locked && !active && "locked"}  ${focused && "focused"}`;

    return (
      <div id="input">
        <div className={`field ${fieldClassName}`}>
          <img
            className="icon"
            src={require(`../../assets/${this.props.icon}.svg`)}
            alt=""
          />
          {active &&
            this.props.value &&
            predicted &&
            predicted.includes(value) && (
              <p className="predicted">{predicted}</p>
            )}
          <input
            id={this.props.id}
            type={this.props.type || "text"}
            autoComplete="off"
            placeholder={label}
            onChange={(event) => {
              this.setState({ value: event.target.value });
              this.changeValue.bind(this);
              this.props.onChange(event);
            }}
            onKeyPress={() => this.handleKeyPress.bind(this)}
            onFocus={() =>
              !locked && this.setState({ active: true, focused: true })
            }
            onBlur={() =>
              !locked && this.setState({ active: false, focused: false })
            }
          />
          <div className="preamble"></div>
          <label htmlFor={this.props.id} className={error && "error"}>
            {error || label}
          </label>
        </div>
      </div>
    );
  }
}
