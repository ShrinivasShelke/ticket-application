import React from "react";

const UserName = (props) => {
    const users = [
        { id: 1, name: "ram", title: 'Done', data: "creating Ui For Login page Is Done" },
        { id: 2, name: "ram", title: 'Inprogress', data: "creating Ui For Login page Is inprogress" },
        { id: 3, name: "ram", title: 'Todo', data: "creating Ui For Login page Is Todo" },
        { id: 4, name: "shyam", title: 'Done', data: "creating Ui for signUp page Is Done" },
        { id: 5, name: "shyam", title: 'Inprogress', data: "creating Ui for signUp page Is inprogress" },
        { id: 6, name: "shyam", title: 'Todo', data: "creating Ui for signUp page Is Todo" },
        { id: 7, name: "krishna", title: 'Done', data: "creating Dashboard Is Done" },
        { id: 8, name: 'krishna', title: 'Inprogress', data: "creating Dashboard Is inprogress" },
        { id: 9, name: 'krishna', title: 'Todo', data: "creating Dashboard Is Todo" },
        { id: 10, name: 'krishna', title: 'Todo', data: "creating Modal Is Todo" }]


    const ramData= users.filter((data) => {
        return (data.name === "ram")
    })
    const shyamData= users.filter((data) => {
        return (data.name === "shyam")
    })
    const krishnaData= users.filter((data) => {
        return (data.name === "krishna")
    })

    const ramClickHandler = () => {
                props.onRamData(ramData)
    }
    const shyamClickHandler=()=>{
                props.shyamData(shyamData)
    }
    const krishnaClickHandler=()=>{
                props.krishnaData(krishnaData)
    }
     return (<>
        <div className="userName">
            <button onClick={ramClickHandler}>Ram</button>
            <button onClick={shyamClickHandler}>Shyam</button>
            <button onClick={krishnaClickHandler}>Kishan</button>
        </div>
    </>)
}

export default UserName;