import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { "id": 1, "name": "Alice", "math_marks": 85, "physics_marks": 78, "chemistry_marks": 92 },
        { "id": 2, "name": "Bob", "math_marks": 78, "physics_marks": 88, "chemistry_marks": 75 },
        { "id": 3, "name": "Charlie", "math_marks": 92, "physics_marks": 90, "chemistry_marks": 94 },
        { "id": 4, "name": "David", "math_marks": 88, "physics_marks": 82, "chemistry_marks": 90 },
        { "id": 5, "name": "Eva", "math_marks": 95, "physics_marks": 96, "chemistry_marks": 93 },
        { "id": 6, "name": "Frank", "math_marks": 76, "physics_marks": 70, "chemistry_marks": 79 },
        { "id": 7, "name": "Grace", "math_marks": 89, "physics_marks": 85, "chemistry_marks": 88 },
        { "id": 8, "name": "Hannah", "math_marks": 93, "physics_marks": 94, "chemistry_marks": 91 },
        { "id": 9, "name": "Isaac", "math_marks": 81, "physics_marks": 76, "chemistry_marks": 80 },
        { "id": 10, "name": "Jack", "math_marks": 87, "physics_marks": 89, "chemistry_marks": 84 }
    ]
    return (
        <div>
            <LChart width={1200} height={400} data={subjectMarksData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math_marks" stroke='red'></Line>
                <Line dataKey="physics_marks" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;