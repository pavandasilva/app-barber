
export const getTabCadastroOrcamentoToRedirect = (error: any) : 'dadosGerais' | 'produtos' => {
  if (
    !!error?.contato_id ||
    !!error?.deposito_id ||
    !!error?.transportadora_id ||
    !!error?.funcionario_id ||
    !!error?.funcionario2_id
  ) {
    return 'dadosGerais'
  } else {
    return 'produtos'
  }
}
