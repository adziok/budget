import { AccountRepository } from '../domain/AccountRepository';

export class AccountService {
    constructor(private accountRepository: AccountRepository) {}
}
