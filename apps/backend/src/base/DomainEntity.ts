import { UniqueId } from './UniqueId';

export interface IDomainEntityBaseProps {
    id: UniqueId;
}

export class DomainEntity<Props> {
    protected props: Props & IDomainEntityBaseProps = {} as any;

    protected constructor() {}

    static load<Props>(props: Props & IDomainEntityBaseProps): DomainEntity<Props> {
        const entity = new DomainEntity<Props>();
        entity.props = props;
        return entity;
    }
}
