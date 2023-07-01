import { FormEvent, useState } from "react";

interface User {
    name: string, age: number | string, salary: number | string, children: number | string
}
interface Most {
    age: number, salary:number, children: number,
    isAgeActive: boolean, isSalaryActive: boolean, isChildrenActive: boolean
}

const Five = () => {
    const [data, setData] = useState<User>({
        name: '', age: 0, salary: 0, children: 0
    });
    let [arr, setArr] = useState<User[]>([]);
    const [most, setMost] = useState<Most>({
        age: 0, salary:0, children:0, 
        isAgeActive: false, isSalaryActive: false, isChildrenActive: false
    })

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

    const handleMost = (number: number) => {
        switch (number) {
            case 1:
                //expeced output arrAge = [60, 20, 40];
                const getAgeByReduce = arr.reduce((obj, cur) => ({
                    ...obj,
                    [cur.age]: cur
                }), {});

                let getAgeOnly = Object.keys(getAgeByReduce);
                let newAge = getAgeOnly.map(i => Number(i));

                var mostAge;
                for (let i = 0; i < newAge.length; i++) {
                    let forAll = (current: number) => current < ((newAge[i]) + 1);
                    console.log(`${newAge[i]} is more than ${newAge[i]}+1 =` + (newAge.every(forAll)));

                    if (newAge.every(forAll) === true) {
                        mostAge = newAge[i];
                        console.log(mostAge);
                        setMost({
                            ...most, age: mostAge,
                            isAgeActive: true,
                            isSalaryActive: false,
                            isChildrenActive: false
                        });
                    }

                    //console.log(arr[i].age);
                }
                break;
            case 2:
                //expeced output arrAge = [60, 20, 40];
                const getSalaryByReduce = arr.reduce((obj, cur) => ({
                    ...obj,
                    [cur.salary]: cur
                }), {});

                let getSalaryOnly = Object.keys(getSalaryByReduce);
                let newSalary = getSalaryOnly.map(i => Number(i));

                var mostSalary;
                for (let i = 0; i < newSalary.length; i++) {
                    let forAll = (current: number) => current < ((newSalary[i]) + 1);
                    console.log(`${newSalary[i]} is more than ${newSalary[i]}+1 =` + (newSalary.every(forAll)));

                    if (newSalary.every(forAll) === true) {
                        mostSalary = newSalary[i];
                        console.log(mostSalary);
                        setMost({
                            ...most, salary: mostSalary,
                            isAgeActive: false,
                            isSalaryActive: true,
                            isChildrenActive: false
                        });
                    }

                    //console.log(arr[i].salary);
                }
                break;
            case 3:
                //expeced output arrAge = [60, 20, 40];
                const getChildByReduce = arr.reduce((obj, cur) => ({
                    ...obj,
                    [cur.children]: cur
                }), {});

                let getChildOnly = Object.keys(getChildByReduce);
                let newChild = getChildOnly.map(i => Number(i));

                var mostChild;
                for (let i = 0; i < newChild.length; i++) {
                    let forAll = (current: number) => current < ((newChild[i]) + 1);
                    console.log(`${newChild[i]} is more than ${newChild[i]}+1 =` + (newChild.every(forAll)));

                    if (newChild.every(forAll) === true) {
                        mostChild = newChild[i];
                        console.log(mostChild);
                        setMost({
                            ...most, children: mostChild,
                            isAgeActive: false,
                            isSalaryActive: false,
                            isChildrenActive: true})
                    }

                    //console.log(arr[i].children);
                }
                break;
        }

    }

    return (
        <>
            <h1 className="text-lg text-center text-gray-600">Create a function for finding the highest item from the input array which objects by specified property which user can provide by themself.</h1>
            <div className="w-fit mx-auto p-8 m-10">
                <form onSubmit={handleSubmit} className="w-fit mx-auto bg-blue-100 rounded-xl shadow border p-12 m-10">
                    <label>Name: </label><br />
                    <input type='text' onChange={(e) => setData({ ...data, name: e.target.value })}/>
                    <br />
                    <label>Age: </label><br />
                    <input type='text' onChange={(e) => setData({ ...data, age: (e.target.value) })}/>
                    <br />
                    <label>Salary: </label><br />
                    <input type='text' onChange={(e) => setData({ ...data, salary: e.target.value })}/>
                    <br />
                    <label>Children: </label><br />
                    <input type='text' onChange={(e) => setData({ ...data, children: (e.target.value) })}/>
                    <br />
                    <button type='submit' className="p-2 pl-5 pr-5 mr-auto ml-auto mt-2 block rounded-lg bg-blue-500 text-white">Add</button>
                </form>
                <div>Array: {arr.map((item:User, index:number)=> {
                    return <p key={index}>Name: {item.name}, Age: {item.age}, Salary: {item.salary}, Children: {item.children}</p>
                })}
                </div>

                <br />
                <button type="button" onClick={() => handleMost(1)} className="p-2 pl-4 pr-4 ml-1 rounded-lg bg-green-600 text-white">Most Age</button>
                <button type="button" onClick={() => handleMost(2)} className="p-2 pl-4 pr-4 ml-1 rounded-lg bg-yellow-500 text-white">Most Salary</button>
                <button type="button" onClick={() => handleMost(3)} className="p-2 pl-4 pr-4 ml-1 rounded-lg bg-green-600 text-white">Most Children</button>
                <br/>
                <p className="mt-2">Result: 
                    {most.isAgeActive &&(<span><i>Age </i>{most.age}</span>)}
                    {most.isSalaryActive &&(<span><i>Salary </i>{most.salary.toLocaleString()}</span>)}
                    {most.isChildrenActive && (<span><i>Children </i>{most.children}</span>)}
                </p>

            </div>
            <a href="/home"><div className="absolute bottom-12 right-12">➡️ Back to Home...</div></a>
        </>
    );
}

export default Five;