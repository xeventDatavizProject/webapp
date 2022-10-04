import { QueriesType, ReqType } from 'store';

export interface QueriesStateType {
  allQueries: ReqType & { data: QueriesType[] };
}

export const QueriesState: QueriesStateType = {
  allQueries: {
    data: [],
    status: null,
  },
};
