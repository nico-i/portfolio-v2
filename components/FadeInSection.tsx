import classNames from "classnames";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  id?: string;
  style?: React.CSSProperties;
  children: ReactNode | ReactNode[];
  className?: string;
  fadeIn?: boolean;
}

/**
 *
 * @return {React.ReactNode}
 */
function FadeInSection({ children, id, style, className, fadeIn }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      style={style}
      className={classNames({ "animate-fade-in": inView }, className)}
      ref={ref}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
