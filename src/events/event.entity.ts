import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  transactionHash: string;

  from: string;

  @Column()
  to: string;

  @Column({ type: 'bigint' })
  price: string;
}
