import { randomUUID } from 'crypto';

export class UniqueId {
    protected constructor(readonly _id: string) {}

    static create() {
        return new UniqueId(randomUUID());
    }

    static load(uuid: string) {
        return new UniqueId(uuid);
    }

    toString() {
        return this._id;
    }
}
