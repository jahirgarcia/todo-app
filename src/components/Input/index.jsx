import cs from 'classnames';
import { forwardRef } from 'react';
import styles from './styles.module.scss';

const Input = forwardRef(({ className, ...rest }, ref) => (
  <input { ...rest } ref={ ref } className={ cs(className, styles.input) } />
));

Input.displayName = 'Input';

export default Input;
