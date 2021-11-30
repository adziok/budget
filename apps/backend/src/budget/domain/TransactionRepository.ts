import { UniqueId } from '../../base/UniqueId';
import { Transaction } from './Transaction';

export interface TransactionRepository {
    calculateMoneyAmountById(accountId: UniqueId): Promise<number>;
    save(...transactions: Transaction[]): Promise<void>;
}
