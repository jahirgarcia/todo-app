import cs from 'classnames';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

const Button = forwardRef(({ className, children, ...rest }, ref) => (
  <button { ...rest } ref={ ref } className={ cs(className, styles.button) } >
    { children }
  </button>
));

Button.displayName = 'Button';

export default Button;
