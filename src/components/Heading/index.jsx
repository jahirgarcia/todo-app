import styles from './styles.module.scss';

export default function Heading(props) {
  let { as: Component, children } = props;

  // Fallback component
  if(typeof Component === 'undefined') Component = 'h1';

  return (
    <Component className={ styles.heading } >
      { children }
    </Component>
  )
}
