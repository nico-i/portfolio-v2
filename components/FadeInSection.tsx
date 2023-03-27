import classNames from "classnames";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
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
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      if (id) {
        router.push(`/#${id}`);
      } else {
        router.push("/");
      }
    }
  }, [inView, id, router]);
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
