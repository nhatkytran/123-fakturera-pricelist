import styles from './ActionButton.module.css';

/**
 * Action button component.
 * @param {Object} props The props object.
 * @param {string} props.title The title of the button.
 * @param {React.ReactNode} props.Icon The icon component.
 * @param {string} props.color The color of the icon.
 */
export default function ActionButton({ title, Icon, color }) {
  return (
    <button className={styles.actionButton}>
      <span className={styles.actionButtonText}>{title}</span>
      <Icon size={16} color={color} />
    </button>
  );
}
