import classNames from "classnames";
import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  id?: string;
  style?: React.CSSProperties;
  children: ReactNode | ReactNode[];
}

/**
 *
 * @return {React.ReactNode}
 */
function FadeInSection({ children, id, style }: Props) {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <section
      id={id}
      style={style}
      className={classNames(
        { "animate-fade-in": inView },
        "flex items-center justify-center w-full h-full snap-start snap-always px-8"
      )}
      ref={ref}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
