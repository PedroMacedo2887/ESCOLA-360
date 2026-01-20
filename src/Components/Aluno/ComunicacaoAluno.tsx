import { useState } from "react";
import "../Styles/ComunicacaoAluno.css";

interface Aviso {
  id: string;
  titulo: string;
  conteudo: string;
  origem: "Escola" | "Professor" | "Coordenação";
  data: string;
  prioridade: "Baixa" | "Normal" | "Alta";
}

interface Mensagem {
  id: string;
  remetente: string;
  assunto: string;
  conteudo: string;
  data: string;
  lida: boolean;
}

export default function ComunicacaoAluno() {
  const [aba, setAba] = useState("avisos");
  const [expandedAviso, setExpandedAviso] = useState<string | null>(null);

  const avisos: Aviso[] = [
    {
      id: "1",
      titulo: "Semana de Recuperação",
      conteudo:
        "A próxima semana será dedicada a aulas de recuperação para alunos com dificuldades. Compareça conforme sua disciplina.",
      origem: "Coordenação",
      data: "2024-01-11",
      prioridade: "Alta",
    },
    {
      id: "2",
      titulo: "Entrega de Uniforme",
      conteudo:
        "Os uniformes escolares estarão disponíveis para entrega na próxima semana na secretaria.",
      origem: "Escola",
      data: "2024-01-10",
      prioridade: "Normal",
    },
    {
      id: "3",
      titulo: "Mudança de Horário",
      conteudo:
        "A aula de Educação Física foi transferida para às 14h. Fiquem atentos!",
      origem: "Professor",
      data: "2024-01-09",
      prioridade: "Normal",
    },
  ];

  const mensagens: Mensagem[] = [
    {
      id: "1",
      remetente: "Prof. Carlos Silva",
      assunto: "Resultado da Prova",
      conteudo: "Sua prova foi corrigida. Você obteve 8.5! Parabéns!",
      data: "2024-01-08",
      lida: true,
    },
    {
      id: "2",
      remetente: "Coordenação Escolar",
      assunto: "Reunião com Responsável",
      conteudo:
        "Sua mãe tem uma reunião agendada para o dia 15/01 às 14h com a coordenação.",
      data: "2024-01-07",
      lida: true,
    },
    {
      id: "3",
      remetente: "Profa. Ana Paula",
      assunto: "Feedback - Trabalho de Português",
      conteudo:
        "Seu trabalho foi muito bom, mas procure melhorar a formatação. Parabéns!",
      data: "2024-01-05",
      lida: false,
    },
  ];

  const topicosForum = [
    {
      id: "1",
      titulo: "Dúvida - Cálculo de Funções",
      autor: "Aluno A",
      disciplina: "Matemática",
      respostas: 3,
      data: "2024-01-10",
    },
    {
      id: "2",
      titulo: "Resumo - Revolução Francesa",
      autor: "Aluno B",
      disciplina: "História",
      respostas: 5,
      data: "2024-01-09",
    },
    {
      id: "3",
      titulo: "Como estudar para a prova de Inglês",
      autor: "Aluno C",
      disciplina: "Inglês",
      respostas: 7,
      data: "2024-01-08",
    },
  ];

  const getPrioridadeColor = (prioridade: string) => {
    const cores: Record<string, string> = {
      Alta: "#F44336",
      Normal: "#FFC107",
      Baixa: "#4CAF50",
    };
    return cores[prioridade] || "#999";
  };

  const getOrigemColor = (origem: string) => {
    const cores: Record<string, string> = {
      Escola: "#667eea",
      Professor: "#45B7D1",
      Coordenação: "#764ba2",
    };
    return cores[origem] || "#999";
  };

  return (
    <div className="comunicacao-aluno">
      <h2>Comunicação</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "avisos" ? "active" : ""}`}
          onClick={() => setAba("avisos")}
        >
          📢 Avisos
        </button>
        <button
          className={`aba-btn ${aba === "mensagens" ? "active" : ""}`}
          onClick={() => setAba("mensagens")}
        >
          💬 Mensagens
        </button>
        <button
          className={`aba-btn ${aba === "forum" ? "active" : ""}`}
          onClick={() => setAba("forum")}
        >
          💭 Fórum da Turma
        </button>
      </div>

      {/* Avisos */}
      {aba === "avisos" && (
        <div className="avisos-section">
          <h3>Avisos e Comunicados</h3>
          <div className="avisos-lista">
            {avisos.map((aviso) => (
              <div key={aviso.id} className="aviso-card">
                <div className="aviso-header">
                  <div className="aviso-titulo-origem">
                    <h4>{aviso.titulo}</h4>
                    <span
                      className="origem-badge"
                      style={{
                        backgroundColor: getOrigemColor(aviso.origem),
                      }}
                    >
                      {aviso.origem}
                    </span>
                  </div>
                  <span
                    className="prioridade-badge"
                    style={{
                      backgroundColor: getPrioridadeColor(aviso.prioridade),
                    }}
                  >
                    {aviso.prioridade}
                  </span>
                </div>
                <p className="aviso-data">
                  {new Date(aviso.data).toLocaleDateString("pt-BR")}
                </p>
                <div
                  className={`aviso-conteudo ${
                    expandedAviso === aviso.id ? "expanded" : ""
                  }`}
                >
                  <p>{aviso.conteudo}</p>
                </div>
                <button
                  className="btn-expandir"
                  onClick={() =>
                    setExpandedAviso(
                      expandedAviso === aviso.id ? null : aviso.id
                    )
                  }
                >
                  {expandedAviso === aviso.id ? "▼ Menos" : "▶ Mais"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mensagens */}
      {aba === "mensagens" && (
        <div className="mensagens-section">
          <h3>Minhas Mensagens</h3>
          <div className="mensagens-lista">
            {mensagens.map((msg) => (
              <div
                key={msg.id}
                className={`mensagem-card ${msg.lida ? "lida" : "nao-lida"}`}
              >
                <div className="mensagem-header">
                  <div className="mensagem-dados">
                    <strong>{msg.remetente}</strong>
                    <p className="mensagem-assunto">{msg.assunto}</p>
                  </div>
                  {!msg.lida && <span className="novo-indicator">●</span>}
                </div>
                <p className="mensagem-conteudo">{msg.conteudo}</p>
                <div className="mensagem-footer">
                  <span className="mensagem-data">
                    {new Date(msg.data).toLocaleDateString("pt-BR")}
                  </span>
                  <button className="btn-responder">✉️ Responder</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fórum */}
      {aba === "forum" && (
        <div className="forum-section">
          <h3>Fórum/Mural da Turma</h3>
          <button className="btn-novo-topico">➕ Criar Novo Tópico</button>

          <div className="forum-topicos">
            {topicosForum.map((topico) => (
              <div key={topico.id} className="topico-card">
                <div className="topico-header">
                  <h4>{topico.titulo}</h4>
                  <span className="topico-disciplina">{topico.disciplina}</span>
                </div>
                <p className="topico-autor">Por: {topico.autor}</p>
                <div className="topico-footer">
                  <span className="topico-respostas">
                    💬 {topico.respostas} resposta
                    {topico.respostas !== 1 ? "s" : ""}
                  </span>
                  <span className="topico-data">
                    {new Date(topico.data).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <button className="btn-participa">
                  Participar da Discussão
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
