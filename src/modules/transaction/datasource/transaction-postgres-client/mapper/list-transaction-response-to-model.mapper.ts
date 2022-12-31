import { Injectable } from "@nestjs/common";
import { TransactionResponseModel } from "src/modules/transaction/model/transaction.response.model";
import { TransactionResponsePostgresDTO } from "../dto/transaction.response.postgres.dto";

@Injectable()
export class ListTransactionResponseToModelMapper {
  map(payload: TransactionResponsePostgresDTO[]): TransactionResponseModel[] {
    return payload.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      category: item.category,
      type: item.type,
      value: item.value,
      createAt: item.createAt,
      updateAt: item.updateAt,
    }))
  }
}
