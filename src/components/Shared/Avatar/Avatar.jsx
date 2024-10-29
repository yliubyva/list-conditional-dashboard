import PropTypes from "prop-types";
import styles from "./Avatar.module.css";

export const Avatar = ({ src }) => {
    return (
        <div className={styles.container}>
            <img src={src} alt="avatar"  className={styles.avatar}/>
        </div>
    )
}

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
}