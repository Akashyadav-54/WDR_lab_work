// src/components/Faculty.jsx

function Faculty({ facName, subject, experience }) {
    return (
        <div>
            <h2>Faculty Details</h2>
            <p><strong>Name:</strong> {facName}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Experience:</strong> {experience} years</p>
        </div>
    );
}

export default Faculty;
