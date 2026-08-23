import type { ReactNode, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}

export const CardChildProps = ({ title, children, footer }: Props) => {
  return (
    <>
      <title>{title}</title>
      <div>{children}</div>
      <footer>{footer}</footer>
    </>
  );
};
