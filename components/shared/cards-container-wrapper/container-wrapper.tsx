import { PropsWithChildren } from 'react';
import classes from './container-wrapper.module.css';

export default function ContainerWrapper({ children }: PropsWithChildren) {
  return <section className={`${classes['background']} py-5`}>{children}</section>;
}
