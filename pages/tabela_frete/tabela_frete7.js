// Dados simulados para as tabelas de frete e rotas/ranges
let tabelasDeFrete = [
    {
        id_tabela: 1,
        tipo_fluxo: "Outbound",
        data_criacao: "2025-07-01", 
        gef: "Grupo A, Empresa X, Filial 1",
        data_inicio: "2025-07-01",
        data_fim: "2025-08-30",
        status: "Rotas validadas",
        observacao: "Tabela anual de 2025 - Etanol e Óleo",
        usuario_registro: "Analista Ítalo",
        usuario_validador: "Diretor Rodrigo",
        agrupadores_permitidos: [2, 3], // IDs dos agrupadores permitidos para esta tabela
        rotas: [
            // 5 Rotas Etanol
            { id: 1, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Rio de Janeiro-RJ", limite_frete: 450.00, status: "Aprovado", data_revisao: "2024-01-05", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 2, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Belo Horizonte-MG", limite_frete: 700.00, status: "Aprovado", data_revisao: "2024-01-05", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 3, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Brasília-DF", limite_frete: 400.00, status: "Aprovado", data_revisao: "2024-01-05", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 4, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Florianópolis-SC", limite_frete: 350.00, status: "Aprovado", data_revisao: "2024-01-05", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 5, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Recife-PE", limite_frete: 950.00, status: "Aprovado", data_revisao: "2024-01-05", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            // 5 Rotas DDGS
            { id: 6, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Curitiba-PR", limite_frete: 480.00, status: "Aprovado", data_revisao: "2024-01-06", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 7, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Chapecó-SC", limite_frete: 550.00, status: "Aprovado", data_revisao: "2024-01-06", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 8, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Vitória-ES", limite_frete: 600.00, status: "Aprovado", data_revisao: "2024-01-06", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 9, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Contagem-MG", limite_frete: 680.00, status: "Aprovado", data_revisao: "2024-01-06", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false },
            { id: 10, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Teresina-PI", limite_frete: 720.00, status: "Aprovado", data_revisao: "2024-01-06", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false }
        ],
        ranges: []
    },
    {
        id_tabela: 2,
        tipo_fluxo: "Inbound",
        data_criacao: "2025-02-01", 
        gef: "Grupo B, Empresa Y, Filial 2",
        data_inicio: "2025-02-01",
        data_fim: "2025-02-30",
        status: "Possui Validações Pendentes",
        observacao: "Tabela de insumos - Milho e Biomassa",
        usuario_registro: "Analista Pedro",
        usuario_validador: "",
        agrupadores_permitidos: [4, 5], // IDs dos agrupadores permitidos para esta tabela
        rotas: [],
        ranges: [
            // 5 Ranges Biomassa (Origem Sinop-MT)
            { id: 1, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", range_km: 150, limite_frete: 150.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 2, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", range_km: 300, limite_frete: 280.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 3, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", range_km: 450, limite_frete: 400.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 4, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", range_km: 600, limite_frete: 550.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 5, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", range_km: 750, limite_frete: 700.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            // 5 Ranges Milho (Origem Sinop-MT)
            { id: 6, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", range_km: 150, limite_frete: 180.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 7, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", range_km: 300, limite_frete: 320.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 8, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", range_km: 450, limite_frete: 480.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 9, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", range_km: 600, limite_frete: 650.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 10, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", range_km: 750, limite_frete: 800.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false }
        ]
    },
    // NOVA TABELA 3 (OUTBOUND - PENDENTE)
    {
        id_tabela: 3,
        tipo_fluxo: "Outbound",
        data_criacao: "2025-07-01", 
        gef: "Grupo C, Empresa Z, Filial 3",
        data_inicio: "2025-07-01",
        data_fim: "2025-07-30",
        status: "Possui Validações Pendentes",
        observacao: "Tabela de Produtos Leves - 2o Semestre",
        usuario_registro: "Analista Ana",
        usuario_validador: "",
        agrupadores_permitidos: [1, 2, 3], // IDs dos agrupadores permitidos para esta tabela
        rotas: [
            { id: 1, id_agrupador: 1, agrupador_nome: "Etanol Neutro", origem: "Sinop-MT", destino: "São José dos Campos-SP", limite_frete: 120.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 2, id_agrupador: 1, agrupador_nome: "Etanol Neutro", origem: "Sinop-MT", destino: "Campinas-SP", limite_frete: 110.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 3, id_agrupador: 2, agrupador_nome: "Etanol", origem: "Sinop-MT", destino: "Franca-SP", limite_frete: 100.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 4, id_agrupador: 3, agrupador_nome: "DDGS", origem: "Sinop-MT", destino: "Ponta Grossa-PR", limite_frete: 140.00, status: "Aprovado", data_revisao: "2024-07-02", usuario_validador: "Diretor Rodrigo", isNew: false, isEdited: false }
        ],
        ranges: []
    },
    // NOVA TABELA 4 (OUTBOUND - PENDENTE)
    {
        id_tabela: 4,
        tipo_fluxo: "Outbound",
        data_criacao: "2025-08-01", 
        gef: "Grupo D, Empresa W, Filial 4",
        data_inicio: "2025-08-01",
        data_fim: "2025-08-30",
        status: "Possui Validações Pendentes",
        observacao: "Tabela Insumos Variados",
        usuario_registro: "Analista Carlos",
        usuario_validador: "",
        agrupadores_permitidos: [4, 5], // IDs dos agrupadores permitidos para esta tabela
        rotas: [
            { id: 1, id_agrupador: 4, agrupador_nome: "Milho", origem: "Sinop-MT", destino: "Paulínia-SP", limite_frete: 250.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false },
            { id: 2, id_agrupador: 5, agrupador_nome: "Biomassa", origem: "Sinop-MT", destino: "São Paulo-SP", limite_frete: 270.00, status: "Pendente", data_revisao: "", usuario_validador: "", isNew: false, isEdited: false }
        ],
        ranges: []
    }
];

let usuarios = [
    { id: 1, nome: "Diretor Rodrigo", perfil: "Diretor" },
    { id: 2, nome: "Gerente Carlos", perfil: "Gerente" },
    { id: 3, nome: "Supervisor Ana", perfil: "Supervisor" },
    { id: 4, nome: "Analista Ítalo", perfil: "Analista" },
    { id: 5, nome: "Analista Pedro", perfil: "Analista" },
    { id: 6, nome: "Analista Ana", perfil: "Analista" },
    { id: 7, nome: "Analista Carlos", perfil: "Analista" }
];

let agrupadoresProdutoMaterial = [
    { id_agrupador: 1, codigo_produto_material: "AGP-ETN", nome_produto_material: "Etanol Neutro", unidade_massa: "Litros" },
    { id_agrupador: 2, codigo_produto_material: "AGP-ETL", nome_produto_material: "Etanol", unidade_massa: "Litros" },
    { id_agrupador: 3, codigo_produto_material: "AGP-DDGS", nome_produto_material: "DDGS", unidade_massa: "KG" },
    { id_agrupador: 4, codigo_produto_material: "AGP-MLH", nome_produto_material: "Milho", unidade_massa: "KG" },
    { id_agrupador: 5, codigo_produto_material: "AGP-BMS", nome_produto_material: "Biomassa", unidade_massa: "Toneladas" }
];

let selectedTabelaId = null;

const tabelasBody = document.getElementById('tabelasBody');
const rotasRangesBody = document.getElementById('rotasRangesBody');
const nomeTabelaSelecionadaSpan = document.getElementById('nomeTabelaSelecionada');
const selectAllRotasRangesCheckbox = document.getElementById('selectAllRotasRanges');
const btnAprovarSelecionadas = document.getElementById('btnAprovarSelecionadas');
const btnReprovarSelecionadas = document.getElementById('btnReprovarSelecionadas');
const colEspecificaHeader = document.getElementById('colEspecificaHeader');
const novaTabelaTipoFluxo = document.getElementById('novaTabelaTipoFluxo');
const btnNovaRotaRange = document.getElementById('btnNovaRotaRange');

// NOVO: Elementos para o dropdown customizado de agrupadores
const agrupadoresCriacaoInput = document.getElementById('agrupadoresCriacaoInput');
const agrupadoresDropdown = document.getElementById('agrupadoresDropdown');
const agrupadoresCriacaoMultiSelect = document.getElementById('agrupadoresCriacaoMultiSelect');

// Variável para armazenar os IDs dos agrupadores selecionados para a nova tabela
let selectedAgrupadoresForNewTableIDs = [];
// Variável para armazenar os nomes dos agrupadores selecionados para exibir no input
let currentSelectedAgrupadoresNames = [];


// Novos filtros de data de vigência
const inicioVigenciaFiltro = document.getElementById('inicioVigenciaFiltro');
const fimVigenciaFiltro = document.getElementById('fimVigenciaFiltro');


// --- Funções de Utilitário ---
function formatDateToDisplay(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

function formatDateForInput(dateString) {
    if (!dateString) return '';
    // Espera 'YYYY-MM-DD' para o input type="date"
    return dateString; 
}

// --- Funções Principais ---

document.addEventListener('DOMContentLoaded', () => {
    btnAprovarSelecionadas.addEventListener('click', aprovarSelecionadas);
    btnReprovarSelecionadas.addEventListener('click', reprovarSelecionadas);
    
    // Inicializa o estado do botão "Nova Rota/Range"
    checkNovaRotaRangeButtonState();
    renderAgrupadoresCriacaoMultiSelect(); // Renderiza as opções para o multi-select de criação
    updateAgrupadoresInputDisplay(); // Atualiza o display inicial do input

    // Adiciona evento de click ao input para mostrar/ocultar o dropdown
    agrupadoresCriacaoInput.addEventListener('click', toggleAgrupadoresDropdown);

    // Esconde o dropdown se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!agrupadoresDropdown.contains(event.target) && event.target !== agrupadoresCriacaoInput) {
            agrupadoresDropdown.classList.remove('show');
        }
    });

    buscarTabelas();
});

// Nova função para controlar o estado do botão "Nova Rota/Range" no detalhe
function checkNovaRotaRangeButtonState() {
    // O botão "Nova Rota/Range" só deve estar habilitado se uma tabela estiver selecionada.
    btnNovaRotaRange.disabled = !selectedTabelaId;
}

function buscarTabelas() {
    tabelasBody.innerHTML = '';
    const tipoTabelaFiltro = document.getElementById('tipoTabelaFiltro').value;
    const statusTabelaFiltro = document.getElementById('statusTabelaFiltro').value;
    
    // Novos filtros de data de vigência
    const filtroInicioVigencia = inicioVigenciaFiltro.value;
    const filtroFimVigencia = fimVigenciaFiltro.value;

    const tabelasFiltradas = tabelasDeFrete.filter(tabela => {
        let matchesTipoTabela;
        if (tipoTabelaFiltro === 'Rota') {
            matchesTipoTabela = tabela.tipo_fluxo === 'Outbound';
        } else if (tipoTabelaFiltro === 'Range') {
            matchesTipoTabela = tabela.tipo_fluxo === 'Inbound';
        } else {
            matchesTipoTabela = true; // Todas
        }

        const matchesStatusTabela = !statusTabelaFiltro || tabela.status === statusTabelaFiltro;
        
        // Lógica de filtro por vigência:
        // A tabela corresponde se (tabela.data_fim >= filtroInicioVigencia OU filtroInicioVigencia está vazio)
        // E (tabela.data_inicio <= filtroFimVigencia OU filtroFimVigencia está vazio)
        let matchesVigencia = true;
        // Se filtroInicioVigencia existe e a data_fim da tabela é anterior ao filtroInicioVigencia, não corresponde
        if (filtroInicioVigencia && tabela.data_fim < filtroInicioVigencia) {
            matchesVigencia = false;
        }
        // Se filtroFimVigencia existe e a data_inicio da tabela é posterior ao filtroFimVigencia, não corresponde
        if (filtroFimVigencia && tabela.data_inicio > filtroFimVigencia) {
            matchesVigencia = false;
        }

        return matchesTipoTabela && matchesStatusTabela && matchesVigencia;
    });

    tabelasFiltradas.forEach(tabela => {
        const row = tabelasBody.insertRow();
        row.dataset.tabelaId = tabela.id_tabela;
        row.onclick = () => selectTabela(tabela.id_tabela);
        
        row.innerHTML = `
            <td>${tabela.id_tabela}</td>
            <td>${tabela.tipo_fluxo}</td>
            <td>${tabela.usuario_registro}</td>
            <td>${formatDateToDisplay(tabela.data_criacao)}</td>
            <td>
                <input type="date" value="${formatDateForInput(tabela.data_inicio)}" class="tabela-data-incio-input" data-tabela-id="${tabela.id_tabela}" title="Editar Data Início Vigência">
            </td>
            <td>
                <input type="date" value="${formatDateForInput(tabela.data_fim)}" class="tabela-data-fim-input" data-tabela-id="${tabela.id_tabela}" title="Editar Data Fim Vigência">
            </td>
            <td class="status-${tabela.status.toLowerCase().replace(/ /g, '')}">${tabela.status}</td>
            <td>${tabela.usuario_validador || 'N/A'}</td> `;

        const dataFimInput = row.querySelector('.tabela-data-fim-input');
        dataFimInput.addEventListener('change', (event) => {
            const tabelaId = parseInt(event.target.dataset.tabelaId);
            const updatedTabela = tabelasDeFrete.find(t => t.id_tabela === tabelaId);
            if (updatedTabela) {
                updatedTabela.data_fim = event.target.value; // Salva no formato,"%Y-%M-%D"
            }
        });

        // Adiciona evento de mudança para a data de início também, se desejar salvá-la
        const dataInicioInput = row.querySelector('.tabela-data-incio-input');
        dataInicioInput.addEventListener('change', (event) => {
            const tabelaId = parseInt(event.target.dataset.tabelaId);
            const updatedTabela = tabelasDeFrete.find(t => t.id_tabela === tabelaId);
            if (updatedTabela) {
                updatedTabela.data_inicio = event.target.value; 
            }
        });

        if (tabela.id_tabela === selectedTabelaId) {
            row.classList.add('selected');
        }
    });
}

function selectTabela(id) {
    const currentSelectedRow = tabelasBody.querySelector('tr.selected');
    if (currentSelectedRow) {
        currentSelectedRow.classList.remove('selected');
    }

    const newSelectedRow = tabelasBody.querySelector(`tr[data-tabela-id="${id}"]`);
    if (newSelectedRow) {
        newSelectedRow.classList.add('selected');
    }

    selectedTabelaId = id;
    const tabela = tabelasDeFrete.find(t => t.id_tabela === id);
    if (tabela) {
        nomeTabelaSelecionadaSpan.textContent = `ID: ${tabela.id_tabela} - Fluxo: ${tabela.tipo_fluxo}`;
        renderRotasRanges(tabela);
    } else {
        nomeTabelaSelecionadaSpan.textContent = `Nenhuma Tabela Selecionada`;
        rotasRangesBody.innerHTML = ''; // Limpa os detalhes se nenhuma tabela estiver selecionada
    }
    checkNovaRotaRangeButtonState(); // Atualiza o estado do botão "Nova Rota/Range"
}

// Renderiza as opções para o multi-select de agrupadores para a CRIAÇÃO de nova tabela
function renderAgrupadoresCriacaoMultiSelect() {
    agrupadoresCriacaoMultiSelect.innerHTML = ''; // Limpa as opções existentes

    agrupadoresProdutoMaterial.forEach(agrupador => {
        const option = document.createElement('option');
        option.value = agrupador.id_agrupador;
        option.textContent = agrupador.nome_produto_material;
        agrupadoresCriacaoMultiSelect.appendChild(option);
    });
}

// NOVO: Exibe ou oculta o dropdown de agrupadores
function toggleAgrupadoresDropdown() {
    agrupadoresDropdown.classList.toggle('show');
}

// NOVO: Aplica a seleção de agrupadores do multi-select para o input de exibição
function aplicarSelecaoAgrupadores() {
    selectedAgrupadoresForNewTableIDs = Array.from(agrupadoresCriacaoMultiSelect.selectedOptions)
                                            .map(option => parseInt(option.value));
    
    currentSelectedAgrupadoresNames = Array.from(agrupadoresCriacaoMultiSelect.selectedOptions)
                                            .map(option => option.textContent);
    
    updateAgrupadoresInputDisplay();
    toggleAgrupadoresDropdown(); // Esconde o dropdown após aplicar
}

// NOVO: Atualiza o texto exibido no input
function updateAgrupadoresInputDisplay() {
    if (currentSelectedAgrupadoresNames.length === 0) {
        agrupadoresCriacaoInput.value = "Clique para selecionar...";
    } else if (currentSelectedAgrupadoresNames.length === 1) {
        agrupadoresCriacaoInput.value = currentSelectedAgrupadoresNames[0];
    } else {
        agrupadoresCriacaoInput.value = `${currentSelectedAgrupadoresNames.length} agrupadores selecionados`;
    }
}


function renderRotasRanges(tabela) {
    rotasRangesBody.innerHTML = '';
    selectAllRotasRangesCheckbox.checked = false;

    colEspecificaHeader.textContent = tabela.tipo_fluxo === 'Outbound' ? 'Destino' : 'Range Km';

    const items = tabela.tipo_fluxo === 'Outbound' ? tabela.rotas : tabela.ranges;

    // Obtém os agrupadores permitidos para ESTA TABELA
    const permittedAgrupadoresIds = tabela.agrupadores_permitidos || [];
    const availableAgrupadores = agrupadoresProdutoMaterial.filter(ag => permittedAgrupadoresIds.includes(ag.id_agrupador));

    items.forEach((item, index) => {
        const row = rotasRangesBody.insertRow();
        row.dataset.index = index;
        row.dataset.tipoItem = tabela.tipo_fluxo === 'Outbound' ? 'rota' : 'range';
        
        const itemIdDisplay = item.id || ''; 

        const specificColumnValue = tabela.tipo_fluxo === 'Outbound' ? item.destino : item.range_km;

        // Determina se o botão de exclusão deve ser desabilitado
        const isDeletable = !(item.status === 'Aprovado' || item.status === 'Reprovada');
        const deleteClass = isDeletable ? '' : 'disabled';
        const deleteOnClick = isDeletable ? `removerRotaRange(${index}, '${tabela.tipo_fluxo}')` : '';
        const deleteTitle = isDeletable ? 'Excluir' : 'Não pode ser excluído após validação';

        row.innerHTML = `
            <td><input type="checkbox" class="select-item-checkbox"></td>
            <td>${itemIdDisplay}</td>
            <td>
                <select data-field="id_agrupador">
                    ${availableAgrupadores.map(ag => `<option value="${ag.id_agrupador}" ${ag.id_agrupador === item.id_agrupador ? 'selected' : ''}>${ag.nome_produto_material}</option>`).join('')}
                </select>
            </td>
            <td><input type="text" value="${item.origem || ''}" data-field="origem"></td>
            <td><input type="text" value="${specificColumnValue || ''}" data-field="${tabela.tipo_fluxo === 'Outbound' ? 'destino' : 'range_km'}"></td>
            <td><input type="number" step="0.01" value="${item.limite_frete || ''}" data-field="limite_frete"></td>
            <td class="status-${(item.status || '').toLowerCase().replace(/ /g, '')}">${item.status || ''}</td>
            <td>${formatDateToDisplay(item.data_revisao)}</td>
            <td>${item.usuario_validador || ''}</td> <td>
                <span class="action-icon ${deleteClass}" onclick="${deleteOnClick}" title="${deleteTitle}">&#128465;</span>
            </td>
        `;

        const inputs = row.querySelectorAll('input[type="text"], input[type="number"], select');
        inputs.forEach(input => {
            input.addEventListener('change', () => {
                item.isEdited = true;
            });
        });
    });
    checkNovaRotaRangeButtonState(); // Atualiza o estado do botão "Nova Rota/Range" após renderizar os itens
    selectAllRotasRangesCheckbox.onchange = toggleAllRotasRangesSelection;
    rotasRangesBody.querySelectorAll('.select-item-checkbox').forEach(checkbox => {
        checkbox.onchange = checkAllRotasRangesSelected;
    });
}

function toggleAllRotasRangesSelection() {
    const isChecked = selectAllRotasRangesCheckbox.checked;
    rotasRangesBody.querySelectorAll('.select-item-checkbox').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}

function checkAllRotasRangesSelected() {
    const allCheckboxes = rotasRangesBody.querySelectorAll('.select-item-checkbox');
    const allChecked = Array.from(allCheckboxes).every(checkbox => checkbox.checked);
    selectAllRotasRangesCheckbox.checked = allChecked && allCheckboxes.length > 0;
}

function novaTabela() {
    // Agora, usamos selectedAgrupadoresForNewTableIDs que já foi preenchido por aplicarSelecaoAgrupadores()
    if (selectedAgrupadoresForNewTableIDs.length === 0) {
        alert("Por favor, selecione pelo menos um Agrupador de Produto/Material para a nova tabela.");
        return;
    }

    const newId = tabelasDeFrete.length > 0 ? Math.max(...tabelasDeFrete.map(t => t.id_tabela)) + 1 : 1;
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // Formato,"%Y-%M-%D" para data input

    const user = usuarios.find(u => u.perfil === "Analista")?.nome || "Usuário Padrão";
    const selectedTipoFluxo = novaTabelaTipoFluxo.value;

    const newTable = {
        id_tabela: newId,
        tipo_fluxo: selectedTipoFluxo, 
        data_criacao: today, 
        gef: "Grupo, Empresa, Filial",
        data_inicio: today,
        data_fim: "", 
        status: "Possui Validações Pendentes",
        observacao: `Nova tabela de frete - ${selectedTipoFluxo === 'Outbound' ? 'Rota' : 'Range'}`,
        usuario_registro: user,
        usuario_validador: "",
        agrupadores_permitidos: [...selectedAgrupadoresForNewTableIDs], // Usa uma cópia para evitar referência direta
        rotas: [],
        ranges: []
    };

    tabelasDeFrete.push(newTable);
    buscarTabelas();
    selectTabela(newId); // Seleciona a nova tabela para exibir seus detalhes
    
    // Reseta o estado do multi-select e o display do input após a criação
    agrupadoresCriacaoMultiSelect.selectedIndex = -1; // Desseleciona todas as opções
    selectedAgrupadoresForNewTableIDs = [];
    currentSelectedAgrupadoresNames = [];
    updateAgrupadoresInputDisplay();

    alert(`Nova Tabela de Frete (ID: ${newId}) criada com sucesso!`);
}


function adicionarNovaRotaRange() {
    if (!selectedTabelaId) {
        alert("Por favor, selecione uma tabela de frete primeiro.");
        return;
    }

    const tabela = tabelasDeFrete.find(t => t.id_tabela === selectedTabelaId);
    if (!tabela) return;

    // Verifica se há agrupadores permitidos para esta tabela (agora definidos apenas na criação)
    if (!tabela.agrupadores_permitidos || tabela.agrupadores_permitidos.length === 0) {
        alert("Esta tabela não possui Agrupadores de Produto/Material definidos. Por favor, crie uma nova tabela e selecione os agrupadores permitidos durante a criação.");
        return;
    }

    let newItem;
    let itemsArray;
    let newId;

    // Define o agrupador padrão para o primeiro agrupador permitido da tabela
    const defaultAgrupador = agrupadoresProdutoMaterial.find(ag => ag.id_agrupador === tabela.agrupadores_permitidos[0]);
    if (!defaultAgrupador) {
        alert("Erro: Nenhum agrupador padrão encontrado para a tabela selecionada. Verifique se os IDs dos agrupadores permitidos são válidos.");
        return;
    }

    if (tabela.tipo_fluxo === 'Outbound') {
        itemsArray = tabela.rotas;
        // Gera um ID para o novo item, garantindo que seja único dentro da lista
        newId = itemsArray.length > 0 ? Math.max(...itemsArray.map(item => item.id || 0)) + 1 : 1;
        newItem = {
            id: newId, 
            id_agrupador: defaultAgrupador.id_agrupador,
            agrupador_nome: defaultAgrupador.nome_produto_material,
            origem: 'Sinop-MT', // Origem padrão
            destino: '',
            limite_frete: 0.00,
            status: "Pendente",
            data_revisao: "",
            usuario_validador: "",
            isNew: true,
            isEdited: true
        };
        tabela.rotas.push(newItem);
    } else { // Inbound
        itemsArray = tabela.ranges;
        // Gera um ID para o novo item, garantindo que seja único dentro da lista
        newId = itemsArray.length > 0 ? Math.max(...itemsArray.map(item => item.id || 0)) + 1 : 1;
        newItem = {
            id: newId, 
            id_agrupador: defaultAgrupador.id_agrupador,
            agrupador_nome: defaultAgrupador.nome_produto_material,
            origem: 'Sinop-MT', // Origem padrão
            range_km: 0,
            limite_frete: 0.00,
            status: "Pendente",
            data_revisao: "",
            usuario_validador: "",
            isNew: true,
            isEdited: true
        };
        tabela.ranges.push(newItem);
    }

    renderRotasRanges(tabela);
    checkAndUpdateTabelaStatus(tabela); // Atualiza o status da tabela principal
    buscarTabelas(); // Recarrega a tabela principal para refletir o status
    selectTabela(selectedTabelaId); // Re-seleciona para manter o foco e o estado do botão
}


function removerRotaRange(index, tipoFluxo) {
    if (!selectedTabelaId) return;

    const tabela = tabelasDeFrete.find(t => t.id_tabela === selectedTabelaId);
    if (!tabela) return;

    let itemsArray;
    if (tipoFluxo === 'Outbound') {
        itemsArray = tabela.rotas;
    } else {
        itemsArray = tabela.ranges;
    }

    const itemToRemove = itemsArray[index];
    if (itemToRemove.status === 'Aprovado' || itemToRemove.status === 'Reprovada') {
        alert("Não é possível remover um item com status 'Aprovado' ou 'Reprovada'.");
        return;
    }

    if (confirm(`Tem certeza que deseja remover este item (ID: ${itemToRemove.id})?`)) {
        itemsArray.splice(index, 1);
        // Reajusta os IDs sequenciais após a remoção (opcional, mas bom para manter a ordem)
        itemsArray.forEach((item, idx) => item.id = idx + 1);

        renderRotasRanges(tabela);
        checkAndUpdateTabelaStatus(tabela);
        buscarTabelas();
        selectTabela(selectedTabelaId);
    }
}

function salvarTabelaDetalhe() {
    if (!selectedTabelaId) {
        alert("Nenhuma tabela selecionada para salvar os detalhes.");
        return;
    }

    const tabela = tabelasDeFrete.find(t => t.id_tabela === selectedTabelaId);
    if (!tabela) return;

    let itemsToUpdate;
    if (tabela.tipo_fluxo === 'Outbound') {
        itemsToUpdate = tabela.rotas;
    } else {
        itemsToUpdate = tabela.ranges;
    }

    let hasErrors = false;
    rotasRangesBody.querySelectorAll('tr').forEach((row, index) => {
        const item = itemsToUpdate[index];
        if (!item) return; // Se o item foi removido, pular

        const tipoItem = row.dataset.tipoItem;

        const agrupadorSelect = row.querySelector('[data-field="id_agrupador"]');
        const origemInput = row.querySelector('[data-field="origem"]');
        const limiteFreteInput = row.querySelector('[data-field="limite_frete"]');
        const specificInput = row.querySelector(`[data-field="${tipoItem === 'rota' ? 'destino' : 'range_km'}"]`);

        // Validação básica de campos
        if (!origemInput.value || !specificInput.value || !limiteFreteInput.value) {
            alert(`Por favor, preencha todos os campos obrigatórios (Origem, ${tipoItem === 'rota' ? 'Destino' : 'Range Km'}, Limite Frete) para o item ID: ${item.id || 'novo'}.`);
            hasErrors = true;
            return; // Sai do forEach se houver erro
        }
        
        // Verifica se o limite_frete é um número válido e positivo
        const parsedLimiteFrete = parseFloat(limiteFreteInput.value);
        if (isNaN(parsedLimiteFrete) || parsedLimiteFrete < 0) {
            alert(`O Limite de Frete para o item ID: ${item.id || 'novo'} deve ser um número positivo.`);
            hasErrors = true;
            return;
        }

        if (tipoItem === 'rota') {
            item.origem = origemInput.value;
            item.destino = specificInput.value;
        } else { // range
            item.origem = origemInput.value;
            const parsedRangeKm = parseFloat(specificInput.value);
            if (isNaN(parsedRangeKm) || parsedRangeKm < 0) {
                alert(`O Range Km para o item ID: ${item.id || 'novo'} deve ser um número positivo.`);
                hasErrors = true;
                return;
            }
            item.range_km = parsedRangeKm;
        }
        item.id_agrupador = parseInt(agrupadorSelect.value);
        // Atualiza o nome do agrupador baseado no ID selecionado
        item.agrupador_nome = agrupadoresProdutoMaterial.find(ag => ag.id_agrupador === item.id_agrupador)?.nome_produto_material || '';
        item.limite_frete = parsedLimiteFrete;

        item.isNew = false;
        item.isEdited = false;
    });

    if (hasErrors) {
        return; // Não prossegue com a atualização se houver erros
    }

    alert("Detalhes da tabela salvos com sucesso!");
    renderRotasRanges(tabela);
    checkAndUpdateTabelaStatus(tabela);
    buscarTabelas();
    selectTabela(selectedTabelaId);
}


function aprovarSelecionadas() {
    if (!selectedTabelaId) {
        alert("Por favor, selecione uma tabela de frete primeiro.");
        return;
    }
    processarSelecaoDeItens('Aprovado');
}

function reprovarSelecionadas() {
    if (!selectedTabelaId) {
        alert("Por favor, selecione uma tabela de frete primeiro.");
        return;
    }
    processarSelecaoDeItens('Reprovada');
}

function processarSelecaoDeItens(statusDesejado) {
    const tabela = tabelasDeFrete.find(t => t.id_tabela === selectedTabelaId);
    if (!tabela) return;

    let itemsToProcess = [];
    rotasRangesBody.querySelectorAll('.select-item-checkbox:checked').forEach(checkbox => {
        const row = checkbox.closest('tr');
        const index = parseInt(row.dataset.index);
        const tipoItem = row.dataset.tipoItem;

        if (tipoItem === 'rota') {
            itemsToProcess.push(tabela.rotas[index]);
        } else {
            itemsToProcess.push(tabela.ranges[index]);
        }
    });

    if (itemsToProcess.length === 0) {
        alert("Nenhum item selecionado para aprovar/reprovar.");
        return;
    }

    const currentUser = usuarios.find(u => u.perfil === "Diretor")?.nome || "Validador Padrão";
    const today = new Date().toISOString().split('T')[0];

    itemsToProcess.forEach(item => {
        item.status = statusDesejado;
        item.data_revisao = today;
        item.usuario_validador = currentUser;
        item.isEdited = true; 
    });

    renderRotasRanges(tabela);
    checkAndUpdateTabelaStatus(tabela); 
    buscarTabelas(); 
    selectTabela(selectedTabelaId); 
}


function selecionarTodasRotas() {
    selectAllRotasRangesCheckbox.checked = true;
    toggleAllRotasRangesSelection();
}

function limparSelecaoRotas() {
    selectAllRotasRangesCheckbox.checked = false;
    toggleAllRotasRangesSelection();
}

// Função para verificar e atualizar o status da tabela principal
function checkAndUpdateTabelaStatus(tabela) {
    const allItems = [...tabela.rotas, ...tabela.ranges];
    const hasPending = allItems.some(item => item.status === "Pendente");

    if (hasPending) {
        tabela.status = "Possui Validações Pendentes";
        tabela.usuario_validador = ""; // Remove o validador se houver pendências
    } else {
        tabela.status = "Rotas validadas";
        const lastValidadorItem = allItems.filter(item => item.status === "Aprovado" || item.status === "Reprovada").pop();
        tabela.usuario_validador = lastValidadorItem ? lastValidadorItem.usuario_validador : ""; 
    }
}