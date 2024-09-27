import { BlockInfo } from "../../Shared/BlockInfo";
import { ListPendingReviews } from "./ListPendingReviews/ListPendingReviews";
import { pendingReviews } from "../../../data/pendingReviews";
import styles from "./SectionPendingReviews.module.css";


export const SectionPendingReviews = () => {
    const reviewsCount = pendingReviews.length;

    return (
        <section className={styles.container}>
            <BlockInfo icon="message" title="Pending Reviews" count={reviewsCount} backgroundColor="#EE2F2E">
                <div className={styles.divider}></div>
                <ListPendingReviews />
            </BlockInfo>
        </section>
    )
}