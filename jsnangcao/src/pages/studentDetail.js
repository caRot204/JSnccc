import { getStudent } from "../api/student"

const studentsDetail = {
    render: async (id) => {
        const response = await getStudent(id);
        const { data } = response;


        return (`
        <div>
            <div>ID: ${data.id}</div>
            <div>name: ${data.name}</div>
            <div>MSV: ${data.MSV}</div>
        </div>
        `)
    }
}
export default studentsDetail;