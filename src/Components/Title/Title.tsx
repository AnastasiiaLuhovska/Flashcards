import s from './Title.module.css'

const Title: React.FC<{text:string}> = ({text}) => {
    return (
        <div className={s['title-wrapper']}>
            <svg width='22' height='22'><use href='/symbol-defs.svg#icon-star'></use></svg>
        <p className={s.title}>
            {text}
        </p>
</div>
    );
};

export default Title;