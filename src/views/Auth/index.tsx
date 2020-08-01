import { motion } from "framer-motion";
import React, { Component, FormEvent } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Loading from "../../components/loading";
import Logo from "../../components/logo";
import { IAnimation } from "../../models/interfaces/animation";
import { AuthState } from "../../models/interfaces/auth";
import store from "../../store";
import { login } from "../../store/ducks/auth/actions";
import "./style.scss";

export class Auth extends Component<any, IAnimation & AuthState> {
  private variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: false,
      isOpen: false,
      email: " ",
      password: " ",
    };
  }
  handleChangeInput(e: any) {
    console.log(e);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: true });
    }, 2000);
  }
  private submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { email, password } = this.state;
    store.dispatch(login({ email, password }));
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div id="auth">
        <motion.section
          initial={false}
          animate={!isVisible ? "open" : "closed"}
          variants={this.variants}
        >
          <Loading />
        </motion.section>
        <motion.div
          className="container"
          initial={false}
          animate={isVisible ? "open" : "closed"}
          variants={this.variants}
        >
          <motion.div className="head">
            <figure className="branding">
              <Logo />
            </figure>
            <motion.h4 variants={this.variants}>
              BEM-VINDO AO EMPRESAS
            </motion.h4>
            <motion.span variants={this.variants}>
              Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc
              accumsan.
            </motion.span>
          </motion.div>
          <div className="content">
            <form onSubmit={(event) => this.submit(event)}>
              <Input
                icon="email"
                id={"1"}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
                label="E-mail"
                predicted=""
                locked={false}
                active={false}
              />
              <Input
                icon="password"
                id={"2"}
                type={"password"}
                label="Senha"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                predicted=""
                locked={false}
                active={false}
              />
              <Button
                active={
                  this.state.email.length > 3 && this.state.password.length > 2 || false
                }
                onClick={(event) => this.submit(event)}
              >
                ENTRAR
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }
}
