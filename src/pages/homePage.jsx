import { faAddressCard, faCircleQuestion, faRectangleList } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from 'antd';
import { Link } from "react-router-dom";

export default function HomePage() {

    const cards = [
        {
            title: 'Como Utilizar',
            description: 'Guia sobre o sistema',
            icon: faCircleQuestion,
            url: '/how-to-use',
        },
        {
            title: 'Lista de Escores',
            description: 'Escores para prática clínica',
            icon: faRectangleList,
            url: '/scores',
        },
        {
            title: 'Sobre Nós',
            description: 'Conheça a equipe',
            icon: faAddressCard,
            url: '/about-us',
        },
    ]

    return (
        <div
            className="w-full p-6 pb-24 flex flex-col items-center text-white min-h-[calc(100vh-80px-96px)]"
            style={{
                background: 'linear-gradient(125deg, var(--color-primary) 50%, var(--color-primary-light) 50%)'
            }}
        >
            <div className="text-3xl font-semibold mt-16">
                CLINFARMA Calc.
            </div>
            <div className="mt-8 text-xl font-semibold text-center">
                Bem-vindo ao Clinfarma Calc, sistema de apoio ao Cuidado Farmacêutico
            </div>
            <div className="mt-12 mx-auto max-w-7xl flex gap-8 flex-col lg:flex-row">
                {cards.map(cardData => (
                    <Link to={cardData.url} key={cardData.title} className="w-full block">
                        <Card
                            hoverable
                            className="w-full hover:scale-105"
                            style={{ transition: 'transform .3s ease' }}
                            classNames={{
                                body: 'h-full'
                            }}
                        >
                            <div className="flex items-center min-h-40 py-4">
                                <div className="shrink-0 w-16 text-4xl">
                                    <FontAwesomeIcon icon={cardData.icon} />
                                </div>
                                <div className="w-full text-center">
                                    <div className="text-2xl">
                                        {cardData.title}
                                    </div>
                                    <div className="mt-4 text-lg">
                                        {cardData.description}
                                    </div>
                                </div>
                                <div className="ml-auto w-14 flex justify-end shrink-0 text-2xl">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}

