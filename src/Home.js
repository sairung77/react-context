import React, { useContext } from 'react'
import StudentContext from './context/StudentProvider'
export default function Home() {
    const contextObj = useContext(StudentContext);

    const addStudentHandler = () => {
        const id = `${contextObj.data.length + 1}`;
        const newStudent = {
            id: id,
            name: "Student #" + id,
            age: Math.round(Math.random() * 5) + 10,
        };
        contextObj.addStudent(newStudent)
    }

    const editStudentHandler = (id) => {
        const updatedStudent = {
            id: id,
            name: "Student # " + id + " edit at:" + new Date().toLocaleTimeString(),
            age: Math.round(Math.random() * 5) + 10,
        }
        contextObj.editStudent(updatedStudent)
    }
    return (
        <div style={{ padding: 10 }}>
            <button onClick={addStudentHandler}>เพิ่มนักเรียน</button>
            <hr />
            {
                contextObj.data.map((item, index) => {
                    return (
                        <div key={index}>
                            <p>
                                {item.name} อายุ {item.age}
                            </p>
                            <button onClick={editStudentHandler.bind(this, item.id)}> แก้ไข </button>
                            <button onClick={contextObj.deleteStudent.bind(this, item.id)}>ลบ</button>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
