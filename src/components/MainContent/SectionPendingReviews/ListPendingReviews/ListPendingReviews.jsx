import { ItemPendingReviews } from "../ItemPendingReviews/ItemPendingReviews";
import { pendingReviews } from "../../../../data/pendingReviews";
import styles from "./ListPendingReviews.module.css";


export const ListPendingReviews = () => {
    return (
        <ul className={styles.list}>
            {[...pendingReviews]
                .map((review) => (
                <ItemPendingReviews 
                    key={review.id}
                    image={review.image}
                    text={review.text}
                />
            ))}
        </ul>
    )
}