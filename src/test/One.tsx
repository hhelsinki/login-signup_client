import { FormEvent, useState } from "react";

const One = () => {
    const [data, setData] = useState<any>('');
    const [arr, setArr] = useState<number[]>([]);
    const [result, setResult] = useState<number>(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (data !== "") {
            arr.push((data * 1));
            // or using spread operator
            // mainArray = [...mainArray, inputDATA];
            setData('');
            console.log(arr);
            return;
        }
    }
    const findMax = () => {
        var maxNumber:number;
        let newArray = arr;

        for (let i = 0; i < newArray.length; i++) {
            let forAll = (current:number) => current < (newArray[i] + 1);
            //console.log(`${arr[i]} is more than ${arr[i]}+1 =` + (arr.every(forAll)));
            if (newArray.every(forAll) === true) {
                maxNumber = newArray[i];
                console.log(maxNumber);
                setResult(maxNumber);
            }
        }
    }

    return (
        <>
        <h1 className="text-lg text-center text-gray-600">Create a function for finding the highest item from the input array  (Don't use Math.max)</h1>
            <form onSubmit={handleSubmit} className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                <label>Add input number</label><br/>
                <input type='tel' onChange={(e) => setData(e.target.value)}  className="p-1 rounded indent-1"/>
                <button type='submit' className="p-2 pl-5 pr-5 mr-auto ml-auto mt-2 block rounded-lg bg-blue-500 text-white">Add</button>
            </form>
            <p className="text-center">Array: {arr.map((item:number, index:number) => {
                return <span key={index}>{item}, </span>
            })}</p>
            <br/>
            <button type="button" onClick={findMax} className="p-2 pl-5 pr-5 m-auto block rounded-lg bg-green-600 text-white">Find Max Number</button>
            <p className="text-center">Result: {result}</p>

            <a href="/two"><div className="absolute bottom-12 right-12">➡️ Next Page</div></a>
        </>
    );
}

export default One;