import { useState } from "react";
import "../Styles/ServicosExtras.css";

interface Atividade {
  id: string;
  nome: string;
  descricao: string;
  horario: string;
  local: string;
  vagas: number;
  inscritos: number;
  status: "Disponível" | "Inscrever" | "Inscrito" | "Completo";
}

interface DocumentoSolicitacao {
  id: string;
  tipo: string;
  descricao: string;
  data_solicitacao?: string;
  status: "Disponível" | "Solicitado" | "Pronto";
}

export default function ServicosExtras() {
  const [aba, setAba] = useState("agenda");
  const [atividadesInscritas, setAtividadesInscritas] = useState<string[]>([
    "1",
  ]);
  const [documentosSolicitados, setDocumentosSolicitados] = useState<string[]>([
    "1",
  ]);

  const agendaEscolar = [
    {
      data: "12/01",
      evento: "Reunião com Responsáveis",
      horario: "14h às 16h",
    },
    {
      data: "15/01",
      evento: "Feira de Ciências",
      horario: "8h às 12h",
    },
    {
      data: "18/01",
      evento: "Semana de Provas - 1º Bimestre",
      horario: "Durante as aulas",
    },
    {
      data: "25/01",
      evento: "Encerramento de Atividades do Bimestre",
      horario: "10h às 14h",
    },
    {
      data: "29/01",
      evento: "Recesso Escolar",
      horario: "Sem aulas",
    },
  ];

  const atividades: Atividade[] = [
    {
      id: "1",
      nome: "Clube de Robótica",
      descricao: "Construção e programação de robôs educacionais",
      horario: "Terça e Quinta - 15h às 16h30",
      local: "Sala de Informática",
      vagas: 20,
      inscritos: 12,
      status: atividadesInscritas.includes("1") ? "Inscrito" : "Disponível",
    },
    {
      id: "2",
      nome: "Clube de Leitura",
      descricao: "Discussões sobre obras literárias",
      horario: "Quarta - 15h às 16h",
      local: "Biblioteca",
      vagas: 15,
      inscritos: 8,
      status: atividadesInscritas.includes("2") ? "Inscrito" : "Disponível",
    },
    {
      id: "3",
      nome: "Time de Futebol",
      descricao: "Treinos e jogos intramurais",
      horario: "Segunda e Quinta - 16h às 17h",
      local: "Quadra Poliesportiva",
      vagas: 20,
      inscritos: 18,
      status: atividadesInscritas.includes("3") ? "Inscrito" : "Inscrever",
    },
    {
      id: "4",
      nome: "Aulas de Música",
      descricao: "Aprendizado de instrumentos musicais",
      horario: "Sexta - 15h às 16h",
      local: "Sala de Música",
      vagas: 10,
      inscritos: 10,
      status: "Completo",
    },
    {
      id: "5",
      nome: "Grupo de Teatro",
      descricao: "Peças teatrais e dramatizações",
      horario: "Terça e Quinta - 16h às 17h30",
      local: "Auditório",
      vagas: 25,
      inscritos: 14,
      status: atividadesInscritas.includes("5") ? "Inscrito" : "Disponível",
    },
  ];

  const documentosSolicitaveis: DocumentoSolicitacao[] = [
    {
      id: "1",
      tipo: "Declaração de Matrícula",
      descricao: "Comprovante de que você está matriculado na escola",
      status: documentosSolicitados.includes("1") ? "Pronto" : "Disponível",
      data_solicitacao: documentosSolicitados.includes("1")
        ? "2024-01-10"
        : undefined,
    },
    {
      id: "2",
      tipo: "Histórico Escolar",
      descricao:
        "Registro de todas as notas e disciplinas cursadas até o momento",
      status: documentosSolicitados.includes("2") ? "Solicitado" : "Disponível",
      data_solicitacao: documentosSolicitados.includes("2")
        ? "2024-01-09"
        : undefined,
    },
    {
      id: "3",
      tipo: "Atestado de Frequência",
      descricao: "Documento que atesta sua frequência escolar",
      status: "Disponível",
    },
    {
      id: "4",
      tipo: "Declaração de Conclusão do Ensino",
      descricao: "Documento para comprovação de conclusão de série/ano",
      status: "Disponível",
    },
  ];

  const handleInscreverAtividade = (id: string) => {
    if (!atividadesInscritas.includes(id)) {
      setAtividadesInscritas([...atividadesInscritas, id]);
    }
  };

  const handleSolicitarDocumento = (id: string) => {
    if (!documentosSolicitados.includes(id)) {
      setDocumentosSolicitados([...documentosSolicitados, id]);
    }
  };

  const getStatusCorAtvidade = (status: string) => {
    const cores: Record<string, string> = {
      Disponível: "#4CAF50",
      Inscrever: "#45B7D1",
      Inscrito: "#FFC107",
      Completo: "#F44336",
    };
    return cores[status] || "#999";
  };

  const getStatusCorDocumento = (status: string) => {
    const cores: Record<string, string> = {
      Disponível: "#45B7D1",
      Solicitado: "#FFC107",
      Pronto: "#4CAF50",
    };
    return cores[status] || "#999";
  };

  return (
    <div className="servicos-extras">
      <h2>Serviços Extras</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "agenda" ? "active" : ""}`}
          onClick={() => setAba("agenda")}
        >
          📅 Agenda Escolar
        </button>
        <button
          className={`aba-btn ${aba === "atividades" ? "active" : ""}`}
          onClick={() => setAba("atividades")}
        >
          🎯 Atividades Extracurriculares
        </button>
        <button
          className={`aba-btn ${aba === "documentos" ? "active" : ""}`}
          onClick={() => setAba("documentos")}
        >
          📄 Solicitar Documentos
        </button>
      </div>

      {/* Agenda Escolar */}
      {aba === "agenda" && (
        <div className="agenda-section">
          <h3>Calendário e Eventos Escolares</h3>
          <div className="agenda-lista">
            {agendaEscolar.map((item, index) => (
              <div key={index} className="agenda-item">
                <div className="agenda-data">
                  <span className="data-dia">{item.data.split("/")[0]}</span>
                  <span className="data-mes">{item.data.split("/")[1]}</span>
                </div>
                <div className="agenda-conteudo">
                  <h4>{item.evento}</h4>
                  <p className="agenda-horario">🕐 {item.horario}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Feriados e Datas Importantes */}
          <div className="feriados-box">
            <h4>📌 Datas Importantes</h4>
            <ul className="feriados-lista">
              <li>
                <strong>05/02</strong> - Carnaval (feriado nacional - sem aulas)
              </li>
              <li>
                <strong>29/03</strong> - Sexta-feira Santa (feriado prolongado)
              </li>
              <li>
                <strong>21/04</strong> - Tiradentes (feriado nacional - sem
                aulas)
              </li>
              <li>
                <strong>01/05</strong> - Dia do Trabalho (feriado nacional - sem
                aulas)
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Atividades Extracurriculares */}
      {aba === "atividades" && (
        <div className="atividades-section">
          <h3>Atividades Extracurriculares</h3>
          <div className="atividades-grid">
            {atividades.map((atividade) => (
              <div key={atividade.id} className="atividade-card">
                <div className="atividade-header">
                  <h4>{atividade.nome}</h4>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: getStatusCorAtvidade(atividade.status),
                    }}
                  >
                    {atividade.status}
                  </span>
                </div>
                <p className="atividade-descricao">{atividade.descricao}</p>
                <div className="atividade-info">
                  <p>
                    <strong>📅 Horário:</strong> {atividade.horario}
                  </p>
                  <p>
                    <strong>📍 Local:</strong> {atividade.local}
                  </p>
                </div>
                <div className="atividade-vagas">
                  <span className="vagas-info">
                    Vagas: {atividade.inscritos}/{atividade.vagas}
                  </span>
                  <div className="vagas-bar">
                    <div
                      className="vagas-fill"
                      style={{
                        width: `${
                          (atividade.inscritos / atividade.vagas) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                {atividade.status === "Disponível" && (
                  <button
                    className="btn-inscrever"
                    onClick={() => handleInscreverAtividade(atividade.id)}
                  >
                    ✓ Inscrever-se
                  </button>
                )}
                {atividade.status === "Inscrever" && (
                  <button
                    className="btn-inscrever"
                    onClick={() => handleInscreverAtividade(atividade.id)}
                  >
                    ✓ Inscrever-se
                  </button>
                )}
                {atividade.status === "Inscrito" && (
                  <button className="btn-inscrito" disabled>
                    ✓ Inscrito
                  </button>
                )}
                {atividade.status === "Completo" && (
                  <button className="btn-completo" disabled>
                    ✗ Completo
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Solicitar Documentos */}
      {aba === "documentos" && (
        <div className="documentos-section">
          <h3>Solicitação de Documentos</h3>
          <div className="documentos-grid">
            {documentosSolicitaveis.map((doc) => (
              <div key={doc.id} className="documento-card">
                <div className="documento-header">
                  <h4>{doc.tipo}</h4>
                  <span
                    className="status-badge"
                    style={{
                      backgroundColor: getStatusCorDocumento(doc.status),
                    }}
                  >
                    {doc.status}
                  </span>
                </div>
                <p className="documento-descricao">{doc.descricao}</p>

                {doc.status === "Disponível" && (
                  <button
                    className="btn-solicitar"
                    onClick={() => handleSolicitarDocumento(doc.id)}
                  >
                    📝 Solicitar
                  </button>
                )}

                {doc.status === "Solicitado" && (
                  <div className="documento-info">
                    <p className="info-texto">
                      ⏳ Solicitado em{" "}
                      {new Date(doc.data_solicitacao || "").toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                    <p className="info-texto">Aguarde a liberação...</p>
                  </div>
                )}

                {doc.status === "Pronto" && (
                  <div className="documento-pronto">
                    <p className="pronto-info">
                      ✓ Disponível desde{" "}
                      {new Date(doc.data_solicitacao || "").toLocaleDateString(
                        "pt-BR"
                      )}
                    </p>
                    <button className="btn-download">
                      ⬇️ Baixar Documento
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Observações */}
          <div className="documentos-observacoes">
            <h4>⚠️ Informações Importantes</h4>
            <ul>
              <li>Documentos geralmente ficam prontos em até 3 dias úteis</li>
              <li>
                Você pode baixar os documentos digitais diretamente deste portal
              </li>
              <li>Para documentos físicos, procure a secretaria da escola</li>
              <li>Documentos costumam ser cobrados uma taxa de reprodução</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
