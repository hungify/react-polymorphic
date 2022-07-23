import React from 'react';

type Rainbow =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'tomato'
  | 'white'
  | 'inherit';

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, never>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, never>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
  C,
  {
    color?: Rainbow | 'inherit';
    w?: string | number;
    h?: string | number;
    px?: number | number;
    bg?: Rainbow | 'inherit';
    p?: number | string;
    rounded?: 'md' | 'lg' | 'full' | 'none';
  }
>;

type BoxComponent = <C extends React.ElementType = 'div'>(
  props: BoxProps<C>,
) => React.ReactElement | null;

const NewBox: BoxComponent = React.forwardRef(
  <C extends React.ElementType = 'div'>(props: BoxProps<C>, ref?: PolymorphicRef<C>) => {
    const { as, color, children, rounded, p, w, h, px, bg, style, ...restProps } = props;
    const Component = as || 'div';
    const borderRadius = {
      md: '0.25rem',
      lg: '0.5rem',
      full: '9999px',
      none: '0',
    };
    const sizesBox = {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      '100%': '100%',
    };
    type Sizes = keyof typeof sizesBox;

    const internalStyle = {
      style: {
        ...style,
        color,
        backgroundColor: bg,
        width: w,
        height: h ? sizesBox[h as Sizes] : 'auto',
        paddingLeft: px ? sizesBox[px as Sizes] : '0',
        paddingRight: px ? sizesBox[px as Sizes] : '0',
        borderRadius: rounded ? borderRadius[rounded] : 0,
        padding: p,
      },
    };

    return (
      <Component {...restProps} {...internalStyle} ref={ref}>
        {children}
      </Component>
    );
  },
);

export default NewBox;
