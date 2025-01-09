import type React from "react";

type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";
type AsProp<C extends React.ElementType> = { as?: C };
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type ActualProps<
  C extends React.ElementType,
  Props = NonNullable<unknown>
> = Omit<React.ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = NonNullable<unknown>
> = React.PropsWithChildren<Props & AsProp<C>> & ActualProps<C, Props>;
type TextProps<C extends React.ElementType> = PolymorphicComponentProp<
  C,
  { color?: Rainbow | "black" }
>;

export const Text = <C extends React.ElementType = "div">(
  props: TextProps<C>
) => {
  const { as, color, children, style, ref, ...restProps } = props;
  const Component = as || "div";
  const internalStyle = { style: { ...style, color } };

  return (
    <Component {...restProps} {...internalStyle} ref={ref}>
      {children}
    </Component>
  );
};
Text.displayName = "Text";
