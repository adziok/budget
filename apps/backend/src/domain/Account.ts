export interface IAccountProps {
    name: string;
    money: number;
}

export interface IDomainEvent {
    EVENT_TYPE: string;
}

export class AccountCreated implements IDomainEvent {
    public EVENT_TYPE = 'AccountCreated';
    constructor(public readonly name: string, public readonly initialMoneyAmount: number) {}
}

export class TransactionOccurred implements IDomainEvent {
    public EVENT_TYPE = 'TransactionOccurred';
    constructor(public readonly moneyAmount: number, public readonly type: 'expense' | 'income') {}
}

export class Account {
    private props: IAccountProps;
    constructor() {
        this.props = {} as any;
    }

    get moneyAmount() {
        return this.props.money;
    }

    apply(event: IDomainEvent) {
        if (event instanceof AccountCreated) {
            this.props.name = event.name;
            this.props.money = event.initialMoneyAmount;
        } else if (event instanceof TransactionOccurred) {
            this.props.money = this.props.money + event.moneyAmount * ((event.type === 'expense' && -1) || 1);
        } else {
            throw new Error('Invalid event: ' + event?.EVENT_TYPE);
        }
    }
}
