enum CommonErrors {
  TRY_AGAIN_LATER = 'Tente novamente mais tarde',
  NOT_POSSIBLE =  'Não foi possível',
  SUCCESSFULLY = 'com sucesso'
}

export const messagePtBr = {
  user: {
    not_found_user: `Nenhum usuário encontrado.`,
    could_not_sign_in: `Email ou senha inválidos.`,
    create_user_successfully: `Usuário cadastrado ${CommonErrors.SUCCESSFULLY}.`,
    updated_user_successfully: `Usuário atualizado ${CommonErrors.SUCCESSFULLY}.`,
    not_possible_to_create_user: `${CommonErrors.NOT_POSSIBLE} cadastrar o usuário. ${CommonErrors.TRY_AGAIN_LATER}.`,
  },
  transaction: {
    not_possible_to_create_transaction: `${CommonErrors.NOT_POSSIBLE} cadastrar a transação. ${CommonErrors.TRY_AGAIN_LATER}.`,
    not_found_any_transaction: `Nenhuma transação encontrada.`
  },
  not_possible_updated: `${CommonErrors.NOT_POSSIBLE} atualizar os dados.`,
  genericError: 'Desculpe-nos, ocorreu um erro e não foi possível atender sua solicitação. Por favor, tente novamente mais tarde'
}
