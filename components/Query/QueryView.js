import '@uiw/react-textarea-code-editor/dist.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Button from '../common/Button/Button';

const CodeEditor = dynamic(() => import('@uiw/react-textarea-code-editor').then(mod => mod.default), { ssr: false });

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
      <CodeEditor
        value={code}
        language='sql'
        placeholder='Please enter sql query.'
        onChange={evn => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: 'black',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          width: '220px',
        }}
      />
      <Button className='mt-4'>Execute</Button>
    </div>
  );
};

export default QueryView;
