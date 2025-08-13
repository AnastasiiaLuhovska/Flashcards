import UniversalModal from "../UniversalModal/UniversalModal.tsx";
import {addWordByFolderID} from "../../redux/words/operations.ts";
import {toggleWordModal} from "../../redux/words/slice.ts";
import type {Word, WordType} from "../../types.ts";

const AddWordModal = () => {
    const fields = ['Word', 'Translation']
    return (
        <UniversalModal <WordType, Word> fields={fields} fetchAction={addWordByFolderID} toggleModal={toggleWordModal} title={'Add new word'}/>
    );
};

export default AddWordModal;