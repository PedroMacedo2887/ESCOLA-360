import { useState } from "react";
import "../Styles/ConteudoMateriais.css";

interface Material {
  id: string;
  titulo: string;
  disciplina: string;
  tipo: "PDF" | "Vídeo" | "Apresentação" | "Link";
  professor: string;
  data: string;
  url?: string;
}

interface PlanoAula {
  id: string;
  data: string;
  disciplina: string;
  professor: string;
  conteudo: string;
  material?: string;
}

export default function ConteudoMateriais() {
  const [aba, setAba] = useState("materiais");

  const materiais: Material[] = [
    {
      id: "1",
      titulo: "Apostila - Equações do 2º Grau",
      disciplina: "Matemática",
      tipo: "PDF",
      professor: "Prof. Carlos Silva",
      data: "2024-01-10",
      url: "#",
    },
    {
      id: "2",
      titulo: "Vídeo - Revolução Francesa",
      disciplina: "História",
      tipo: "Vídeo",
      professor: "Prof. Roberto Ferreira",
      data: "2024-01-09",
      url: "#",
    },
    {
      id: "3",
      titulo: "Apresentação - Fotossíntese",
      disciplina: "Ciências",
      tipo: "Apresentação",
      professor: "Profa. Marina Costa",
      data: "2024-01-08",
      url: "#",
    },
    {
      id: "4",
      titulo: "Dicionário Online de Inglês",
      disciplina: "Inglês",
      tipo: "Link",
      professor: "Prof. Lucas Martin",
      data: "2024-01-07",
      url: "#",
    },
    {
      id: "5",
      titulo: "Atlas Geográfico Interativo",
      disciplina: "Geografia",
      tipo: "Link",
      professor: "Profa. Fernanda Silva",
      data: "2024-01-06",
      url: "#",
    },
  ];

  const planosAula: PlanoAula[] = [
    {
      id: "1",
      data: "2024-01-12",
      disciplina: "Matemática",
      professor: "Prof. Carlos Silva",
      conteudo: "Continuação de Equações do 2º Grau - Exercícios práticos",
      material: "Apostila e Vídeoaula",
    },
    {
      id: "2",
      data: "2024-01-13",
      disciplina: "Português",
      professor: "Profa. Ana Paula",
      conteudo: "Literatura - Modernismo Brasileiro",
      material: "Slides e Links de estudo",
    },
    {
      id: "3",
      data: "2024-01-14",
      disciplina: "Ciências",
      professor: "Profa. Marina Costa",
      conteudo: "Genética - Lei de Mendel",
      material: "Apresentação interativa",
    },
    {
      id: "4",
      data: "2024-01-15",
      disciplina: "História",
      professor: "Prof. Roberto Ferreira",
      conteudo: "Era Vargas - Contexto político",
      material: "Documentário",
    },
  ];

  const cronograma = [
    { mes: "Janeiro", eventos: ["Início aulas", "Avaliação diagnóstica"] },
    { mes: "Fevereiro", eventos: ["Provas 1º Bimestre", "Carnaval"] },
    { mes: "Março", eventos: ["Recuperação", "Semana de Integração"] },
    { mes: "Abril", eventos: ["Páscoa", "Avaliação 2º Bimestre"] },
    {
      mes: "Maio",
      eventos: ["Feriado do Trabalho", "Projetos Interdisciplinares"],
    },
    { mes: "Junho", eventos: ["Encerramento 1º Semestre", "Recesso"] },
  ];

  const exercicios = [
    {
      id: "1",
      titulo: "Lista de Exercícios - Funções",
      disciplina: "Matemática",
      dataEntrega: "2024-01-18",
      status: "Pendente",
    },
    {
      id: "2",
      titulo: "Leitura - Dom Casmurro",
      disciplina: "Português",
      dataEntrega: "2024-01-20",
      status: "Entregue",
    },
    {
      id: "3",
      titulo: "Experimento - Densidade dos Líquidos",
      disciplina: "Ciências",
      dataEntrega: "2024-01-17",
      status: "Entregue",
    },
  ];

  const getTipoIcon = (tipo: string) => {
    const icons: Record<string, string> = {
      PDF: "📄",
      Vídeo: "🎥",
      Apresentação: "📊",
      Link: "🔗",
    };
    return icons[tipo] || "📎";
  };

  const getTipoColor = (tipo: string) => {
    const cores: Record<string, string> = {
      PDF: "#FF6B6B",
      Vídeo: "#4ECDC4",
      Apresentação: "#45B7D1",
      Link: "#96CEB4",
    };
    return cores[tipo] || "#999";
  };

  return (
    <div className="conteudo-materiais">
      <h2>Conteúdo e Materiais</h2>

      {/* Abas */}
      <div className="abas-container">
        <button
          className={`aba-btn ${aba === "materiais" ? "active" : ""}`}
          onClick={() => setAba("materiais")}
        >
          📁 Materiais Didáticos
        </button>
        <button
          className={`aba-btn ${aba === "planos" ? "active" : ""}`}
          onClick={() => setAba("planos")}
        >
          📋 Planos de Aula
        </button>
        <button
          className={`aba-btn ${aba === "cronograma" ? "active" : ""}`}
          onClick={() => setAba("cronograma")}
        >
          📅 Cronograma
        </button>
        <button
          className={`aba-btn ${aba === "exercicios" ? "active" : ""}`}
          onClick={() => setAba("exercicios")}
        >
          ✏️ Exercícios
        </button>
      </div>

      {/* Materiais Didáticos */}
      {aba === "materiais" && (
        <div className="materiais-section">
          <h3>Materiais Disponíveis</h3>
          <div className="materiais-grid">
            {materiais.map((material) => (
              <div key={material.id} className="material-card">
                <div className="material-icon">
                  {getTipoIcon(material.tipo)}
                </div>
                <h4>{material.titulo}</h4>
                <div className="material-info">
                  <span className="material-disciplina">
                    {material.disciplina}
                  </span>
                  <span
                    className="material-tipo"
                    style={{
                      backgroundColor: getTipoColor(material.tipo),
                    }}
                  >
                    {material.tipo}
                  </span>
                </div>
                <p className="material-professor">{material.professor}</p>
                <p className="material-data">
                  {new Date(material.data).toLocaleDateString("pt-BR")}
                </p>
                <button className="btn-download">⬇️ Download/Acessar</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Planos de Aula */}
      {aba === "planos" && (
        <div className="planos-section">
          <h3>Próximas Aulas</h3>
          <div className="planos-lista">
            {planosAula.map((plano) => (
              <div key={plano.id} className="plano-card">
                <div className="plano-header">
                  <span className="plano-data">
                    {new Date(plano.data).toLocaleDateString("pt-BR")}
                  </span>
                  <h4>{plano.disciplina}</h4>
                </div>
                <p className="plano-professor">{plano.professor}</p>
                <p className="plano-conteudo">{plano.conteudo}</p>
                <p className="plano-material">
                  <strong>Materiais:</strong> {plano.material}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cronograma */}
      {aba === "cronograma" && (
        <div className="cronograma-section">
          <h3>Cronograma do Ano Letivo</h3>
          <div className="cronograma-grid">
            {cronograma.map((item, index) => (
              <div key={index} className="cronograma-card">
                <h4>{item.mes}</h4>
                <ul className="evento-lista">
                  {item.eventos.map((evento, idx) => (
                    <li key={idx}>
                      <span className="evento-ponto">•</span>
                      {evento}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exercícios e Atividades */}
      {aba === "exercicios" && (
        <div className="exercicios-section">
          <h3>Exercícios e Atividades Online</h3>
          <div className="exercicios-lista">
            {exercicios.map((exercicio) => (
              <div key={exercicio.id} className="exercicio-card">
                <div className="exercicio-header">
                  <h4>{exercicio.titulo}</h4>
                  <span
                    className={`status-badge ${exercicio.status.toLowerCase()}`}
                  >
                    {exercicio.status}
                  </span>
                </div>
                <p className="exercicio-disciplina">{exercicio.disciplina}</p>
                <p className="exercicio-entrega">
                  Entrega até:{" "}
                  <strong>
                    {new Date(exercicio.dataEntrega).toLocaleDateString(
                      "pt-BR"
                    )}
                  </strong>
                </p>
                <div className="exercicio-actions">
                  {exercicio.status === "Pendente" ? (
                    <>
                      <button className="btn-aceitar">📝 Responder</button>
                      <button className="btn-info">ℹ️ Ver Instruções</button>
                    </>
                  ) : (
                    <>
                      <button className="btn-info">📋 Ver Resposta</button>
                      <button className="btn-info">⭐ Ver Feedback</button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
