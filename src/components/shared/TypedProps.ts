export type Typed<TProps, TType> = TProps & TypedProps<TType>;

export interface TypedProps<T> {
  type: T;
}
