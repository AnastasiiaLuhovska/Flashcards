import type {WordType} from "../../types.ts";

const Word = ({word}:{word:WordType}) => {
    return (
        <div>
            <p>{word.word} - {word.translation}</p>

        </div>
    );
};

export default Word;