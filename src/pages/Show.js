import { useState } from "react";

function Show(props) {
    //grab the id from th erl
    const id = props.match.params.id
    //put the people array in its variable
    const people = props.people
    // find the individual person in people

    const person = people.find((p) => {
        //this will loop over the poeple array and will look at the _id, if the _id matches the id variable we created above, it will display thtat person
        return p._id === id;
    })

    //state for form
    const [editForm, setEditFrom] = useState(person)

    //handleChange function for form
    const handleChange = (event) => {
        setEditFrom({
            ...editForm,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        //prevent refresh
        event.preventDefault()
        //update the person
        props.updatePeople(editForm, person._id)
        //redirect people back to index
        props.history.push("/")
    }

    const removePerson = () => {
        props.deletePeople(person._id)
        props.history.push("/")
    }

    return <div className="person">
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img src={person.image} alt ={person.name} />
        <button onClick={removePerson} id="delete">Delete</button>

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={editForm.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <input 
                type="text"
                value={editForm.image}
                name="image"
                placeholder="image url"
                onChange={handleChange}
            />
            <input
                type="text"
                value={editForm.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <input type="submit" value="Update Person" />
        </form>
    </div>
}

export default Show