import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Profile {
  gender: string, fname: string, lname: string, address: string, postcode: number, email: string, tel: number | string
}

function Home() {
  const [profile, setProfile] = useState<Profile>({
    gender: '', fname: '', lname: '', address: '', postcode: 0, email: '', tel: 0
  });
  let navigate = useNavigate();

  const handleProfile = async () => {
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
      console.log(res.data)
      switch (res.data.status) {
        case true:
          setProfile({
            gender: res.data.data.gender,
            fname: res.data.data.fname,
            lname: res.data.data.lname,
            address: res.data.data.address,
            postcode: res.data.data.postcode,
            email: res.data.data.email,
            tel: res.data.data.tel
          });
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

  const handleLogout = () => {
    Cookies.remove(`${process.env.REACT_APP_TITLE}_token`);
    navigate('/login');
  }

  useEffect(() => {
    handleProfile();
  }, []);

  return (
    <>
      <header className="p-4">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-right">Welcome, </h1>
          </div>
          <div>
            <span onClick={handleLogout} className="float-right p-3 bg-red-600 text-white rounded cursor-pointer">Log Out</span>
          </div>
        </div>
        <h2 className="mt-4">My info...</h2>
        <p className="capitalize"><b>Name: {profile.fname}</b></p>
        <p className="capitalize"><b>Lastname: {profile.lname}</b></p>
        <p><b>Email: {profile.email}</b></p>
        <p className="capitalize"><b>Gender: {profile.gender}</b></p>
        <p className="capitalize"><b>Address: {profile.address}</b></p>
        <p><b>Postcode: {profile.postcode}</b></p>
        <p><b>Tel: {profile.tel}</b></p>
      </header>

      <main className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
        <h3 className="font-bold">Function List</h3>
        <ul>
          <a href="/one"><li>I. Finding highest item function from input array. (no Math.max)🏔️</li></a>
          <a href="/two"><li>II. Sorting array function. (no Array.sort)📚️</li></a>
          <a href="/three"><li>III. Finding highest age item from input array.⛰️</li></a>
          <a href="/four"><li>IV. Sorting age item (most to lease or lease to most) from input array.🗻️</li></a>
          <a href="/five"><li>V. Finding highest age, salary and children from input array. (user provided self) 📑️</li></a>
        </ul>
      </main>
    </>
  );
}

export default Home;