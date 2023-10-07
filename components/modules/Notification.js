import styles from './Notification.module.css'

const Notification = ({props}) => {
    return (
        <div className={styles.container}>
            <h1>{props} </h1>
        </div>
    );
};

export default Notification;