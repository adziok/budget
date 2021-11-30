import { UniqueId } from '../../base/UniqueId';
import { Account } from './Account';

export interface AccountRepository {
    calculateMoneyAmountById(accountId: UniqueId): Promise<number>;
    save(...accounts: Account[]): Promise<void>;
}
