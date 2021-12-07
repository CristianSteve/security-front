import React, { useEffect, useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { InputFloating } from '../../components/Input'
import { ModalAlert } from '../../components/ModalAlert';
import { useCode } from '../../Hooks/useCode';
import { useForm } from '../../Hooks/useForm';
import { useUser } from '../../Hooks/useUser';
import  signup  from './signup.svg';

const CLIENT = 3;

const SignUp = () => {

	const [values, handleInputChange] = useForm({username : "", nombre : "", email : "", password : "",celular: "", direccion : "", codigo: "",tyc : false});
	const {username, nombre, email, celular, direccion, password, codigo, tyc } = values;
	const [isAlert, setIsAlert] = useState({isAccept : false, show : false, message : null});
	const history = useHistory();
	const refForm = useRef(null);
	let refSend = useRef(0);
	const { errorUser, dataUser, RegisterUser} = useUser();
	const { dataCodigo, errorCodigo, findCodigo, resetValues } = useCode();

	const handleSubmitUser = (e) =>{
		e.preventDefault();
		const numberNext = refSend.current;
		const [ user, basic, code ] = refForm.current.children;
		let isError = false;

		if(numberNext === 0){
			isError = validate(...user);
			if(!isError){
				user.classList.toggle("d-none");
				basic.classList.toggle("d-none");
			}
		}
		if(numberNext === 1){
			isError = validate(...basic);
			if(!isError){
				basic.classList.toggle("d-none");
				code.classList.toggle("d-none");
			}
		}
		if(numberNext === 2){
			isError = validate(...code);
			if(!isError){
				if(!tyc){ setIsAlert({...isAlert, show : !isAlert.show, message : "No acepto terminos y condiciones"}); return}
				findCodigo(codigo);
			}
		}
		if(!isError && numberNext < 2)
			refSend.current = numberNext + 1;
	}

	//Valida que los campos este informados
	const validate = (...code) => {
		let isError = false;
		[...code].forEach((c) => {
			c.classList.remove("is-invalid");
			if(c.value === "" && c.type !== "submit"){
				c.classList.add("is-invalid");
				isError = true
			}
		})
		return isError;
	}

	//Si se crea el usuario sin inconvenientes se da de baja al codigo
	useEffect(() => {
		if(errorUser)
			setIsAlert({...isAlert, show : !isAlert.show, message : "Ha ocurrido un error de procesamiento"});
		if(dataUser)
			history.push({pathname : "/login"})
	}, [errorUser, dataUser, history, isAlert])

	//Si el codigo asignado es valido, se da de alta a nuevo usuario
	useEffect(() => {
		if(dataCodigo){
			let fecha = new Date(dataCodigo.createdAt).setSeconds(14400);
			let fechaNow = new Date().getTime();
			if(fecha > fechaNow)
				RegisterUser({...values, idProfile : CLIENT, Area_idArea : dataCodigo.area});
			else
				setIsAlert({...isAlert, show : !isAlert.show, message : "El código se ha vencido"})
			resetValues();
		}
			
		if(errorCodigo) {
			setIsAlert({...isAlert, show : !isAlert.show, message : errorCodigo})
			resetValues();
		}
	}, [dataCodigo, errorCodigo, RegisterUser, resetValues, isAlert, values]);

    return (
        <div className="row g-0 d-flex align-items-center">
	    <div className="col-12 col-md-12 col-lg-6 text-center p-5">
		    <div className="d-flex flex-column align-content-end">
			    <div className="mx-auto">	
				    <div className="mb-1"><img style={{width : "30%"}}className="" src="https://i.ibb.co/z4bDXz8/Logo.jpg" alt="logo"/></div>
					<h2 className="text-center mb-3">Registro del Portal</h2>					
	
					<div ref={refForm} className="text-start mx-auto d-flex">
						<form onSubmit={handleSubmitUser} className="w-100"> 
                            <InputFloating placeholder="Usuario" nameComponent="username" value={username} handleChange={handleInputChange} textError="Usuario necesario"/>        
                            <InputFloating placeholder="Nombre" nameComponent="nombre" value={nombre} handleChange={handleInputChange}  textError="Nombre es obligatorio"/>        
                            <InputFloating placeholder="Email" type="email" nameComponent="email" value={email} handleChange={handleInputChange} textError="Correo es obligatorio"/>        
							<div className="text-center mt-3">
								<button className="btn btn-primary w-100 py-2">Continuar</button>
							</div>
						</form>
						<form onSubmit={handleSubmitUser} className="d-none w-100"> 
                            <InputFloating placeholder="Numero Celular" type="number" nameComponent="celular" value={celular} handleChange={handleInputChange}/>        
                            <InputFloating placeholder="Direccion" nameComponent="direccion" value={direccion} handleChange={handleInputChange}/>        
                            <InputFloating placeholder="Contraseña" type="password" nameComponent="password" value={password} handleChange={handleInputChange}/>        

							<div className="text-center mt-3">
								<button className="btn btn-primary w-100 py-2">Continuar</button>
							</div>
						</form>
						<form onSubmit={handleSubmitUser} className="w-100 d-none d-flex justify-content-cente flex-column"> 
                            <InputFloating placeholder="Codigo unico" type="number" nameComponent="codigo" value={codigo} handleChange={handleInputChange}/>
							<div className="extra mb-3 mt-3">
								<div className="form-check">
									<input className="form-check-input" type="checkbox" name="tyc" onChange={handleInputChange}/>
									<label className="form-check-label">
									Acepto los <Link to="#" className="">Terminos y condiciones</Link> del Portal Semillero.
									</label>
								</div>
							</div>
							<div className="mt-2 text-center">
								<button className="btn btn-primary w-100  py-2">Sign Up</button>
							</div>
						</form>
					</div>
					<div className="auth-option text-center pt-4">¿Ya tienes una cuenta? <Link className="text-link" to="/login" >Log in</Link></div>
			    </div>
		    </div>
	    </div>
	    <div className="col-12 col-md-5 col-lg-6 h-100">
            <div className="d-flex justify-content-center d-none d-lg-block">
                <img src={signup} alt="signup windoor" style={{width : "70%"}}/>		    
            </div>
	    </div>
		<ModalAlert show={isAlert.show} onHide={({isAccept}) => setIsAlert({show : !isAlert.show, isAccept})} msgPrimary={isAlert.primary} messageError={isAlert.message} />
    </div>
    )
}

export default SignUp
