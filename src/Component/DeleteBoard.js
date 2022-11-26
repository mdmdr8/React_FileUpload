import { useState } from "react"
import { useParams } from "react-router-dom";
import "./DeleteBoard.css"
import axios from 'axios'

function DeleteBoard() {

    const [password, setPassword] = useState('');
    const deleteBtn = (e) => {
        // axios.메소드('url', data, params:{키(name):값(value)})
        axios.put(`http://localhost:8090/delete/${id}`, null,
            {
                params: { password: password }
            })
            .then(response => {
                const msgno = response.data;
                if (msgno == -1)
                    alert('글번호 오류');
                else if (msgno == -2)
                    alert('비밀번호 오류');
                else if (msgno == 0) {
                    alert('글 삭제 성공');
                    document.location.href = '/';
                }
            }).catch(error => {
                console.log(error);
            })
    }

    const { id } = useParams();

    return (
        <section id="passForm">
            <table border="1">
                <tr>
                    <td><label>글 비밀번호</label></td>
                    <td><input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={deleteBtn}>삭제</button>&nbsp;&nbsp;&nbsp;
                        <button onClick="javascript:history.go(-1)"> 취소</button>
                    </td>
                </tr>

            </table>
        </section>
    )
}
export default DeleteBoard;