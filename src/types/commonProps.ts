export interface CommonProps<T> {
  children: ((item: T) => React.ReactNode) | string;
}
