import UniversalModal from "../UniversalModal/UniversalModal.tsx";
import {addFolder} from "../../redux/folders/operations.ts";
import {toggleFolderModal} from "../../redux/folders/slice.ts";

const AddFolderModal = () => {
    const fields = ['name']
    const title = 'Add new folder'
    return <UniversalModal fields={fields} fetchAction={addFolder} toggleModal={toggleFolderModal} title={title}/>

};

export default AddFolderModal;