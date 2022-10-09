import { useState } from "react";
import Button from "../common/Button";

const QueryView = () => {
  const [code, setCode] = useState(`
CREATE EVENT NOTIFICATION event_notification_name   
ON { SERVER | DATABASE | QUEUE queue_name }   
[ WITH FAN_IN ]  
FOR { event_type | event_group } [ ,...n ]  
TO SERVICE 'broker_service' , { 'broker_instance_specifier' | 'current database' }  
[ ; ] 
  `);

  return (
    <div>
      <Button className="mt-4">Execute</Button>
    </div>
  );
};

export default QueryView;
