import { DomainEntity } from '../../../base/DomainEntity';
import { UniqueId } from '../../../base/UniqueId';
import { Money } from '../Money';

interface IAccountProps {
    money: Money;
}

export class Account extends DomainEntity<IAccountProps> {
    static create(money: Money): Account {
        const account = new Account();
        account.props.id = UniqueId.create();
        account.props.money = money;
        return account;
    }
}
