import React from 'react';
import { useForm } from 'react-hook-form';

const Formulaire = () => {

    const { register, handleSubmit, formState} = useForm({
        mode: "onTouched"
    });
    const { errors, isValid } = formState


    return (
        <form
            className='contact-container-content-left-row-form'
            action='https://formspree.io/f/mpzgdnow'
            method='POST'
        >
            <div className='contact-container-content-left-row-form-item'>
                <label
                    className='contact-container-content-left-row-form-item-label'
                    htmlFor="lastName"
                >
                    Nom :
                </label>
                <input
                    className={`${'contact-container-content-left-row-form-item-input'}
                        ${errors.lastName ? "contact-container-content-left-row-form-item-input-isNotValid" : ""}
                    `}
                    type="text"
                    name='lastName'
                    autoComplete='off'
                    {...register("lastName", { required : "Vous devez indiquer votre nom" })}
                />
                {errors.lastName && (
                    <p className='contact-container-content-left-row-form-item-input-error'>
                        {errors.lastName.message}
                    </p>
                )}
            </div>
            <div className='contact-container-content-left-row-form-item'>
                <label
                    className='contact-container-content-left-row-form-item-label'
                    htmlFor="firstName"
                >
                    Prénom :
                </label>
                <input
                    className={`${'contact-container-content-left-row-form-item-input'}
                    ${errors.firstName ? "contact-container-content-left-row-form-item-input-isNotValid" : ""}
                    `}
                    autoComplete='off'
                    type="text"
                    name='firstName'
                    {...register("firstName", { required: "Vous devez indiquer votre prénom" })}
                />
                {errors.firstName && (
                    <p className='contact-container-content-left-row-form-item-input-error'>
                        {errors.firstName.message}
                    </p>
                )}
            </div>
            <div className='contact-container-content-left-row-form-item'>
                <label
                    className='contact-container-content-left-row-form-item-label'
                    htmlFor="email"
                >
                    Email :
                </label>
                <input
                    className={`${'contact-container-content-left-row-form-item-input'}
                    ${errors.email ? "contact-container-content-left-row-form-item-input-isNotValid" : ""}
                    `}
                    autoComplete='off'
                    type="email"
                    name="email"
                    {...register("email", { required: "Vous devez indiquer votre adresse email" })}
                />
                {errors.email && (
                    <p className='contact-container-content-left-row-form-item-input-error'>
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className='contact-container-content-left-row-form-item'>
                <label
                    className='contact-container-content-left-row-form-item-label'
                    htmlFor="message"
                >
                    Message :
                </label>
                <textarea
                    className={`${'contact-container-content-left-row-form-item-input contact-container-content-left-row-form-item-inputMessage'}
                    ${errors.message ? "contact-container-content-left-row-form-item-input-isNotValid" : ""}
                    `}
                    autoComplete='off'
                    type="text"
                    name='message'
                    {...register("message", { required: "Vous devez indiquer un message" })}
                />
                {errors.message && (
                    <p className='contact-container-content-left-row-form-item-input-error'>
                        {errors.message.message}
                    </p>
                )}
            </div>
            <div className='contact-container-content-left-row-form-bottom'>
                <button
                    disabled={!isValid}
                    className={`${'contact-container-content-left-row-form-bottom-button'}`}
                    type='submit'
                >
                    Envoyer
                </button>
            </div>
        </form>
    );
};

export default Formulaire;
