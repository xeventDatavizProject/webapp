import { Dispatch, FC, SetStateAction } from 'react';
import Input from '../common/Input/Input';

interface performancesListProps {
  cpu: boolean;
  timestamp: boolean;
  setCpu: Dispatch<SetStateAction<boolean>>;
  setTimestamp: Dispatch<SetStateAction<boolean>>;
}

const CheckList: FC<performancesListProps> = ({ cpu, setCpu, timestamp, setTimestamp }) => {
  return (
    <div className='w-56 mx-1 h-1/3 mt-1 shadow-lg rounded-lg p-4 z-[99999999]   border-zinc-800'>
      <div className='flex-grow z-20  font-mono tracking-widest text-xs mb-5'>hide/show performances</div>

      <Input.Checkbox
        label='CPU'
        id='cpu-toggle'
        value='CPU'
        className='peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
        onChange={() => setCpu(!cpu)}
      />
      <Input.Checkbox
        label='Timestamp'
        id='timestamp-toggle'
        value='Timestamp'
        className='peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500'
        onChange={() => setTimestamp(!timestamp)}
      />
      <Input.Checkbox
        label='Session'
        id='session-toggle'
        value='Session'
        className='peer-focus:ring-red-400 dark:peer-focus:ring-orange-900 peer-checked:bg-orange-500'
      />
      <Input.Checkbox
        label='Runtime'
        id='runtime-toggle'
        value='Runtime'
        className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600'
      />
      <Input.Checkbox
        label='Database'
        id='database-toggle'
        value='Database'
        className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600'
      />
      <Input.Checkbox
        label='Users'
        id='users-toggle'
        value='Users'
        className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600'
      />
    </div>
  );
};

export default CheckList;
