import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css'
import { useAuth } from '../Login/UseAuth';

const Shipment = () => {
    const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => console.log(data);
    const auth = useAuth();
  
  return (    
            <form className='shipmentForm' onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue={auth.user.name} ref={register} placeholder='name' />
            {errors.name && <span  className='error'>Name is required!</span>}

            <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder='Your email' />
            {errors.email && <span className='error'>Email is required!</span>}

            <input name="adressline1" ref={register({ required: true })} placeholder='Adress' />
            {errors.adressline1 && <span className='error'>Adress is required!</span>} 
        <input name="adressline2" ref={register()} placeholder='Extra information about adress' />
        {errors.adressline2 && <span></span>}
        <input name="city" ref={register({ required: true })} placeholder='Your city name' />
        {errors.city&& <span className='error'>City is required!</span>}
        
        <input name="country" ref={register({ required: true })} placeholder='Your country' />
        {errors.country && <span className='error'>Country is required!</span>}
        <input name="zip" ref={register({ required: true })} placeholder='Enter your zip' />
        {errors.zip && <span className='error'>Zipcode is required!</span>}
        <input type="submit" />
        </form>
  );
};

export default Shipment;