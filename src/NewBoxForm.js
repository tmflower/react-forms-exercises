import React, {useState} from "react";

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="enter width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="enter height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                name="color"
                placeholder="enter color"
                value={formData.color}
                onChange={handleChange}
            />
            <button onClick={addBox}>Add a Box</button>
        </form>
    )
}

export default NewBoxForm;