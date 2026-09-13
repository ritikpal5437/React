function StudentInfo(props) {
  return (
    <div>
      <h2>Student Information</h2>

      <p>Name: {props.name}</p>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>

      <button>View Profile</button>
    </div>
  );
}

export default StudentInfo;