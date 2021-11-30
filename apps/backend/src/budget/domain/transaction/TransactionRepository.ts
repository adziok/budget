import { UniqueId } from '../../../base/UniqueId';
import { Transaction } from './Transaction';
import { AsyncResult } from '../../../base/Result';

export interface TransactionRepository {
    calculateMoneyAmountById(accountId: UniqueId): AsyncResult<number>;
    save(...transactions: Transaction[]): AsyncResult<void>;
}
