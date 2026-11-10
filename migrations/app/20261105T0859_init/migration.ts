#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/55c900e2f052ca493be3f7096178009d3adf8c957e05a156478fc99778d6be60/contract';
import endContract from '../../snapshots/55c900e2f052ca493be3f7096178009d3adf8c957e05a156478fc99778d6be60/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  col,
  foreignKey,
  lit,
  unique,
} from '@prisma/orm-sqlite/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        table: 'Tarefa',
        columns: [
          col('concluida', 'INTEGER', {
            notNull: true,
            default: lit('0'),
            codecRef: { codecId: 'sqlite/integer@1' },
          }),
          col('id', 'INTEGER PRIMARY KEY AUTOINCREMENT'),
          col('nome', 'TEXT', { notNull: true, codecRef: { codecId: 'sqlite/text@1' } }),
          col('usuarioId', 'INTEGER', { notNull: true, codecRef: { codecId: 'sqlite/integer@1' } }),
        ],
        constraints: [foreignKey(['usuarioId'], 'Usuario', ['id'])],
      }),
      this.createTable({
        table: 'Usuario',
        columns: [
          col('email', 'TEXT', { notNull: true, codecRef: { codecId: 'sqlite/text@1' } }),
          col('id', 'INTEGER PRIMARY KEY AUTOINCREMENT'),
          col('senha', 'TEXT', { notNull: true, codecRef: { codecId: 'sqlite/text@1' } }),
        ],
        constraints: [unique(['email'])],
      }),
      this.createIndex({
        table: 'Tarefa',
        index: 'Tarefa_usuarioId_idx_5f01c7d6',
        columns: ['usuarioId'],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
