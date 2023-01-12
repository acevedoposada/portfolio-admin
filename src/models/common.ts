import React from 'react';

export type FC<P = {}> = FunctionComponent<P>;

interface Children {
  children?: React.ReactNode;
}

interface FunctionComponent<P = {}> {
  (props: P & Children, context?: any): React.ReactElement<any, any> | null;
  defaultProps?: Partial<P> | undefined;
  displayName?: string | undefined;
}
