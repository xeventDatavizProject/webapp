import { FC } from 'react';
import Input from '../common/Input/Input';


const CheckListType: FC   = () => {
    return (
        <div className='w-56 mx-1 h-1/3 mt-1 shadow-lg rounded-lg p-4 z-[99999999]   border-zinc-800'>
            <div className='flex-grow z-20  font-mono tracking-widest text-xs mb-5'>hide/show Query types</div>

            <Input.Checkbox
                label='Requêtes de selection'
                id='select-toggle'
                value='select'
                className='peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600'
                onChange={() => showDelete()}
            />
            <Input.Checkbox
                label='Requêtes de modification'
                id='update-toggle'
                value='update'
                className='peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500'
                //onChange={() => setUpdate(!update)}
            />
            <Input.Checkbox
                label='Requêtes d inserstion'
                id='insert-toggle'
                value='insert'
                className='peer-focus:ring-red-400 dark:peer-focus:ring-orange-900 peer-checked:bg-green-500'
                //={() => setInsert(!insert)}
            />
            <Input.Checkbox
                label='Requêtes de suppresion'
                id='delete-toggle'
                value='delete'
                className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600'
                //onChange={() => setDeleted(!deleted)}
            />
            <Input.Checkbox
                label='Type Show'
                id='show-toggle'
                value='show'
                className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-black-600'
                //onChange={() => setShow(!show)}
            />
            <Input.Checkbox
                label='Type Alter'
                id='alter-toggle'
                value='alter'
                className='peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-yelow-600'
                //onChange={() => setAlter(!alert)}
            />
        </div>
    );
};

export default CheckListType;
