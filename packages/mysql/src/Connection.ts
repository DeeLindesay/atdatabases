import {Readable} from 'stream';
import {BaseConnection} from '@databases/shared';
import {SQLQuery} from '@databases/sql';
import {Connection as IConnection} from './types/Queryable';
import MySqlDriver from './MySqlDriver';
import Transaction from './Transaction';

export default class Connection extends BaseConnection<Transaction, MySqlDriver>
  implements IConnection {
  queryNodeStream(
    query: SQLQuery,
    options: {highWaterMark?: number} = {},
  ): Readable {
    return this._driver.queryNodeStream(query, options);
  }
}
