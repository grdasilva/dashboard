export interface PainelEC {
    rede: string;
    baseMesAnterior: number;
    totalGanhosClientes: number;
    novosClientes: number;
    novasMigracoesClientes: number;
    totalPerdasClientes: number;
    cancelamentosInativacoesClientes: number;
    migracoesPerdasClientes: number;
    baseMesAtual: number;
    redeHabilitadaBaseMesAnterior: number;
    redeHabilitadaBaseMesAtual: number;
    tombamentoGetNetBaseMesAnterior: number;
    tombamentoGetNetBaseMesAtual: number;
    redeTransacionalBaseMesAnterior: number;
    redeTransacionalBaseMesAtual: number;
    revisaoCadastralBaseMesAnterior: number;
    revisaoCadastralBaseMesAtual: number;
    faturamentoAnterior: number;
    faturamentoAtual: number;
    taxaMediaAnterior: number;
    taxaMediaAtual: number;
    prazoMedioAnterior: number;
    prazoMedioAtual: number;
}