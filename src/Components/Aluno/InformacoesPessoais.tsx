import "../Styles/InformacoesPessoais.css";

interface Disciplina {
  nome: string;
  professor: string;
  bimestre1: number;
  bimestre2: number;
  bimestre3: number;
  bimestre4: number;
  media: number;
  frequencia: number;
  status: "Aprovado" | "Reprovado" | "Recuperação";
}

export default function InformacoesPessoais() {
  const alunoData = {
    nome: "João Silva Santos",
    matricula: "2024001",
    turma: "9º Ano A",
    data_nascimento: "15/06/2010",
    responsavel: "Maria Silva Santos",
    contato_responsavel: "(11) 98765-4321",
    email: "joao.silva@email.com",
    periodo: "2024",
  };

  const disciplinas: Disciplina[] = [
    {
      nome: "Português",
      professor: "Profa. Ana Paula",
      bimestre1: 8.5,
      bimestre2: 8.0,
      bimestre3: 8.5,
      bimestre4: 9.0,
      media: 8.5,
      frequencia: 95,
      status: "Aprovado",
    },
    {
      nome: "Matemática",
      professor: "Prof. Carlos Silva",
      bimestre1: 7.0,
      bimestre2: 7.5,
      bimestre3: 8.0,
      bimestre4: 8.5,
      media: 7.75,
      frequencia: 92,
      status: "Aprovado",
    },
    {
      nome: "Ciências",
      professor: "Profa. Marina Costa",
      bimestre1: 8.0,
      bimestre2: 8.5,
      bimestre3: 9.0,
      bimestre4: 9.5,
      media: 8.75,
      frequencia: 98,
      status: "Aprovado",
    },
    {
      nome: "História",
      professor: "Prof. Roberto Ferreira",
      bimestre1: 9.0,
      bimestre2: 9.5,
      bimestre3: 9.0,
      bimestre4: 8.5,
      media: 9.0,
      frequencia: 96,
      status: "Aprovado",
    },
    {
      nome: "Geografia",
      professor: "Profa. Fernanda Silva",
      bimestre1: 7.5,
      bimestre2: 7.0,
      bimestre3: 7.5,
      bimestre4: 8.0,
      media: 7.5,
      frequencia: 88,
      status: "Aprovado",
    },
    {
      nome: "Inglês",
      professor: "Prof. Lucas Martin",
      bimestre1: 6.5,
      bimestre2: 6.0,
      bimestre3: 6.5,
      bimestre4: 7.0,
      media: 6.5,
      frequencia: 90,
      status: "Recuperação",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovado":
        return "#4CAF50";
      case "Recuperação":
        return "#FFC107";
      case "Reprovado":
        return "#F44336";
      default:
        return "#757575";
    }
  };

  return (
    <div className="informacoes-pessoais">
      <h2>Minhas Informações</h2>

      {/* Dados Pessoais */}
      <div className="dados-pessoais">
        <h3>Dados Pessoais</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>Nome Completo</label>
            <span>{alunoData.nome}</span>
          </div>
          <div className="info-item">
            <label>Matrícula</label>
            <span>{alunoData.matricula}</span>
          </div>
          <div className="info-item">
            <label>Turma</label>
            <span>{alunoData.turma}</span>
          </div>
          <div className="info-item">
            <label>Data de Nascimento</label>
            <span>{alunoData.data_nascimento}</span>
          </div>
          <div className="info-item">
            <label>Email</label>
            <span>{alunoData.email}</span>
          </div>
          <div className="info-item">
            <label>Período Letivo</label>
            <span>{alunoData.periodo}</span>
          </div>
        </div>
      </div>

      {/* Dados Responsável */}
      <div className="dados-responsavel">
        <h3>Dados do Responsável</h3>
        <div className="info-grid">
          <div className="info-item">
            <label>Nome do Responsável</label>
            <span>{alunoData.responsavel}</span>
          </div>
          <div className="info-item">
            <label>Contato</label>
            <span>{alunoData.contato_responsavel}</span>
          </div>
        </div>
      </div>

      {/* Boletim Atualizado */}
      <div className="boletim-section">
        <h3>Boletim Escolar - Período {alunoData.periodo}</h3>
        <div className="boletim-table-container">
          <table className="boletim-table">
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Professor</th>
                <th>1º Bim</th>
                <th>2º Bim</th>
                <th>3º Bim</th>
                <th>4º Bim</th>
                <th>Média</th>
                <th>Frequência</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {disciplinas.map((disc, index) => (
                <tr key={index}>
                  <td className="disc-nome">{disc.nome}</td>
                  <td className="professor">{disc.professor}</td>
                  <td className="nota">{disc.bimestre1.toFixed(1)}</td>
                  <td className="nota">{disc.bimestre2.toFixed(1)}</td>
                  <td className="nota">{disc.bimestre3.toFixed(1)}</td>
                  <td className="nota">{disc.bimestre4.toFixed(1)}</td>
                  <td className="media">{disc.media.toFixed(2)}</td>
                  <td className="frequencia">{disc.frequencia}%</td>
                  <td>
                    <span
                      className="status-badge"
                      style={{
                        backgroundColor: getStatusColor(disc.status),
                      }}
                    >
                      {disc.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Resumo */}
        <div className="resumo-notas">
          <div className="resumo-card">
            <span className="resumo-label">Média Geral</span>
            <span className="resumo-valor">
              {(
                disciplinas.reduce((sum, d) => sum + d.media, 0) /
                disciplinas.length
              ).toFixed(2)}
            </span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Frequência Média</span>
            <span className="resumo-valor">
              {Math.round(
                disciplinas.reduce((sum, d) => sum + d.frequencia, 0) /
                  disciplinas.length
              )}
              %
            </span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Disciplinas Aprovadas</span>
            <span className="resumo-valor">
              {disciplinas.filter((d) => d.status === "Aprovado").length}
            </span>
          </div>
          <div className="resumo-card">
            <span className="resumo-label">Em Recuperação</span>
            <span className="resumo-valor">
              {disciplinas.filter((d) => d.status === "Recuperação").length}
            </span>
          </div>
        </div>
      </div>

      {/* Frequência Detalhada */}
      <div className="frequencia-section">
        <h3>Frequência por Disciplina</h3>
        <div className="frequencia-grid">
          {disciplinas.map((disc, index) => (
            <div key={index} className="frequencia-card">
              <div className="freq-header">
                <span className="freq-disc">{disc.nome}</span>
                <span className="freq-percent">{disc.frequencia}%</span>
              </div>
              <div className="freq-bar">
                <div
                  className="freq-fill"
                  style={{
                    width: `${disc.frequencia}%`,
                    backgroundColor:
                      disc.frequencia >= 75 ? "#4CAF50" : "#FFC107",
                  }}
                ></div>
              </div>
              <span className="freq-status">
                {disc.frequencia >= 75 ? "✓ Frequência OK" : "⚠️ Atenção"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Observações */}
      <div className="observacoes">
        <h3>Observações Importantes</h3>
        <ul>
          <li>
            <strong>Frequência:</strong> A frequência mínima exigida é 75%
          </li>
          <li>
            <strong>Aprovação:</strong> Média final mínima de 7.0 para aprovação
          </li>
          <li>
            <strong>Recuperação:</strong> Alunos com média entre 5.0 e 6.9 terão
            aulas de recuperação
          </li>
          <li>
            <strong>Reprovação:</strong> Média inferior a 5.0 resultará em
            reprovação
          </li>
          <li>Dúvidas? Procure a coordenação ou seu professor</li>
        </ul>
      </div>
    </div>
  );
}
