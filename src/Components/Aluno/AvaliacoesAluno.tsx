import { useState } from "react";
import "../Styles/AvaliacoesAluno.css";

interface Avaliacao {
  id: string;
  titulo: string;
  disciplina: string;
  professor: string;
  dataProva: string;
  tipo: "Prova" | "Trabalho" | "Questionário" | "Teste";
  status: "Agendada" | "Realizada" | "Corrigida";
}

interface NotaAluno {
  id: string;
  avaliacao: string;
  disciplina: string;
  professor: string;
  nota?: number;
  feedback?: string;
  dataCorrecao?: string;
  status: "Aguardando" | "Corrigida";
}

export default function AvaliacoesAluno() {
  const [aba, setAba] = useState("agendadas");

  const avaliacoesAgendadas: Avaliacao[] = [
    {
      id: "1",
      titulo: "Prova - Equações do 2º Grau",
      disciplina: "Matemática",
      professor: "Prof. Carlos Silva",
      dataProva: "2024-01-18",
      tipo: "Prova",
      status: "Agendada",
    },
    {
      id: "2",
      titulo: "Questionário - Fotoentese",
      disciplina: "Ciências",
      professor: "Profa. Marina Costa",
      dataProva: "2024-01-20",
      tipo: "Questionário",
      status: "Agendada",
    },
    {
      id: "3",
      titulo: "Trabalho em Grupo - Revolução Francesa",
      disciplina: "História",
      professor: "Prof. Roberto Ferreira",
      dataProva: "2024-01-25",
      tipo: "Trabalho",
      status: "Agendada",
    },
  ];

  const notasAluno: NotaAluno[] = [
    {
      id: "1",
      avaliacao: "Prova 1 - Polinômios",
      disciplina: "Matemática",
      professor: "Prof. Carlos Silva",
      nota: 8.5,
      feedback: "Excelente desempenho! Continue assim.",
      dataCorrecao: "2024-01-08",
      status: "Corrigida",
    },
    {
      id: "2",
      avaliacao: "Trabalho - Leitura de Dom Casmurro",
      disciplina: "Português",
      professor: "Profa. Ana Paula",
      nota: 7.8,
      feedback:
        "Boa análise. Procure aprofundar mais nas interpretações textuais.",
      dataCorrecao: "2024-01-09",
      status: "Corrigida",
    },
    {
      id: "3",
      avaliacao: "Teste - Mapas Políticos",
      disciplina: "Geografia",
      professor: "Profa. Fernanda Silva",
      nota: 6.5,
      feedback:
        "Resultado satisfatório. Estude mais sobre capitais e fronteiras.",
      dataCorrecao: "2024-01-06",
      status: "Corrigida",
    },
    {
      id: "4",
      avaliacao: "Questionário Online - Fotossíntese",
      disciplina: "Ciências",
      professor: "Profa. Marina Costa",
      status: "Aguardando",
    },
  ];

  const simulados = [
    {
      id: "1",
      titulo: "Simulado - ENEM Matemática",
      disciplina: "Matemática",
      questoes: 45,
      tempoLimite: 180,
      pontuacao: null,
      status: "Disponível",
    },
    {
      id: "2",
      titulo: "Simulado - ENEM Português",
      disciplina: "Português",
      questoes: 45,
      tempoLimite: 180,
      pontuacao: null,
      status: "Disponível",
    },
    {
      id: "3",
      titulo: "Quiz - Revolução Francesa",
      disciplina: "História",
      questoes: 10,
      tempoLimite: 15,
      pontuacao: 90,
      status: "Realizado",
    },
  ];

  const getTipoIcon = (tipo: string) => {
    const icons: Record<string, string> = {
      Prova: "📝",
      Trabalho: "📚",
      Questionário: "❓",
      Teste: "✅",
    };
    return icons[tipo] || "📋";
  };

  const getTipoColor = (tipo: string) => {
    const cores: Record<string, string> = {
      Prova: "#FF6B6B",
      Trabalho: "#4ECDC4",
      Questionário: "#45B7D1",
      Teste: "#96CEB4",
    };
    return cores[tipo] || "#999";
  };

  const getNotaColor = (nota: number) => {
    if (nota >= 7) return "#4CAF50";
    if (nota >= 5) return "#FFC107";
    return "#F44336";
  };

  return (
    <div className="avaliacoes-aluno">
      <h2>Avaliações</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "agendadas" ? "active" : ""}`}
          onClick={() => setAba("agendadas")}
        >
          📅 Agendadas
        </button>
        <button
          className={`aba-btn ${aba === "notas" ? "active" : ""}`}
          onClick={() => setAba("notas")}
        >
          📊 Notas e Feedback
        </button>
        <button
          className={`aba-btn ${aba === "simulados" ? "active" : ""}`}
          onClick={() => setAba("simulados")}
        >
          🎯 Simulados e Quizzes
        </button>
      </div>

      {/* Avaliações Agendadas */}
      {aba === "agendadas" && (
        <div className="agendadas-section">
          <h3>Próximas Avaliações</h3>
          <div className="avaliacoes-grid">
            {avaliacoesAgendadas.map((avaliacao) => (
              <div key={avaliacao.id} className="avaliacao-card">
                <div className="avaliacao-header">
                  <span className="avaliacao-icon">
                    {getTipoIcon(avaliacao.tipo)}
                  </span>
                  <span
                    className="tipo-badge"
                    style={{
                      backgroundColor: getTipoColor(avaliacao.tipo),
                    }}
                  >
                    {avaliacao.tipo}
                  </span>
                </div>
                <h4>{avaliacao.titulo}</h4>
                <p className="avaliacao-disciplina">{avaliacao.disciplina}</p>
                <p className="avaliacao-professor">{avaliacao.professor}</p>
                <div className="avaliacao-data">
                  <strong>Data:</strong>{" "}
                  {new Date(avaliacao.dataProva).toLocaleDateString("pt-BR")}
                </div>
                <div className="avaliacao-dias">
                  {Math.ceil(
                    (new Date(avaliacao.dataProva).getTime() -
                      new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  ) > 0 && (
                    <span className="dias-faltam">
                      ⏰{" "}
                      {Math.ceil(
                        (new Date(avaliacao.dataProva).getTime() -
                          new Date().getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      dias para prova
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notas e Feedback */}
      {aba === "notas" && (
        <div className="notas-section">
          <h3>Minhas Notas e Feedback</h3>
          <div className="notas-lista">
            {notasAluno.map((nota) => (
              <div key={nota.id} className="nota-card">
                <div className="nota-header">
                  <div className="nota-info">
                    <h4>{nota.avaliacao}</h4>
                    <p className="nota-disciplina">{nota.disciplina}</p>
                    <p className="nota-professor">{nota.professor}</p>
                  </div>
                  {nota.nota ? (
                    <div className="nota-resultado">
                      <span
                        className="nota-numero"
                        style={{
                          backgroundColor: getNotaColor(nota.nota),
                        }}
                      >
                        {nota.nota.toFixed(1)}
                      </span>
                      {nota.dataCorrecao && (
                        <p className="nota-data">
                          {new Date(nota.dataCorrecao).toLocaleDateString(
                            "pt-BR"
                          )}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="nota-aguardando">
                      <span className="aguardando-badge">Aguardando</span>
                    </div>
                  )}
                </div>
                {nota.feedback && (
                  <div className="nota-feedback">
                    <strong>Feedback do Professor:</strong>
                    <p>{nota.feedback}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Simulados e Quizzes */}
      {aba === "simulados" && (
        <div className="simulados-section">
          <h3>Simulados e Quizzes Interativos</h3>
          <div className="simulados-grid">
            {simulados.map((simulado) => (
              <div key={simulado.id} className="simulado-card">
                <h4>{simulado.titulo}</h4>
                <div className="simulado-info">
                  <p>
                    <strong>Disciplina:</strong> {simulado.disciplina}
                  </p>
                  <p>
                    <strong>Questões:</strong> {simulado.questoes}
                  </p>
                  <p>
                    <strong>Tempo Limite:</strong> {simulado.tempoLimite}{" "}
                    minutos
                  </p>
                </div>

                {simulado.status === "Disponível" ? (
                  <div className="simulado-actions">
                    <button className="btn-iniciar">▶️ Iniciar</button>
                    <span className="novo-badge">NOVO</span>
                  </div>
                ) : (
                  <div className="simulado-resultado">
                    <div className="resultado-score">
                      <strong>Pontuação:</strong>
                      <span
                        className="score"
                        style={{
                          color:
                            simulado.pontuacao !== null &&
                            simulado.pontuacao >= 70
                              ? "#4CAF50"
                              : "#FFC107",
                        }}
                      >
                        {simulado.pontuacao}%
                      </span>
                    </div>
                    <button className="btn-revisar">🔄 Revisar</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
