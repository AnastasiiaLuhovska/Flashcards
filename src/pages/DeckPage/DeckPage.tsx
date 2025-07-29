import s from './DeckPage.module.css'
import Title from "../../Components/Title/Title.tsx";
import Window from "../../Components/Window/Window.tsx";

const DeckPage = () => {
    return (
        <div className={s.deckPageWrapper}>
                <Title text={'CREATE YOUR DECK'}/>
                <Window/>
        </div>
    );
};

export default DeckPage;