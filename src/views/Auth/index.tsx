import { motion } from "framer-motion";
import React, { Component, FormEvent } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import { RequestAuth } from "../../models/enum/request-auth";
import { IAnimation } from "../../models/interfaces/animation";
import { DispatchProps } from "../../models/interfaces/dispatch";
import { StateProps } from "../../models/interfaces/state";
import store from "../../store";
import { login } from "../../store/ducks/auth/actions";
import Loading from "../../utils/loading";
import Logo from "../../utils/logo";
import "./style.scss";

export class Auth extends Component<any, IAnimation> {
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
  constructor(props: StateProps & DispatchProps) {
    super(props);
    this.state = {
      isVisible: false,
      isOpen: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isOpen: true });
    }, 2000);
    const { loadRequest } = this.props;

    loadRequest();
  }
  //
  private submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    store.dispatch(login(RequestAuth));
    console.log(event)
    // this.setState({ isOpen: false });
  }

  render() {
    const { isVisible, isOpen } = this.state;
    return (
      <div id="auth">
        <motion.section
          initial={false}
          animate={!isOpen ? "open" : "closed"}
          variants={this.variants}
        >
          <Loading />
        </motion.section>
        <motion.div
          className="container"
          initial={false}
          animate={isOpen ? "open" : "closed"}
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
                label="E-mail"
                predicted="California"
                locked={false}
                active={false}
              />
              <Input
                icon="password"
                id={"2"}
                label="Senha"
                predicted="California"
                locked={false}
                active={false}
              />
              <Button onClick={(event) => this.submit(event)}>ENTRAR</Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }
}
