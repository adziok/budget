import { Account, AccountCreated, TransactionOccurred } from './Account';

describe('Account', () => {
    it('should capture 2 incomes and show valid money amount', () => {
        const account = new Account();
        [
            new AccountCreated('My account', 100),
            new TransactionOccurred(100, 'income'),
            new TransactionOccurred(50, 'income'),
        ].forEach((event) => account.apply(event));

        expect(account.moneyAmount).toEqual(250);
    });
});
