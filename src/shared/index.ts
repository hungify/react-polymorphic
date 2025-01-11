type AsProp<C extends React.ElementType> = { as?: C };
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);
type ActualProps<
  C extends React.ElementType,
  Props = NonNullable<unknown>
> = Omit<React.ComponentPropsWithRef<C>, PropsToOmit<C, Props>>;
export type PolymorphicProps<
  C extends React.ElementType,
  Props = NonNullable<unknown>
> = React.PropsWithChildren<Props & AsProp<C>> & ActualProps<C, Props>;
