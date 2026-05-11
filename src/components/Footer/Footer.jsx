import './Footer.css';

const Footer = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className='footer'>
            <p className='footer__info'>
                Дата создания: 11 мая 2026
            </p>
            <p className='footer__info'>
                Автор: Нурыев Мухаммет
            </p>
        </footer>
    );
};

export default Footer;
