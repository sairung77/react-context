import React, { useState } from "react";
const StudentContext = React.createContext();
export const StudentProvider = ({ children }) => {
    const [studentData, setStudentData] = useState([
        { id: 1, name: "jeerawuth", age: 14 },
        { id: 2, name: "sombat", age: 15 },
        { id: 3, name: "mintra", age: 13 },
    ]);

    const addStudentHandler = (newStudent) => {
        setStudentData([...studentData, newStudent])
    }

    const editStudentHandler = (objData) => {
        const index = studentData.findIndex((item) => item.id === objData.id);
        const updateObj = {
            id: objData.id,
            name: objData.name,
            age: objData.age
        };
        const newBlogs = [
            ...studentData.slice(0, index),
            updateObj,
            ...studentData.slice(index + 1),
        ];
        setStudentData(newBlogs)
    }
    const deleteStudentHandler = (id) => {
        const updateBlogs = studentData.filter((item) => { return item.id !== id })
        setStudentData(updateBlogs);
    }
    return (
        <StudentContext.Provider value={{
            data: studentData,
            addStudent: (student) => addStudentHandler(student),
            editStudent : (student) => editStudentHandler(student),
            deleteStudent : (id) => deleteStudentHandler(id)
        }}>
            {children}
        </StudentContext.Provider>
    )
}
export default StudentContext;