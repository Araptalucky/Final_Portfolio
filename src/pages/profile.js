import React, { useState } from "react";

const Profile = () => {
    const initialData = [
        { semester: "Semester 1", courses: ["Math", "Physics", "CS", "English", "History", "Biology"] },
        { semester: "Semester 2", courses: ["Algebra", "Chemistry", "Databases", "Literature", "Geography", "Statistics"] },
    ];

    const [semesters, setSemesters] = useState(initialData);
    const [newCourse, setNewCourse] = useState("");

    const addCourse = (index) => {
        if (!newCourse.trim()) return;
        const updatedSemesters = [...semesters];
        updatedSemesters[index].courses.push(newCourse);
        setSemesters(updatedSemesters);
        setNewCourse("");
    };

    const deleteCourse = (semIndex, courseIndex) => {
        const updatedSemesters = [...semesters];
        updatedSemesters[semIndex].courses.splice(courseIndex, 1);
        setSemesters(updatedSemesters);
    };

    return (
        <div>
            <h2>Academic Results</h2>
            {semesters.map((semester, semIndex) => (
                <div key={semIndex}>
                    <h3>{semester.semester}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Course Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {semester.courses.map((course, courseIndex) => (
                                <tr key={courseIndex}>
                                    <td>{course}</td>
                                    <td>
                                        <button onClick={() => deleteCourse(semIndex, courseIndex)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <input placeholder="New Course" value={newCourse} onChange={(e) => setNewCourse(e.target.value)} />
                    <button onClick={() => addCourse(semIndex)}>Add Course</button>
                </div>
            ))}
        </div>
    );
};

export default Profile;
