import { FC } from 'react';
import './Error.scss'

interface IError {
    error: string
}

const Error:FC<IError> = ({error}) => {
    return (
        <div className='error'>
            {error}
        </div>
    )
}

export default Error;