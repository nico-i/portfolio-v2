import Image from "next/image";
import React, { Component } from "react";

interface Props {}

interface State {}

export default class NavBar extends Component<Props, State> {
  pages = ["über mich", "projekte", "kontakt"];

  render() {
    return (
      <div >
        <Image src="/images/emblem.svg" height={40} width={40} />
      </div>
    );
  }
}
