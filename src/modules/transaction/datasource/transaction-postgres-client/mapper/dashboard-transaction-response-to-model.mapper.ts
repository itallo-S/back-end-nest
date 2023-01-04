import { Injectable } from "@nestjs/common";
import { DashboardTransactionResponseModel, Transaction, sample } from "src/modules/transaction/model/dashboard-transaction.response.model";
import { TransactionResponseModel } from "src/modules/transaction/model/transaction.response.model";


@Injectable()
export class DashboardTransactionResponseToModelMapper {
  map(payload: TransactionResponseModel[]) {
    const testeR = payload.reduce((acumulador, { type, name, category, value, createAt }) => {
      acumulador[type] = acumulador[type] || []

      acumulador[type].push({name, category, value, createAt})

      return acumulador

    }, {})

    return testeR
  }
}
