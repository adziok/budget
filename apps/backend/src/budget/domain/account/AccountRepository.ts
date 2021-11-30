import { UniqueId } from '../../../base/UniqueId';
import { Account } from './Account';
import { AsyncResult } from '../../../base/Result';

export interface AccountRepository {
    calculateMoneyAmountById(accountId: UniqueId): AsyncResult<number>;
    save(...accounts: Account[]): AsyncResult<void>;
}
