import { useState } from "react";
import "../Styles/PlanejamentoConteudo.css";

interface PlanoAula {
  id: string;
  titulo: string;
  data: string;
  conteudo: string;
  materiais: string[];
}

interface Material {
  id: string;
  nome: string;
  tipo: "PDF" | "Vídeo" | "Apresentação" | "Documento";
  dataCriacao: string;
}

export default function PlanejamentoConteudo() {
  const [aba, setAba] = useState("planos");
  const [planosAula, setPlanosAula] = useState<PlanoAula[]>([
    {
      id: "1",
      titulo: "Equações do 2º Grau",
      data: "2024-01-15",
      conteudo: "Introdução às equações quadráticas, fórmula de Bhaskara",
      materiais: ["Apresentação.pptx", "Exercícios.pdf"],
    },
    {
      id: "2",
      titulo: "Geometria Plana",
      data: "2024-01-22",
      conteudo: "Estudo de triângulos e suas propriedades",
      materiais: ["Vídeo-Aula.mp4"],
    },
  ]);

  const [materiais, setMateriais] = useState<Material[]>([
    {
      id: "1",
      nome: "Apresentação Aula 1",
      tipo: "Apresentação",
      dataCriacao: "2024-01-10",
    },
    {
      id: "2",
      nome: "Lista de Exercícios",
      tipo: "PDF",
      dataCriacao: "2024-01-10",
    },
    {
      id: "3",
      nome: "Vídeo Explicativo",
      tipo: "Vídeo",
      dataCriacao: "2024-01-11",
    },
  ]);

  const [showNovoPlano, setShowNovoPlano] = useState(false);
  const [novoPlano, setNovoPlano] = useState({
    titulo: "",
    data: "",
    conteudo: "",
  });

  const [showNovoMaterial, setShowNovoMaterial] = useState(false);
  const [novoMaterial, setNovoMaterial] = useState({
    nome: "",
    tipo: "PDF" as const,
  });

  const handleAdicionarPlano = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoPlano.titulo && novoPlano.data) {
      const novoId = String(planosAula.length + 1);
      setPlanosAula([
        ...planosAula,
        {
          id: novoId,
          ...novoPlano,
          materiais: [],
        },
      ]);
      setNovoPlano({ titulo: "", data: "", conteudo: "" });
      setShowNovoPlano(false);
    }
  };

  const handleAdicionarMaterial = (e: React.FormEvent) => {
    e.preventDefault();
    if (novoMaterial.nome) {
      const novoId = String(materiais.length + 1);
      setMateriais([
        ...materiais,
        {
          id: novoId,
          ...novoMaterial,
          dataCriacao: new Date().toISOString().split("T")[0],
        },
      ]);
      setNovoMaterial({ nome: "", tipo: "PDF" });
      setShowNovoMaterial(false);
    }
  };

  const getTipoColor = (tipo: string) => {
    const cores: Record<string, string> = {
      PDF: "#FF6B6B",
      Vídeo: "#4ECDC4",
      Apresentação: "#45B7D1",
      Documento: "#96CEB4",
    };
    return cores[tipo] || "#999";
  };

  const getTipoIcon = (tipo: string) => {
    const icons: Record<string, string> = {
      PDF: "📄",
      Vídeo: "🎥",
      Apresentação: "📊",
      Documento: "📝",
    };
    return icons[tipo] || "📎";
  };

  return (
    <div className="planejamento-conteudo">
      <h2>Planejamento e Conteúdo</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "planos" ? "active" : ""}`}
          onClick={() => setAba("planos")}
        >
          📋 Planos de Aula
        </button>
        <button
          className={`aba-btn ${aba === "materiais" ? "active" : ""}`}
          onClick={() => setAba("materiais")}
        >
          📁 Materiais Didáticos
        </button>
        <button
          className={`aba-btn ${aba === "agenda" ? "active" : ""}`}
          onClick={() => setAba("agenda")}
        >
          📅 Agenda e Cronograma
        </button>
      </div>

      {/* Planos de Aula */}
      {aba === "planos" && (
        <div className="planos-section">
          <div className="section-header">
            <h3>Planos de Aula</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovoPlano(!showNovoPlano)}
            >
              + Novo Plano
            </button>
          </div>

          {showNovoPlano && (
            <div className="novo-plano-form">
              <form onSubmit={handleAdicionarPlano}>
                <div className="form-group">
                  <label>Título da Aula</label>
                  <input
                    type="text"
                    value={novoPlano.titulo}
                    onChange={(e) =>
                      setNovoPlano({ ...novoPlano, titulo: e.target.value })
                    }
                    placeholder="Ex: Equações do 2º Grau"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Data da Aula</label>
                    <input
                      type="date"
                      value={novoPlano.data}
                      onChange={(e) =>
                        setNovoPlano({ ...novoPlano, data: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Conteúdo</label>
                  <textarea
                    value={novoPlano.conteudo}
                    onChange={(e) =>
                      setNovoPlano({ ...novoPlano, conteudo: e.target.value })
                    }
                    placeholder="Descreva o conteúdo da aula"
                    rows={4}
                  />
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Salvar Plano
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovoPlano(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="planos-lista">
            {planosAula.map((plano) => (
              <div key={plano.id} className="plano-card">
                <div className="plano-header">
                  <h4>{plano.titulo}</h4>
                  <span className="plano-data">
                    {new Date(plano.data).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                <p className="plano-conteudo">{plano.conteudo}</p>
                {plano.materiais.length > 0 && (
                  <div className="plano-materiais">
                    <strong>Materiais:</strong>
                    <span>{plano.materiais.join(", ")}</span>
                  </div>
                )}
                <div className="plano-actions">
                  <button className="btn-acao">Editar</button>
                  <button className="btn-acao">Deletar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Materiais Didáticos */}
      {aba === "materiais" && (
        <div className="materiais-section">
          <div className="section-header">
            <h3>Materiais Didáticos</h3>
            <button
              className="btn-adicionar"
              onClick={() => setShowNovoMaterial(!showNovoMaterial)}
            >
              + Upload de Material
            </button>
          </div>

          {showNovoMaterial && (
            <div className="novo-material-form">
              <form onSubmit={handleAdicionarMaterial}>
                <div className="form-group">
                  <label>Nome do Material</label>
                  <input
                    type="text"
                    value={novoMaterial.nome}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        nome: e.target.value,
                      })
                    }
                    placeholder="Digite o nome do material"
                  />
                </div>
                <div className="form-group">
                  <label>Tipo</label>
                  <select
                    value={novoMaterial.tipo}
                    onChange={(e) =>
                      setNovoMaterial({
                        ...novoMaterial,
                        tipo: e.target.value as any,
                      })
                    }
                  >
                    <option value="PDF">PDF</option>
                    <option value="Vídeo">Vídeo</option>
                    <option value="Apresentação">Apresentação</option>
                    <option value="Documento">Documento</option>
                  </select>
                </div>
                <div className="form-buttons">
                  <button type="submit" className="btn-salvar">
                    Fazer Upload
                  </button>
                  <button
                    type="button"
                    className="btn-cancelar"
                    onClick={() => setShowNovoMaterial(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="materiais-grid">
            {materiais.map((material) => (
              <div key={material.id} className="material-card">
                <div className="material-icon">
                  {getTipoIcon(material.tipo)}
                </div>
                <h4>{material.nome}</h4>
                <div className="material-tipo">
                  <span
                    className="tipo-badge"
                    style={{ backgroundColor: getTipoColor(material.tipo) }}
                  >
                    {material.tipo}
                  </span>
                </div>
                <p className="material-data">
                  {new Date(material.dataCriacao).toLocaleDateString("pt-BR")}
                </p>
                <div className="material-actions">
                  <button className="btn-acao">Compartilhar</button>
                  <button className="btn-acao">Deletar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Agenda e Cronograma */}
      {aba === "agenda" && (
        <div className="agenda-section">
          <h3>Agenda e Cronograma</h3>
          <div className="agenda-calendar">
            <div className="calendario">
              <table className="calendar-table">
                <thead>
                  <tr>
                    <th>Seg</th>
                    <th>Ter</th>
                    <th>Qua</th>
                    <th>Qui</th>
                    <th>Sex</th>
                    <th>Sab</th>
                    <th>Dom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td className="evento">4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>9</td>
                    <td className="evento">10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td className="evento">16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                    <td>25</td>
                    <td className="evento">26</td>
                    <td>27</td>
                    <td>28</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="proximos-eventos">
              <h4>Próximos Eventos</h4>
              <ul className="eventos-lista">
                <li>
                  <span className="data-evento">15 jan</span> - Aula sobre
                  Equações
                </li>
                <li>
                  <span className="data-evento">20 jan</span> - Prova de
                  Geometria
                </li>
                <li>
                  <span className="data-evento">25 jan</span> - Entrega de
                  Trabalhos
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
