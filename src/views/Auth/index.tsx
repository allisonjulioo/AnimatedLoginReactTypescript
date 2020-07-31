import { motion } from "framer-motion";
import React, { Component, FormEvent } from "react";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import Loading from "../../utils/loading";
import Logo from "../../utils/logo";
import "./style.scss";

export interface IAnimation {
  isVisible: boolean;
  isOpen: boolean;
}

const variants = {
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

export class Auth extends Component<any, IAnimation> {
  constructor(props?: any) {
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
  }

  private submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  render() {
    const { isVisible, isOpen } = this.state;
    return (
      <div id="auth">
        {!isOpen && <Loading />}
        <motion.div
          className="container"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <motion.div className="head">
            <figure className="branding">
              <Logo />
            </figure>
            <motion.h4 variants={variants}>BEM-VINDO AO EMPRESAS</motion.h4>
            <motion.span variants={variants}>
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
                locked={true}
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
              <br />
              <Button onClick={() => this.setState({ isOpen: !isOpen })}>
                ENTRAR
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }
}
