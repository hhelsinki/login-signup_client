import { FormEvent, useState } from "react";

interface Item {
    name: string, age: number | string
}

const Four = () => {
    const [data, setData] = useState<Item>({
        name: '', age: 0
    });
    const [arr, setArr] = useState<Item[]>([]);
    const [result, setResult] = useState<number []>([]);

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
    const handleSortAge = () => {
        const getAgeByReduce = arr.reduce((obj, cur) => ({
            ...obj,
            [cur.age]: cur
        }), {});

        let getAgeOnly = Object.keys(getAgeByReduce);
        //console.log(restwo.map(i=> Number(i)));
        let array = getAgeOnly.map(i => Number(i));

        //Outer pass
        for (let i = 0; i < array.length; i++) {

            //Inner pass
            for (let j = 0; j < array.length - i - 1; j++) {

                //Value comparison using ascending order

                if (array[j + 1] < array[j]) {
                    //Swapping
                    [array[j + 1], array[j]] = [array[j], array[j + 1]];

                }
            }
        };
        console.log(array);
        setResult(array);
    }

    return (
        <>
            <h1 className="text-lg text-center text-gray-600">Create function for sorting item from input array which objects by age as following this URL</h1>
            <div className="w-fit mx-auto p-8 m-10">
                <form onSubmit={handleSubmit} className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                    <label>Name: </label><br />
                    <input type='text' onChange={(e) => setData({ ...data, name: e.target.value })}/>
                    <br />
                    <label>Age: </label><br />
                    <input type='tel' onChange={(e) => setData({ ...data, age: (e.target.value) })}/>
                    <br />
                    <button type='submit' className="p-2 pl-5 pr-5 mr-auto ml-auto mt-2 block rounded-lg bg-blue-500 text-white">Add</button>
                </form>

                <br />
                <button type="button" onClick={handleSortAge} className="p-2 pl-5 pr-5 m-auto block rounded-lg bg-green-600 text-white">Sorting Age</button>
                <p className="text-center mt-2">Result:
                    {result.map((item: number, index: number) => {
                        return <span key={index}> {item}, </span>
                    })}
                </p>
            </div>
            <a href="/five"><div className="absolute bottom-12 right-12">➡️ Next Page</div></a>
        </>
    );
}

export default Four;