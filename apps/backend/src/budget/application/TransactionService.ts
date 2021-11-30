import { TransactionRepository } from '../domain/TransactionRepository';

export class TransactionService {
    constructor(private transactionRepository: TransactionRepository) {}

    async captureTransaction(userId: string) {}
}
