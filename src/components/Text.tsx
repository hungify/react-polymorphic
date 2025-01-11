import { PolymorphicProps } from "#/shared";
import type React from "react";
import { useImperativeHandle } from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type ImperativeHandleRef = { hi: (message: string) => void };
export type TextRef<C extends React.ElementType> = React.ComponentRef<C> &
  ImperativeHandleRef;
type TextProps<C extends React.ElementType> = PolymorphicProps<
  C,
  { color?: Rainbow | "black" }
>;

export const Text = <C extends React.ElementType = "div">(
  props: TextProps<C>
) => {
  const { as, color, children, style, ref, ...restProps } = props;
  const Component = as ?? "div";
  const internalStyle = { style: { ...style, color } };

  const hi = () => {};

  useImperativeHandle<ImperativeHandleRef, ImperativeHandleRef>(ref, () => {
    return {
      hi,
    };
  });

  return (
    <Component {...restProps} {...internalStyle} ref={ref}>
      {children}
    </Component>
  );
};
Text.displayName = "Text";
