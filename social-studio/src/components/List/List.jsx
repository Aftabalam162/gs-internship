import React from "react";
import "./List.css";

function createListBox(data) {
    return (<>
        <div className="list-box" key={data[0]}>
            {data[1]}
        </div>
    </>)
}

const List = (props) => {
    return (
        <>
            <div className="list-container" id={props.listId} key={props.listId}>
                <div className="list">
                    {/* {React.Children.map((boxobject) => {
                        return createListBox(boxobject)
                    })} */}
                    {Object.entries(props.children).map((data)=> {
                        return createListBox(data)
                        // console.log(data)
                    })}
                </div>
            </div>
        </>
    )
}

export default List;