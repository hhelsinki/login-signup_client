import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Profile {
    gender: string, fname: string, lname: string, address:string, postcode: number, email: string, tel:number
}

function Home() {
    const [profile, setProfile] = useState<Profile[]>([]);
    let navigate = useNavigate();

    const handleUserByToken = async () => {
        const config = {
            method: 'GET',
            url: `${process.env.REACT_APP_API}/profile`,
            headers: {
                'api-key': process.env.REACT_APP_API_KEY,
                'user-token': Cookies.get(`${process.env.REACT_APP_TITLE}_token`)
            }
        }

        try {
            const res = await axios(config);
            switch (res.data.status) {
                case true:
                    let newProfile: Profile[] = [];
                    res.data.data.forEach((item: Profile, index: number) => newProfile.push(item));
                    setProfile(newProfile);
                    break;
                case false:
                    Cookies.remove(`${process.env.REACT_APP_TITLE}_token`);
                    navigate('/login');
                    break;
            }

        } catch (err) {
            console.log('err API: /profile');
        }
    }

    useEffect(() => {
        handleUserByToken();
    }, []);

    return (
        <>
            <header className="p-4">
                <div className="grid grid-cols-2">
                    <div>
                        <h1 className="text-right">Welcome, </h1>
                    </div>
                    <div>
                        <p className="text-right">Log Out</p>
                    </div>
                </div>
                <h2 className="mt-4">My info...</h2>
                {profile.map((item:Profile, index: number) => {
                    return <div key={index}>
                        <p><b>Name: {item.fname}</b></p>
                        <p><b>Lastname: {item.lname}</b></p>
                        <p><b>Email: {item.email}</b></p>
                        <p><b>Gender: {item.gender}</b></p>
                        <p><b>Address: {item.address}</b></p>
                        <p><b>Postcode: {item.postcode}</b></p>
                        <p><b>Tel: {item.tel}</b></p>
                    </div>
                })}

            </header>

            <main></main>
            <footer></footer>
        </>
    );
}

export default Home;