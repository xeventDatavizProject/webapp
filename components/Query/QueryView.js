import { testQuery } from "api/queries";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../common/Button";

const QueryView = () => {
  const [code, setCode] = useState();
  const dispatch = useDispatch();

  const sendQuery = async () => {
    await dispatch(testQuery({ query: code })).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        setCode("");
      }
    });
  };

  return (
    <div>
      <textarea
        id="message"
        rows="10"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Please enter SQL code."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <Button
        className="mt-4 bg-white text-blue-400"
        disabled={code ? false : true}
        onClick={sendQuery}
      >
        Execute
      </Button>
    </div>
  );
};

export default QueryView;
