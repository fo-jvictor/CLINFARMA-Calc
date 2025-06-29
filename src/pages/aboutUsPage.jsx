import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export default function AboutUsPage() {
    return (
        <div
            className="w-full flex flex-col md:flex-row md:h-[calc(100vh-80px-96px)]"
        >
            <div
                className="h-full w-full md:max-w-96 flex flex-col justify-center text-white py-12 px-6 md:px-8 text-center"
                style={{
                    background: 'linear-gradient(125deg, var(--color-primary) 50%, var(--color-primary-light) 50%)'
                }}
            >
                <FontAwesomeIcon icon={faAddressCard} className="text-8xl" />
                <div className="mt-8 text-3xl font-semibold">Sobre Nós</div>
                <div className="mt-6 text-lg">
                    Conheça nosso aplicativo.
                </div>
            </div>

            <div className="w-full h-full flex flex-col gap-6 p-6 md:p-8">
                <Card
                    title="Nome do Sistema"
                    bordered
                >
                    CLINFARMA Calc. é uma abreviação para calculadora de escores voltados ao farmacêutico clínco.
                </Card>
                <Card
                    title="Missão e Valores"
                    bordered
                >
                    Desenvolver um website como ferramenta que disponibilize os principais escores utilizados pelos farmacêuticos do estado do Rio Grande do Sul para o acompanhamento farmacoterapêutico buscando otimizar o processo do cuidado farmacêutico na prática clínica
                </Card>
                <Card
                    title="Equipe"
                    bordered
                >
                    A equipe é composta pela comunidade interna da UFCSPA. A mestranda Marina Gassen liderou a criação de conteúdo do aplicativo, enquanto a graduanda Giovanna Mello foi responsável pelo desenvolvimento do sistema web. As professoras Dras. Carine Blatt e Cecília Dias forneceram orientação essencial ao longo do projeto. Este sistema foi criado em parceria com a Secretaria da Saúde do Rio Grande do Sul, para a qual a UFCSPA cedeu o sistema após sua conclusão.
                </Card>
            </div>
        </div>
    );
}