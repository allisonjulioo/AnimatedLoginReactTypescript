import React, { Component, FormEvent } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";

export class Auth extends Component {
  componentDidMount() {}
  private submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.submit(event)}>
          <Input
            id={"1"}
            label="Field label"
            predicted="California"
            locked={false}
            active={false}
          />
          <br />
          <Button>ENTRAR</Button>
        </form>
      </div>
    );
  }
}
