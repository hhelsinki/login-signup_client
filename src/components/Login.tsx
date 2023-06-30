import axios from "axios";
import Cookies from "js-cookie";
import { ChangeEvent, FormEvent, useState } from "react";

interface Login {
    email: string, password: string, isPassword: boolean
}

const Login = () => {
    const [values, setValues] = useState<Login>({
        email: '', password: '', isPassword: true
    });


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            email: values.email,
            password: values.password
        };
        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API}/login`,
            headers: {
                'api-key': process.env.REACT_APP_API_KEY
            },
            data: data
        }

        console.log(data)

        try {
            const res = await axios(config);
            switch(res.data.status) {
                case true:
                    Cookies.set(`${process.env.REACT_APP_TITLE}_token`, res.data.token, {sameSite: 'strict'});
                    break;
                case false: default:
                    break;
            }
        } catch (err) {
            console.log('err API: /login')
        }
    }

    return (
        <main>
            <div className="container mx-auto p-8 m-10">
                <h1 className="text-3xl text-center font-bold text-gray-800">Login</h1>
                <form onSubmit={handleSubmit} className=" w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                    <label>Email: </label>
                    <br />
                    <input type='email' onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, email:e.target.value})} className="p-1 indent-2 rounded-md mt-2 mb-2" placeholder="john@gmail.com" required />
                    <br />
                    <label>Password: </label>
                    <br />
                    <div className="relative">
                        <input type={values.isPassword? "password": "text"} onChange={(e: ChangeEvent<HTMLInputElement>) => setValues({...values, password:e.target.value})} className="p-1 indent-2 rounded-md mt-2 mb-4" placeholder="mysecretpassword" maxLength={10} required />
                        <button type="button" onClick={()=> setValues({...values, isPassword: !values.isPassword })} className="absolute right-4 bottom-5">👁️</button>
                        <br />
                    </div>

                    <button type="submit" className="p-2 pl-5 pr-5 m-auto block rounded-lg bg-blue-500 text-white">Login</button>
                </form>
                <p className="text-center">No Account? <a href="/register"><button type="button" className="p-2  rounded-lg bg-orange-500 text-white">Register</button></a></p>
            </div>


        </main>
    );
}

export default Login;