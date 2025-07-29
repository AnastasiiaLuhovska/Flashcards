import s from './Title.module.css'

const Title: React.FC<{text:string}> = ({text}) => {
    return (
        <p className={s.title}>
            {text}
        </p>
    );
};

export default Title;