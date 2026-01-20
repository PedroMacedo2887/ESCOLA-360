import { useState } from "react";
import "../Styles/GestaoTurmas.css";

interface Aluno {
  id: string;
  nome: string;
  matricula: string;
  contato: string;
  presenca: number;
  media: number;
  status: "Ativo" | "Inativo" | "Transferido";
}

interface Turma {
  nome: string;
  alunos: Aluno[];
}

export default function GestaoTurmas() {
  const [turmaAtiva, setTurmaAtiva] = useState("9º Ano A");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNovoAluno, setShowNovoAluno] = useState(false);
  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    matricula: "",
    contato: "",
  });

  const turmas: Record<string, Turma> = {
    "9º Ano A": {
      nome: "9º Ano A",
      alunos: [
        {
          id: "1",
          nome: "João Silva Santos",
          matricula: "2024001",
          contato: "(11) 98765-4321",
          presenca: 95,
          media: 8.5,
          status: "Ativo",
        },
        {
          id: "2",
          nome: "Maria Oliveira Costa",
          matricula: "2024002",
          contato: "(11) 99876-5432",
          presenca: 88,
          media: 7.8,
          status: "Ativo",
        },
        {
          id: "3",
          nome: "Pedro Santos Silva",
          matricula: "2024003",
          contato: "(11) 97654-3210",
          presenca: 92,
          media: 8.2,
          status: "Ativo",
        },
        {
          id: "4",
          nome: "Ana Paula Ferreira",
          matricula: "2024004",
          contato: "(11) 96543-2109",
          presenca: 85,
          media: 7.5,
          status: "Ativo",
        },
      ],
    },
    "9º Ano B": {
      nome: "9º Ano B",
      alunos: [
        {
          id: "5",
          nome: "Lucas Martins Costa",
          matricula: "2024005",
          contato: "(11) 95432-1098",
          presenca: 90,
          media: 8.0,
          status: "Ativo",
        },
        {
          id: "6",
          nome: "Carla Mendes Silva",
          matricula: "2024006",
          contato: "(11) 94321-0987",
          presenca: 78,
          media: 6.9,
          status: "Ativo",
        },
      ],
    },
    "8º Ano A": {
      nome: "8º Ano A",
      alunos: [
        {
          id: "7",
          nome: "Rafael Gomes Santos",
          matricula: "2024007",
          contato: "(11) 93210-9876",
          presenca: 93,
          media: 8.7,
          status: "Ativo",
        },
        {
          id: "8",
          nome: "Fernanda Rocha Costa",
          matricula: "2024008",
          contato: "(11) 92109-8765",
          presenca: 87,
          media: 7.6,
          status: "Ativo",
        },
      ],
    },
  };

  const alunosFiltrados =
    turmas[turmaAtiva]?.alunos.filter((aluno) =>
      aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  const handleAdicionarAluno = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoAluno.nome && novoAluno.matricula) {
      // Lógica para adicionar aluno
      setNovoAluno({ nome: "", matricula: "", contato: "" });
      setShowNovoAluno(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ativo":
        return "#4CAF50";
      case "Inativo":
        return "#FFC107";
      case "Transferido":
        return "#F44336";
      default:
        return "#757575";
    }
  };

  return (
    <div className="gestao-turmas">
      <h2>Gestão de Turmas e Alunos</h2>

      {/* Seleção de Turma */}
      <div className="turmas-selector">
        {Object.keys(turmas).map((turma) => (
          <button
            key={turma}
            className={`turma-btn ${turmaAtiva === turma ? "active" : ""}`}
            onClick={() => setTurmaAtiva(turma)}
          >
            {turma}
          </button>
        ))}
      </div>

      {/* Ferramentas */}
      <div className="ferramentas">
        <input
          type="text"
          placeholder="Buscar aluno..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn-adicionar"
          onClick={() => setShowNovoAluno(!showNovoAluno)}
        >
          + Novo Aluno
        </button>
      </div>

      {/* Formulário Novo Aluno */}
      {showNovoAluno && (
        <div className="novo-aluno-form">
          <form onSubmit={handleAdicionarAluno}>
            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                value={novoAluno.nome}
                onChange={(e) =>
                  setNovoAluno({ ...novoAluno, nome: e.target.value })
                }
                placeholder="Digite o nome do aluno"
              />
            </div>
            <div className="form-group">
              <label>Matrícula</label>
              <input
                type="text"
                value={novoAluno.matricula}
                onChange={(e) =>
                  setNovoAluno({ ...novoAluno, matricula: e.target.value })
                }
                placeholder="Digite a matrícula"
              />
            </div>
            <div className="form-group">
              <label>Contato Responsável</label>
              <input
                type="tel"
                value={novoAluno.contato}
                onChange={(e) =>
                  setNovoAluno({ ...novoAluno, contato: e.target.value })
                }
                placeholder="(11) 9xxxx-xxxx"
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn-salvar">
                Salvar
              </button>
              <button
                type="button"
                className="btn-cancelar"
                onClick={() => setShowNovoAluno(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tabela de Alunos */}
      <div className="alunos-container">
        <table className="alunos-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Matrícula</th>
              <th>Contato</th>
              <th>Presença</th>
              <th>Média</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {alunosFiltrados.map((aluno) => (
              <tr key={aluno.id}>
                <td className="aluno-nome">{aluno.nome}</td>
                <td>{aluno.matricula}</td>
                <td>{aluno.contato}</td>
                <td>
                  <div className="presenca-bar">
                    <div
                      className="presenca-fill"
                      style={{ width: `${aluno.presenca}%` }}
                    >
                      {aluno.presenca}%
                    </div>
                  </div>
                </td>
                <td className="media">{aluno.media.toFixed(2)}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(aluno.status) }}
                  >
                    {aluno.status}
                  </span>
                </td>
                <td>
                  <button className="btn-acao">Ver Histórico</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Resumo da Turma */}
      <div className="resumo-turma">
        <h3>Resumo da Turma {turmaAtiva}</h3>
        <div className="resumo-cards">
          <div className="resumo-card">
            <span className="resumo-label">Total de Alunos</span>
            <span className="resumo-valor">{alunosFiltrados.length}</span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Média da Turma</span>
            <span className="resumo-valor">
              {(
                alunosFiltrados.reduce((sum, a) => sum + a.media, 0) /
                alunosFiltrados.length
              ).toFixed(2)}
            </span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Presença Média</span>
            <span className="resumo-valor">
              {Math.round(
                alunosFiltrados.reduce((sum, a) => sum + a.presenca, 0) /
                  alunosFiltrados.length
              )}
              %
            </span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Alunos Ativos</span>
            <span className="resumo-valor">
              {alunosFiltrados.filter((a) => a.status === "Ativo").length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
