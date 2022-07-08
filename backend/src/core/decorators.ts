/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions
} from 'class-validator';
import { Connection, In, Not, ObjectType } from 'typeorm';
import { ConnectionsEnum } from './connections.enum';
import { ClassType } from './interfaces';

export class Holder {
  private static connections: Record<ConnectionsEnum, Connection>;

  public static setConnections(c: Record<ConnectionsEnum, Connection>): void {
    Holder.connections = c;
  }

  static getConnection(type: ConnectionsEnum): Connection {
    return Holder.connections[type];
  }
}

type RunnerFn = (object: unknown, propertyName: string) => void;
