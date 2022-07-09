import { BaseEntity } from 'src/core/entities.entity';
import { Column, Entity, Generated } from 'typeorm';
import { StakingEventEnum } from '../enums/events.enum';

@Entity({
  synchronize: true,
})
export class StakingEventEntity {
  @Column({ generated: 'uuid' })
  id: string;

  @Column()
  event!: StakingEventEnum;

  @Column({ type: 'varchar', length: 128, nullable: false, default: '' })
  amount!: string;

  @Column({ type: 'varchar', length: 128, nullable: false, default: '' })
  address!: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
    default: '',
    primary: true,
    unique: true,
  })
  tx_id!: string;
}
