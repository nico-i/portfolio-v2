import classNames from "classnames";
import React, { ReactNode } from "react";

interface Props {
  id?: string;
  children: ReactNode | ReactNode[];
}

/**
 *
 * @return {React.ReactNode}
 */
function FadeInSection({ children, id }: Props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef() as React.MutableRefObject<HTMLElement>;
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <section
      id={id}
      className={classNames({ "fade-in-up": isVisible })}
      ref={domRef}
    >
      {children}
    </section>
  );
}

export default FadeInSection;
