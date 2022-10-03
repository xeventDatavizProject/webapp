import { Request } from './request';

const Logs: Request[] = [
  {
    id: '17782UGG',
    query: 'select',
    times_called: 200,
  },
  {
    id: '17782UGG',
    query: 'insert',
    times_called: 200,
  },
  {
    id: '17782UGG',
    query: 'insert',
    times_called: 200,
  },
  {
    id: '17782UGG',
    query: 'select * from dataBase',
    times_called: 120,
  },
  {
    id: '17782UGG',
    query: 'select * from user',
    times_called: 100,
  },
  {
    id: '17782UNI',
    query: 'show',
    times_called: 180,
  },
  {
    id: '17782UNI',
    query: 'update',
    times_called: 90,
  },
  {
    id: '17782UNI',
    query: 'delete',
    times_called: 60,
  },
  {
    id: '17782UNI',
    query: 'delete from user',
    times_called: 20,
  },
  {
    id: '17782U6I',
    query: 'alter',
    times_called: 20,
  },
];
export default Logs;
