import { useState } from "react";

const Two = () => {
    const [arr, setArr] = useState<number[]>([]);

    const handleSort = () => {
        const array = [3, 2, 8, 4, 9, 6];
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
        setArr(array);
    }

    return (
        <>
            <h1 className="text-lg text-center text-gray-600">Create function for sorting array (Don't use Array.sort)</h1>
            <div className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                <p>Given Array = [3,2,8,4,9,6]</p>
                <br/>
                <button type="button" onClick={handleSort} className="p-2 pl-5 pr-5 m-auto block rounded-lg bg-green-600 text-white">Sorting Array</button>
                <p className="text-center mt-2">Result: 
                    {arr.map((item:number, index: number) => {
                        return <span key={index}> {item}, </span>
                    })}
                </p>
            </div>

            <a href="/three"><div className="absolute bottom-12 right-12">➡️ Next Page</div></a>
        </>
    );
}

export default Two;