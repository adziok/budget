import { AccountRepository } from '../domain/account/AccountRepository';
import { AsyncResult, ok } from '../../base/Result';
import { Currency } from '../domain/Currency';

export class AccountService {
    constructor(private accountRepository: AccountRepository) {}

    getUserAccountCurrencyById(userId: string, accountId: string): AsyncResult<Currency> {
        return ok(new Currency('PLN')) as any as AsyncResult<Currency>;
    }
}
