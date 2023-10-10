import React from "react";

import ToDoHeader from '../ToDo-header';
import TodoMainSection from '../ToDo-main-section';

import './App.css';

const App = () => {
    return (
        <section className="todoapp">
            <ToDoHeader />
            <TodoMainSection />
        </section>
    );
};

export default App;