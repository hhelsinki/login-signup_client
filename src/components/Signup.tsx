import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

interface Regis {
    gender: string, fname: string, lname: string, address: string, postcode: number | string, email: string, password: string, tel: number | string, isPassword:boolean, isAcceptTerm: boolean
}

const Signup = () => {
    const [values, setValues] = useState<Regis>({
        gender: '',
        fname: '',
        lname: '',
        address: '',
        postcode: 0,
        email: '',
        password: '',
        tel: 0,
        isPassword: true,
        isAcceptTerm: false,
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            gender: values.gender,
            fname: values.fname,
            lname: values.lname,
            address: values.address,
            postcode: values.postcode,
            email: values.email,
            password: values.password,
            tel: values.tel
        }
        const config = {
            method: 'POST',
            url: `${process.env.REACT_APP_API}/signup`,
            headers: {
                'api-key': process.env.REACT_APP_API_KEY
            },
            data: data
        }

        let isAcceptTerm: boolean = values.isAcceptTerm;

        switch (isAcceptTerm) {
            case true:
                try {
                    console.log(data);
                    const res = await axios(config);

                    switch (res.data.status) {
                        case true:
                            //navigate('/login');

                            break;
                        default:
                            break;
                    }
                } catch (err) {
                    console.log('err API: /signup')
                }
                break;
            case false: default:
                break;
        }
    }
    return (
        <main>
            <div className="container mx-auto pl-8 pr-8 m-10">
                <h1 className="text-3xl text-center font-bold text-gray-800">Register</h1>
                <form onSubmit={handleSubmit} className=" w-fit mx-auto bg-blue-100 rounded-xl shadow border p-10 m-10">
                    <label>Gender: </label>
                    <br />
                    <select name='gender' onChange={
                        (e: ChangeEvent<HTMLSelectElement>) => setValues({ ...values, gender: e.target.value })
                    } className="p-1 border-2 border-gray-300 rounded-md mb-2" required>
                        <option value=''>-- Please Pick</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <br />
                    <label>Firstname: </label>
                    <br />
                    <input type="text" onChange={
                        (e) => setValues({ ...values, fname: e.target.value })
                    } className="p-1 rounded indent-1 mb-2" placeholder='Jonathan' required />
                    <br />
                    <label>Lastname: </label>
                    <br />
                    <input type="text" onChange={
                        (e) => setValues({ ...values, lname: e.target.value })
                    } className="p-1 rounded indent-1 mb-2" placeholder='Green' required />
                    <br />
                    <label>Address: </label>
                    <br />
                    <input type='text' onChange={
                        (e) => setValues({ ...values, address: e.target.value })
                    } className="p-1 rounded indent-1 mb-2" placeholder="Bangkok" required />
                    <br />
                    <label>Postcode: </label>
                    <br />
                    <input type='tel' onChange={
                        (e) => setValues({ ...values, postcode: e.target.value })
                    } pattern="[0-9]{5}" maxLength={5} className="p-1 rounded indent-1 mb-2" placeholder="10120" required />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input type='email' onChange={
                        (e) => setValues({ ...values, email: e.target.value })
                    } className="p-1 rounded indent-1 mb-2" placeholder="john@gmail.com" required />
                    <br />
                    <label>Password: </label>
                    <br />
                    <div className="relative">
                        <input type={values.isPassword? 'password': 'text'} onChange={
                            (e) => setValues({ ...values, password: e.target.value })
                        } className="p-1 rounded indent-1 mb-2" placeholder="mysecretpassword" required />
                        <button type="button" onClick={() => setValues({ ...values, isPassword: !values.isPassword })} className="absolute right-4 bottom-3">👁️</button>
                    </div>
                    <br />
                    <label>Telephone Number: </label>
                    <br />
                    <input type='tel' onChange={
                        (e) => setValues({ ...values, tel: e.target.value })
                    } pattern="[0]{1}[0-9]{9}" maxLength={10} className="p-1 rounded indent-1 mb-2" placeholder="0993334444" required />
                    <br />
                    <input type="checkbox" onChange={
                        () => setValues({ ...values, isAcceptTerm: !values.isAcceptTerm })
                    } name='accept term' checked={values.isAcceptTerm} required />
                    <label className="text-sm"> Accept Terms and Conditions</label>
                    <br />
                    <p className={!values.isAcceptTerm ? "text-xs text-red-500 visible" : "text-xs invisible"}>By clicking "Sign up" you accept<br /> Terms and Conditions.</p>
                    <button type="submit" className="pt-2 pb-2 pl-4 pr-4 mt-2 ml-auto mr-auto block bg-orange-400 rounded-lg text-white">Sign up</button>
                </form>
                <p className="text-center">Already have account? <a href="/login"><button type='button' className="pt-2 pb-2 pl-4 pr-4 bg-blue-400 rounded-lg text-white">Log In</button></a></p>
            </div>
        </main>
    );
}

export default Signup;