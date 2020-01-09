export interface Props {
  classes: {
    root: string;
  };
}

export type PositionalProps = Props & { position?: number };
