import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Navigation";
import TaskForm from "./TaskForm";

export default function App() {
    return (
        <>
            <Nav />
            <TaskForm />
        </>
    );
}
