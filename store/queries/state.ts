import { QueriesType, ReqType } from 'store';

export interface QueriesStateType {
  allQueries: ReqType & { data: QueriesType[] | null };
  errorQueries: ReqType & { data: QueriesType[] | null };
}

export const QueriesState: QueriesStateType = {
  allQueries: {
    data: null,
    status: null,
  },
  errorQueries: {
    data: null,
    status: null,
  },
};
