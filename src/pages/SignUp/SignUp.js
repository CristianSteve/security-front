import React from 'react'
import { Link } from 'react-router-dom'
import { InputFloating } from '../../components/Input'
import { useForm } from '../../Hooks/useForm';
import  signup  from './signup.svg';

const SignUp = () => {

	const [values, handleInputChange] = useForm({nombre : "", email : "", password : "", tyc : false});
	const {nombre, email, password, tyc } = values;

	const handleSubmitUser = (e) =>{
		e.preventDefault();
		if(!tyc)
			alert("No acepto terminos y condiciones")

	}
    return (
        <div className="row g-0 d-flex align-items-center">
	    <div className="col-12 col-md-12 col-lg-6 text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="mx-auto">	
				    <div className="mb-2"><img style={{width : "30%"}}className="" src="https://i.ibb.co/z4bDXz8/Logo.jpg" alt="logo"/></div>
					<h2 className="text-center mb-4">Registro del Portal</h2>					
	
					<div className="text-start mx-auto" onSubmit={handleSubmitUser}>
						<form> 
                            <InputFloating placeholder="Nombre" nameComponent="nombre" value={nombre} handleChange={handleInputChange}/>        
                            <InputFloating placeholder="Email" type="email" nameComponent="email" value={email} handleChange={handleInputChange}/>        
                            <InputFloating placeholder="Password" type="password" nameComponent="password" value={password} handleChange={handleInputChange}/>        
							<div className="extra mb-3 mt-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" name="tyc" onChange={handleInputChange}/>
									<label className="form-check-label">
									Acepto los <Link to="#" className="">Terminos y condiciones</Link> del Portal Semillero.
									</label>
								</div>
							</div>
							<div className="text-center">
								<button type="submit" className="btn btn-primary w-100">Sign Up</button>
							</div>
						</form>
						<div className="auth-option text-center pt-4">¿Ya tienes una cuenta? <Link className="text-link" to="/login" >Log in</Link></div>
					</div>
			    </div>
		    </div>
	    </div>
	    <div className="col-12 col-md-5 col-lg-6 h-100">
            <div className="d-flex justify-content-center d-none d-lg-block">
                <img src={signup} alt="signup windoor" style={{width : "70%"}}/>		    
            </div>
	    </div>
    </div>
    )
}

export default SignUp
