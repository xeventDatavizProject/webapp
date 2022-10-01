import { Request } from "./request";

 const REQUESTDATA: Request[] =
  [{
  "id": "17782UGG",
  "query": "select * from MOCK_DATA",
   "times_called":200
  },
  {
    "id": "17782UNI",
    "query": "select * from USER",
    "times_called": 80
    },
    {
      "id": "17782UNI",
      "query": "select * from TABLE",
      "times_called": 20
      },
      {
        "id": "17782UNI",
        "query": "select * from SHEMA",
        "times_called": 60
        },
        {
          "id": "17782UNI",
          "query": "select * from DATA",
          "times_called": 180
          },
]
export default REQUESTDATA;
