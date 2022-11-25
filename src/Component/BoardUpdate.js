import { useState, useEffect } from 'react';
import './WriteBoard.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//  useParams가 객체라서 {id} 객체로 묶어줌
function BoardUpdate() {
    const [update, setUpdate] = useState({ subject: '', content: '' });
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8090/boarddata/${id}`)
            .then((response) => {
                const upda = response.data;
                console.log(upda)
                setUpdate({
                    writer: upda.writer, subject: upda.subject,
                    content: upda.content
                });
            }).catch((error) => {
                console.log(error);
            })
    }, [])


    const re_change = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUpdate({ ...update, [name]: value });
    }

    const submit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8090/update/${id}`, null,
            { params: { subject: update.subject, content: update.content } })
            .then((response) => {
                alert(response.data);
                document.location.href = '/';
            })
            .catch((error) => {
                console.log(error)
            });
    }
    return (
        <section>
            <h2>게시판 글수정</h2>
            <form>
                <table>
                    <tr>
                        <td className='td_left'>
                            <label for='id'>번호</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='id' id='id' value={id}></input>
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label for='writer'>글쓴이</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='writer' id='writer' value={update.writer}></input>
                        </td>
                    </tr>

                    <tr>
                        <td className='td_left'>
                            <label for='subject'>제목</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='subject' id='subject' value={update.subject} onChange={re_change} />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label for='content'>내용</label>
                        </td>
                        <td className='td_right'>
                            <textarea type='text' name='content' id='content' cols='40' rows='15' value={update.content} onChange={re_change} />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label for='file'>이미지</label>
                        </td>
                        <td className='td_right'>
                            <img src={update.imageUrl} alt='' width="200px" />
                        </td>
                    </tr>

                </table>
                <section id='commandCell'>
                    <button onClick={submit} >수정 완료</button> &nbsp;&nbsp;
                </section>
            </form >
        </section >


    )
}

export default BoardUpdate;