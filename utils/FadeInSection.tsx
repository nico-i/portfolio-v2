import classNames from "classnames";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  id?: string;
  children: ReactNode | ReactNode[];
}

/**
 *
 * @return {React.ReactNode}
 */
function FadeInSection({ children, id }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section id={id} className={classNames({ "fade-in-up": inView })} ref={ref}>
      {children}
    </section>
  );
}

export default FadeInSection;
