import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";

export default function HowToUsePage() {
    return (
        <div className="w-full flex flex-col md:flex-row md:h-[calc(100vh-80px-96px)]">
            {/* Painel lateral */}
            <div
                className="h-full w-full md:max-w-96 flex flex-col justify-center text-white py-12 px-6 md:px-8 text-center"
                style={{
                    background:
                        "linear-gradient(125deg, var(--color-primary) 50%, var(--color-primary-light) 50%)",
                }}
            >
                <FontAwesomeIcon icon={faCircleQuestion} className="text-8xl" />
                <div className="mt-8 text-3xl font-semibold">
                    Como Utilizar o Sistema
                </div>
                <div className="mt-6 text-lg">
                    Encontre guias sobre navegar pelas funcionalidades do nosso
                    sistema de forma eficiente.
                </div>
            </div>

            {/* Conteúdo principal - com overflow-auto para permitir scroll */}
            <div className="h-full w-full overflow-auto">
                <div className="p-6 md:p-8">
                    <Card
                        title="Como Usar o CLINFARMA Calc"
                        bordered={false}
                        className="bg-gray-50"
                    >
                        <p className="mb-6">
                            O CLINFARMA Calc é uma ferramenta digital desenvolvida
                            para apoiar farmacêuticos e demais profissionais de saúde
                            na tomada de decisão, por meio de algoritmos baseados em
                            evidências científicas.
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            1. Escolha o Algoritmo
                        </h3>
                        <p>
                            No menu principal, selecione o algoritmo ou escala clínica
                            que deseja utilizar (ex.: adesão ao tratamento, causalidade
                            de reações adversas, controle da Asma e DPOC, entre outros).
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            2. Preencha os Campos Solicitados
                        </h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Cada algoritmo apresenta perguntas ou variáveis específicas.</li>
                            <li>Insira as informações de acordo com o caso clínico do paciente.</li>
                            <li>Utilize sempre dados atualizados e corretos para maior precisão dos resultados.</li>
                            <li>
                                Após preencher todos os campos, clique em
                                <strong> Calcular</strong>.
                            </li>
                            <li>
                                O sistema gera automaticamente a pontuação obtida e as
                                recomendações clínicas correspondentes.
                            </li>
                        </ul>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            3. Baixe os Resultados
                        </h3>
                        <p>
                            Você pode realizar o download do resultado em formato PDF, facilitando o registro
                            em prontuário e a documentação clínica.
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            4. Utilize na Prática Clínica
                        </h3>
                        <p>
                            Os resultados oferecem suporte para ajustes de tratamento, acompanhamento de
                            pacientes, identificação de riscos e otimização da farmacoterapia.
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            5. Registre e Documente
                        </h3>
                        <p>
                            Recomendamos que os resultados sejam anexados ao prontuário ou ficha de
                            acompanhamento do paciente. Isso contribui para a continuidade do cuidado e
                            avaliação dos desfechos clínicos.
                        </p>

                        <h3 className="font-semibold text-lg mt-6 mb-2">
                            6. Atenção Importante
                        </h3>
                        <p>
                            O CLINFARMA Calc não substitui a avaliação clínica profissional. É uma
                            ferramenta de apoio à decisão, devendo sempre ser utilizada em conjunto com
                            protocolos institucionais e diretrizes clínicas.
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
