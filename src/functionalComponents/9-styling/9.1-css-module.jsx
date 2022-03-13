import styles from './css/9.1-css-module.module.css'

/**
 * ? CSS Module
 * * Css module is scoped with component. It doesn't conflict other css even classNames are same. bcz compiler add some random string with original class name so every class name is unique
 * * Filename convention is [component].module.css
 *
 */

export default function CSSModule() {
    return (
        <div className={styles.card}>
            <h2 className={styles.heading}>Hello React</h2>
            <p className={styles.paragraph}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
                voluptatum nulla facilis consequuntur eum labore.
            </p>
            <p id={styles.test}>Hello world</p>
        </div>
    )
}
