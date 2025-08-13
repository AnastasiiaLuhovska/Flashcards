import type {Props} from "../../types.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../redux/store.ts";
import s from './UniversalModal.module.css'
import {Field, Form, Formik, type FormikHelpers, type FormikValues} from "formik";
import {useParams} from "react-router";

const UniversalModal = <Payload, ThunkArg extends FormikValues>({fields, fetchAction, toggleModal, title}: Props<Payload, ThunkArg>) => {
    const dispatch: AppDispatch = useDispatch()
    const { folderId } = useParams()
    const handleSubmit = (values: ThunkArg, actions: FormikHelpers<ThunkArg>) => {
        {folderId? dispatch(fetchAction({...values, folderId})): dispatch(fetchAction(values))}
        dispatch(toggleModal())
        actions.resetForm()
    }

const handleClick = ()=>{
    dispatch(toggleModal())
}

    const initialValues = Object.fromEntries(fields.map((field) => [field, '']))
    return (
        <div className={s.backdrop}>
            <div className={s['window-wrapper']}>
            <p>{title}</p>
                <Formik<ThunkArg> initialValues={initialValues as ThunkArg} onSubmit={handleSubmit}>
                    <Form className={s.form}>
                        {fields.map(field =><label className={s.label}> <p className={s.p}>{field}</p><Field name={field} type='text' className={s.input}/></label>)}
                        <div className={s['button-wrapper']}>
                        <button className={s.button} type='button' onClick={handleClick}>Cancel</button>
                        <button className={s.button}  type="submit" >Save</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default UniversalModal;