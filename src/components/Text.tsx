import React from 'react';

type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet';

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<C extends React.ElementType, Props = {}> = React.PropsWithChildren<
  Props & AsProp<C>
> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    color?: Rainbow | 'black';
  }
>;

type TextComponent = <C extends React.ElementType = 'div'>(
  props: TextProps<C>
) => React.ReactElement | null;

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(props: TextProps<C>, ref?: PolymorphicRef<C>) => {
    const { as, color, children, style, ...restProps } = props;
    const Component = as || 'div';

    const internalStyle = {
      style: {
        ...style,
        color,
      },
    };

    return (
      <Component {...restProps} {...internalStyle} ref={ref}>
        {children}
      </Component>
    );
  }
);
