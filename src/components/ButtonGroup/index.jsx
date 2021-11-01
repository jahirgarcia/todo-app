import cs from 'classnames';
import styles from './styles.module.scss';
import { Children, cloneElement } from 'react';

export default function ButtonGroup({ children }) {

  return (
    <div className={ styles['button-group'] } >
      { Children.map(children, (child) => cloneElement(child, { 
          className: cs(styles.button, { [styles.active]: child.props.active }) 
        })) 
      }
    </div>
  );
}
