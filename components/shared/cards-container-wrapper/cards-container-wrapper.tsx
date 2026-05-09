import { PropsWithChildren } from 'react';
import classes from './cards-container-wrapper.module.css';

export default function CardsContainerWrapper({ children }: PropsWithChildren) {
  return <section className={`${classes['background']} py-5`}>{children}</section>;
}
