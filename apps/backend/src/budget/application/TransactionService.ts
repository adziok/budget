import { TransactionRepository } from '../domain/transaction/TransactionRepository';
import { AsyncResult } from '../../base/Result';
import { Transaction } from '../domain/transaction/Transaction';
import { Money } from '../domain/Money';
import { UniqueId } from '../../base/UniqueId';
import { AccountService } from './AccountService';

export class TransactionService {
    constructor(private transactionRepository: TransactionRepository, private accountService: AccountService) {}

    async captureTransaction(userId: string, accountId: string, moneyAmount: number): AsyncResult<void> {
        const currencyResult = await this.accountService.getUserAccountCurrencyById(userId, accountId);
        if (currencyResult.isError()) {
            return currencyResult;
        }
        const money = new Money(moneyAmount, currencyResult.value);
        const transaction = Transaction.create(money, UniqueId.load(userId));

        return this.transactionRepository.save(transaction);
    }
}
