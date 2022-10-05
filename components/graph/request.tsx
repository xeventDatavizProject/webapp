
export type Request = {
  id:string
  query:string;
  times_called:number;
};

export type  REQUEST= {
  RequestData:Request[]
};

export type ErrorQueryType = {
  id: string,
query: string,
date_hour: Date,
}


