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

            <div className="w-full h-full overflow-auto">
                <div className="flex flex-col gap-6 p-6 md:p-8">
                <Card
                    title="Nome do Sistema"
                    bordered
                >
                    CLINFARMA Calc é a sigla para "Calculadora de Escores em Cuidado Farmacêutico", uma ferramenta desenvolvida para apoiar farmacêuticos na prática clínica, por meio do uso de escores validados.
                </Card>
                <Card
                    title="Equipe"
                    bordered
                >
                    A criação de conteúdo foi realizada pela mestranda Marina Gassen e o desenvolvimento do sistema web pelos graduandos Giovanna Mello e João Victor Fernandes, todos vinculados à Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA) e orientados pelas professoras Dra. Carine Raquel Blatt e Dra. Cecília Dias.
                    Todos os elementos que constituem esse website foram validados pela equipe do Departamento de Assistência Farmacêutica da Secretaria da Saúde do Estado do Rio Grande do Sul.
                </Card>
                </div>
            </div>
        </div>
    );
}