import { Injectable } from "@nestjs/common";
import { DashTransactionModel } from "src/modules/transaction/model/dashboard-transaction.response.model";
import { TransactionResponseModel } from "src/modules/transaction/model/transaction.response.model";


@Injectable()
export class DashboardTransactionResponseToModelMapper {
  map(payload: TransactionResponseModel[]): DashTransactionModel {
    const testeR = payload.reduce((acumulador, { type, name, category, value, createAt }) => {
      acumulador[type] = acumulador[type] || []

      acumulador[type].push({name, category, value, createAt})

      return acumulador

    }, {})

    return testeR as DashTransactionModel
  }
}
