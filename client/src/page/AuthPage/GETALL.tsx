import React, { useState } from 'react';
import './GETALL.css'
import RegistrationPage from './RegistrationPage';
import AuthorizationPage from './AuthorizationPage';


type GetAllProps={
}
const GetAll = ({}: GetAllProps): JSX.Element =>{
    const [isReg, setIsReg] = useState(false)
    const [islog, setIslog] = useState(false)


return (

<article className='conteiner'>
<div className="block">
    <section className='block__item block-item'>
        <h2 className='block-item__title'>У вас уже есть аккаунт?</h2 >
    <div className="registration">
    </div>
    <button type='button' className='form__btn_pop' onClick={() => setIsReg(prev => !prev)}>Войти</button>
    </section>
    <section className='block__item block-item'>
        <h2 className='block-item__title'>У вас нет аккаунта?</h2>
        <div className="authorization">
    </div>
    <button type='button' className='form__btn_pop' onClick={() => setIsReg(prev => !prev)}>Зарегистрироваться</button>
    </section>
</div>
    <div className={isReg === true ? "form-box" : "form-box activ"}>
    {isReg === true ? <AuthorizationPage /> : <RegistrationPage />}

    </div>
</article>

 );

}
export default GetAll
