import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {

    const [inputValueTitle, setInputValueTitle] = useState('');

    const handleTitle = (event) => {
        setInputValueTitle(event.currentTarget.value);
    };

    const [inputValueContent, setInputValueContent] = useState('');

    const handleContent = (event) => {
        setInputValueContent(event.currentTarget.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDo(inputValueTitle, inputValueContent);
        setInputValueTitle("");
        setInputValueContent("");
    }

    return (
        <section>
            <form>
                <label htmlFor="title">Title</label>
                <input type="text" id="title-inp" name="title" value={inputValueTitle} onChange={handleTitle} />

                <label htmlFor="content">Content</label>
                <input type="text" id="content-inp" name="content" value={inputValueContent} onChange={handleContent} />

                <input type="submit" value="Add" onClick={handleSubmit} />
            </form>
        </section>
    );
};

export default ToDoForm;