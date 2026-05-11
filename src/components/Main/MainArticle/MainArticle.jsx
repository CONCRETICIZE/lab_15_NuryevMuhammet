import { CONTENT_TYPE } from '../../../constants';
import './MainArticle.css';

const MainArticle = ({ type }) => {
    return (
        <main>
            {type === CONTENT_TYPE.NEWS && (
                <span>
                    <h1>Новости</h1>
                    <p>Последние новости университета</p>
                </span>
            )} 
            {type === CONTENT_TYPE.ABOUT && (
                <span>
                    <h1>«Южный федеральный университет»</h1>
                        <p>Южный федеральный университет (ЮФУ) — 
                            высшее учебное заведение, один из 
                            федеральных университетов России, 
                            расположенный в Ростове-на-Дону и 
                            Таганроге Ростовской области.
                        </p>
                            <hr className='border'></hr>
                        <p>Юридический адрес: 344006, Ростов-на-Дону, 
                            ул. Большая Садовая, 105.
                        </p>
                            <hr className='border'></hr>
                        <p>
                            Адрес для посещения: 
                            г. Ростов-на-Дону, ул. Большая Садовая, 105/42.
                        </p> 
                            <hr className='border'></hr>
                        <p>
                            Телефон: +7 (863) 218-40-00.
                        </p>
                </span>
            )} 
            {type === CONTENT_TYPE.CONTACTS && (
                <span>
                    <h1>Контакты</h1>
                    Почта:
                    <p className='email'>mnuryev@sfedu.ru</p>
                </span>
            )} 
        </main>
    );
};

export default MainArticle;