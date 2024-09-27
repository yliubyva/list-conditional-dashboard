import { SectionMounthlyRevenue } from "./SectionMonthlyRevenue";
import { SectionNewCustomers } from "./SectionNewCustomers/SectionNewCustomers";
import { SectionNewOrders } from "./SectionNewOrders/SectionNewOrders";
import { SectionPendingReviews } from "./SectionPendingReviews/SectionPendingReviews";
import { SectionHero } from "./SectionHero/SectionHero";
import { SectionPendingOrders } from "./SectionPendingOrders/SectionPendingOrders";
import styles from "./MainContent.module.css";


export const MainContent = () => {
    return (
        <main>
            <div className={styles.container}>
                <SectionMounthlyRevenue />
                <SectionNewOrders />
                <SectionPendingReviews />
                <SectionNewCustomers />
                <SectionHero />
                <SectionPendingOrders />
            </div>
        </main>
    )
}