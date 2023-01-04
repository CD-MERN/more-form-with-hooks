import React, {useState}from 'react';

const Input = (props) => {
    // const {state, setState} = props
    const [firstName, setFirstName] = useState({
        value: '',
        error: ''
    });
    const [lastName, setLastName] = useState({
        value: '',
        error: ''
    });
    const [email, setEmail] = useState({
        value: '',
        error: ''
    });
    const [password, setPassword] = useState({
        value: '',
        error: ''
    });
    const [passwordConfirm, setPasswordConfirm] = useState({
        value: '',
        error: ''
    });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName)
    }
    const handleChange = (e, setState, min) => {
        let error = checkString(e.target.value, min)
        if(!error.length && e.target.type === 'password'){
            error = checkPassword();
        }
        setState({value: e.target.value, error: error})
    }
    const checkString = (string, min) => {
        let message = '';
        if(string.length){
            if(string.length < min ){
                message = `El campo debe tener al menos ${min} caracteres`;
            }
        }
        
        return message;
    }
    const checkPassword = () => {
        let message = '';
        if(password.value !== passwordConfirm.value){
            message = 'Las contraseñas no coinciden'
        }
        return message;
    }
    const getClass = (element) => {
        let className = '';
        if(element.value.length){
            if(element.error.length){
                className =  'is-invalid';
            }else{
                className = 'is-valid';
            }
        }
        return className;
    }
    return (
        <form onSubmit={handleSubmit} className="mb-5">
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input 
                    type="text" 
                    className={`form-control `  + getClass(firstName)}
                    name="firstName"
                    onBlur={e => handleChange(e, setFirstName, 2)}
                    onChange={e => handleChange(e, setFirstName, 2)}
                />
                {firstName.error.length > 0 &&
                    <small className='text-danger'>{firstName.error}</small>
                }
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input 
                    type="text" 
                    className={`form-control `  + getClass(lastName)}
                    name="lastName"
                    onBlur={e => handleChange(e, setLastName, 2)}
                    onChange={e => handleChange(e, setLastName, 2)}
                />
                {lastName.error.length > 0 &&
                    <small className='text-danger'>{lastName.error}</small>
                }
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="email" 
                    className={`form-control `  + getClass(email)}
                    name="email"
                    onBlur={e => handleChange(e, setEmail, 5)}
                    onChange={e => handleChange(e, setEmail, 5)}
                />
                {email.error.length > 0 &&
                    <small className='text-danger'>{email.error}</small>
                }
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className={`form-control `  + getClass(password)}
                    name="password"
                    onBlur={e => handleChange(e, setPassword, 8)}
                    onChange={e => handleChange(e, setPassword, 8)}
                />
                {password.error.length > 0 &&
                    <small className='text-danger'>{password.error}</small>
                }
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input 
                    type="password" 
                    className={`form-control `  + getClass(passwordConfirm)}
                    name="passwordConfirm"
                    onBlur={e => handleChange(e, setPasswordConfirm, 8)}
                    onChange={e => handleChange(e, setPasswordConfirm, 8)}
                />
                {passwordConfirm.error.length > 0 &&
                    <small className='text-danger'>{passwordConfirm.error}</small>
                }
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default Input;