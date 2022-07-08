import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

export class MasterEntity<T> {
  constructor(input?: Partial<T>) {
    if (input) {
      Object.assign(this, input);
    }
  }
}

export class BaseEntity<T> extends MasterEntity<T> {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export class AlternateBaseEntity<T> extends MasterEntity<T> {
  @PrimaryGeneratedColumn()
  _id!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
