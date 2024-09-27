import { BlockInfo } from "../../Shared/BlockInfo";
import styles from "./SectionMounthlyRevenue.module.css";

export const SectionMounthlyRevenue = () => {
    return (
        <section className={styles.container}>
            <BlockInfo
                icon="dollar"
                title="Mounthly Revenue"
                count={1385}
                hasExtraElement={true}
                backgroundColor="#236383"
            />
        </section>
    )
}