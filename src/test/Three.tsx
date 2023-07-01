import { FormEvent, useState } from "react";

interface Item {
    name: string, age: number | string
}

const Three = () => {
    const [data, setData] = useState<Item>({
        name: '', age: 0
    });
    const [arr, setArr] = useState<Item[]>([]);
    const [result, setResult] = useState<number>(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ((data.name !== "") && (data.age !== "")) {
            arr.push(data);
            // or using spread operator
            // mainArray = [...mainArray, inputDATA];
            console.log(arr);
            return;
        }
    }
    const findMaxAge = () => {
        const result = arr.reduce((obj, cur) => ({
            ...obj,
            [cur.age]: cur
        }), {});

        let restwo = Object.keys(result);
        //console.log(restwo.map(i=> Number(i)));
        let newAge = restwo.map(i => Number(i));

        var mostAge;
        for (let i = 0; i < newAge.length; i++) {
            let forAll = (current: number) => current < ((newAge[i]) + 1);
            //console.log(`${newAge[i]} is more than ${newAge[i]}+1 =` + (newAge.every(forAll)));

            if (newAge.every(forAll) === true) {
                mostAge = newAge[i];
                console.log(mostAge);
                setResult(mostAge);
            }
        }
    }

    return (
        <>
            <h1 className="text-lg text-center text-gray-600">Create a function for finding the highest item from the input array which it's object by age as follows...</h1>
            <form onSubmit={handleSubmit} className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                <label>Name: </label><br />
                <input type='text' onChange={(e) => setData({ ...data, name: e.target.value })}/>
                <br />
                <label>Age: </label><br />
                <input type='text' onChange={(e) => setData({ ...data, age: (e.target.value) })}/>
                <br />
                <button type='submit' className="p-2 pl-5 pr-5 mr-auto ml-auto mt-2 block rounded-lg bg-blue-500 text-white">Add</button>
            </form>
            <div className="text-center">Array: {arr.map((item: Item, index: number) => {
                return <p key={index}>Name: {item.name}, Age: {item.age} </p>
            })}</div>
            <br />
            <button type="button" onClick={findMaxAge} className="p-2 pl-5 pr-5 m-auto block rounded-lg bg-green-600 text-white">Find Most Age</button>
            <p className="text-center">Result: {result}</p>

            <a href="/four"><div className="absolute bottom-12 right-12">➡️ Next Page</div></a>
        </>
    );
}

export default Three;