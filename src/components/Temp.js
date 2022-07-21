import React from "react";
export default function Temp() {
    const [num, setnum] = React.useState(0);
    const [data, setdata] = React.useState([]);
    function handlechange(event) {
        setnum(event.target.value)
    }

    console.log(num);
    function fun(event) {
        event.preventDefault(); //bro my 'd' is capital
        let j = num;
        setdata(() => { return [] })
        for (let i = 0; i < j; i++) {

            setdata((old) => {
                return (
                    [...old, <input type="text" />]

                )
            })




        }





    }


    return (
        <div>


            <form onSubmit={fun} id="search">
                <input type="text" name="number" onChange={handlechange} />
            </form>
            <button type='submit' form='search'> Submit</button>



            {data}


        </div>

    );
}