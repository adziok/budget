import { DomainEntity } from '../../base/DomainEntity';
import { UniqueId } from '../../base/UniqueId';
import { Money } from './Money';

interface ITransactionProps {
    money: Money;
    accountId: UniqueId;
}

export class Transaction extends DomainEntity<ITransactionProps> {
    static create(money: Money, accountId: UniqueId): Transaction {
        const transaction = new Transaction();
        transaction.props.id = UniqueId.create();
        transaction.props.money = money;
        transaction.props.accountId = accountId;
        return transaction;
    }
}
