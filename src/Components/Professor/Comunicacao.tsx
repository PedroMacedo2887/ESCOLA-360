import { useState } from "react";
import "../Styles/Comunicacao.css";

interface Mensagem {
  id: string;
  destinatario: string;
  tipo: "Aluno" | "Responsável" | "Turma";
  assunto: string;
  mensagem: string;
  data: string;
  status: "Enviado" | "Pendente";
}

interface Aviso {
  id: string;
  titulo: string;
  descricao: string;
  data: string;
  prioridade: "Baixa" | "Normal" | "Alta";
}

export default function Comunicacao() {
  const [aba, setAba] = useState("mensagens");
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: "1",
      destinatario: "João Silva Santos",
      tipo: "Aluno",
      assunto: "Resultado da Prova",
      mensagem: "Sua prova foi corrigida. Confira seu desempenho.",
      data: "2024-01-15",
      status: "Enviado",
    },
    {
      id: "2",
      destinatario: "Turma 9º Ano A",
      tipo: "Turma",
      assunto: "Aula de Amanhã",
      mensagem: "Tragam o material didático para a próxima aula.",
      data: "2024-01-14",
      status: "Enviado",
    },
  ]);

  const [avisos, setAvisos] = useState<Aviso[]>([
    {
      id: "1",
      titulo: "Entrega de Notas",
      descricao: "Prazo limite para entrega de notas é dia 30",
      data: "2024-01-12",
      prioridade: "Alta",
    },
    {
      id: "2",
      titulo: "Reunião de Pais",
      descricao: "Reunião bimestral com responsáveis no dia 25",
      data: "2024-01-10",
      prioridade: "Normal",
    },
  ]);

  const [showNovaMsg, setShowNovaMsg] = useState(false);
  const [novaMensagem, setNovaMensagem] = useState({
    destinatario: "",
    tipo: "Aluno" as const,
    assunto: "",
    mensagem: "",
  });

  const [showNovoAviso, setShowNovoAviso] = useState(false);
  const [novoAviso, setNovoAviso] = useState({
    titulo: "",
    descricao: "",
    prioridade: "Normal" as const,
  });

  const handleEnviarMensagem = (e: React.FormEvent) => {
    e.preventDefault();
    if (novaMensagem.destinatario && novaMensagem.assunto) {
      const novoId = String(mensagens.length + 1);
      setMensagens([
        ...mensagens,
        {
          id: novoId,
          ...novaMensagem,
          data: new Date().toISOString().split("T")[0],
          status: "Enviado",
        },
      ]);
      setNovaMensagem({
        destinatario: "",
        tipo: "Aluno",
        assunto: "",
        mensagem: "",
      });
      setShowNovaMsg(false);
    }
  };

  const handleAdicionarAviso = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoAviso.titulo) {
      const novoId = String(avisos.length + 1);
      setAvisos([
        ...avisos,
        {
          id: novoId,
          ...novoAviso,
          data: new Date().toISOString().split("T")[0],
        },
      ]);
      setNovoAviso({ titulo: "", descricao: "", prioridade: "Normal" });
      setShowNovoAviso(false);
    }
  };

  const getPrioridadeColor = (prioridade: string) => {
    const cores: Record<string, string> = {
      Alta: "#F44336",
      Normal: "#FFC107",
      Baixa: "#4CAF50",
    };
    return cores[prioridade] || "#999";
  };

  const getTipoIcon = (tipo: string) => {
    const icons: Record<string, string> = {
      Aluno: "👤",
      Responsável: "👨‍👩‍👧",
      Turma: "👥",
    };
    return icons[tipo] || "💬";
  };

  return (
    <div className="comunicacao">
      <h2>Comunicação</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "mensagens" ? "active" : ""}`}
          onClick={() => setAba("mensagens")}
        >
          💬 Mensagens
        </button>
        <button
          className={`aba-btn ${aba === "avisos" ? "active" : ""}`}
          onClick={() => setAba("avisos")}
        >
          📢 Avisos e Lembretes
        </button>
        <button
          className={`aba-btn ${aba === "forum" ? "active" : ""}`}
          onClick={() => setAba("forum")}
        >
          💭 Fórum/Mural
        </button>
      </div>

      {/* Mensagens */}
      {aba === "mensagens" && (
        <div className="mensagens-section">
          <div className="section-header">
            <h3>Enviar Mensagens</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovaMsg(!showNovaMsg)}
            >
              + Nova Mensagem
            </button>
          </div>

          {showNovaMsg && (
            <div className="nova-mensagem-form">
              <form onSubmit={handleEnviarMensagem}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Para (Destinatário)</label>
                    <input
                      type="text"
                      value={novaMensagem.destinatario}
                      onChange={(e) =>
                        setNovaMensagem({
                          ...novaMensagem,
                          destinatario: e.target.value,
                        })
                      }
                      placeholder="Nome do aluno ou responsável"
                    />
                  </div>
                  <div className="form-group">
                    <label>Tipo</label>
                    <select
                      value={novaMensagem.tipo}
                      onChange={(e) =>
                        setNovaMensagem({
                          ...novaMensagem,
                          tipo: e.target.value as any,
                        })
                      }
                    >
                      <option value="Aluno">Aluno</option>
                      <option value="Responsável">Responsável</option>
                      <option value="Turma">Turma</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Assunto</label>
                  <input
                    type="text"
                    value={novaMensagem.assunto}
                    onChange={(e) =>
                      setNovaMensagem({
                        ...novaMensagem,
                        assunto: e.target.value,
                      })
                    }
                    placeholder="Assunto da mensagem"
                  />
                </div>
                <div className="form-group">
                  <label>Mensagem</label>
                  <textarea
                    value={novaMensagem.mensagem}
                    onChange={(e) =>
                      setNovaMensagem({
                        ...novaMensagem,
                        mensagem: e.target.value,
                      })
                    }
                    placeholder="Digite sua mensagem"
                    rows={5}
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Enviar Mensagem
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovaMsg(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="mensagens-lista">
            {mensagens.map((msg) => (
              <div key={msg.id} className="mensagem-card">
                <div className="mensagem-header">
                  <span className="mensagem-icone">
                    {getTipoIcon(msg.tipo)}
                  </span>
                  <div className="mensagem-info">
                    <h4>{msg.assunto}</h4>
                    <p className="mensagem-destinatario">
                      Para: {msg.destinatario}
                    </p>
                  </div>
                  <span className="mensagem-status">✓ {msg.status}</span>
                </div>
                <p className="mensagem-conteudo">{msg.mensagem}</p>
                <span className="mensagem-data">
                  {new Date(msg.data).toLocaleDateString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Avisos */}
      {aba === "avisos" && (
        <div className="avisos-section">
          <div className="section-header">
            <h3>Avisos e Lembretes</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovoAviso(!showNovoAviso)}
            >
              + Novo Aviso
            </button>
          </div>

          {showNovoAviso && (
            <div className="novo-aviso-form">
              <form onSubmit={handleAdicionarAviso}>
                <div className="form-group">
                  <label>Título</label>
                  <input
                    type="text"
                    value={novoAviso.titulo}
                    onChange={(e) =>
                      setNovoAviso({
                        ...novoAviso,
                        titulo: e.target.value,
                      })
                    }
                    placeholder="Título do aviso"
                  />
                </div>
                <div className="form-group">
                  <label>Descrição</label>
                  <textarea
                    value={novoAviso.descricao}
                    onChange={(e) =>
                      setNovoAviso({
                        ...novoAviso,
                        descricao: e.target.value,
                      })
                    }
                    placeholder="Detalhe o aviso"
                    rows={4}
                  />
                </div>
                <div className="form-group">
                  <label>Prioridade</label>
                  <select
                    value={novoAviso.prioridade}
                    onChange={(e) =>
                      setNovoAviso({
                        ...novoAviso,
                        prioridade: e.target.value as any,
                      })
                    }
                  >
                    <option value="Baixa">Baixa</option>
                    <option value="Normal">Normal</option>
                    <option value="Alta">Alta</option>
                  </select>
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Publicar Aviso
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovoAviso(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="avisos-lista">
            {avisos.map((aviso) => (
              <div key={aviso.id} className="aviso-card">
                <div className="aviso-prioridade">
                  <span
                    className="prioridade-badge"
                    style={{
                      backgroundColor: getPrioridadeColor(aviso.prioridade),
                    }}
                  >
                    {aviso.prioridade}
                  </span>
                </div>
                <h4>{aviso.titulo}</h4>
                <p>{aviso.descricao}</p>
                <span className="aviso-data">
                  {new Date(aviso.data).toLocaleDateString("pt-BR")}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fórum/Mural */}
      {aba === "forum" && (
        <div className="forum-section">
          <h3>Fórum/Mural de Recados</h3>
          <div className="forum-container">
            <div className="forum-post">
              <div className="post-header">
                <span className="post-autor">Prof. Carlos Silva</span>
                <span className="post-data">15 jan, 10:30</span>
              </div>
              <p className="post-conteudo">
                Informo que as provas do bimestre serão no próximo mês. Todos
                devem estudar com antecedência!
              </p>
              <div className="post-actions">
                <button className="btn-acao">Responder</button>
                <button className="btn-acao">Curtir</button>
              </div>
            </div>

            <div className="forum-post">
              <div className="post-header">
                <span className="post-autor">Aluno: João Silva</span>
                <span className="post-data">14 jan, 14:20</span>
              </div>
              <p className="post-conteudo">
                Professor, posso enviar o trabalho com atraso?
              </p>
              <div className="post-actions">
                <button className="btn-acao">Responder</button>
                <button className="btn-acao">Curtir</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
