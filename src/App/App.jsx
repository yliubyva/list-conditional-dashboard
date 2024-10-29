import { Header } from "../components/Header/Header";
import { IconSprite } from "../components/IconSprite";
import { Navigation } from "../components/Navigation";
import { MainContent } from "../components/MainContent/MainContent";
 

export const App = () => {
    return (
        <div>
            <IconSprite />
            <Header />
            <Navigation />
            <MainContent />
        </div>
    )
}