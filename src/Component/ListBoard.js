import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListBoard.css';
import { Link } from 'react-router-dom';
//목록 조회
function ListBoard() {
    const [boards, setBords] = useState([]);
    // const [acc, accAll] = useState({id:'', name:'', balance:0});

    //componentdidmount와 같은 기능
    useEffect(() => {
        axios.get('http://localhost:8090/boardlist').then((response) => {
            console.log(response.data)
            setBords(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);
    // jsp랑 thymeleaf



    return (
        <>
            <h2> 글 목록 <Link to={"/writeboard"}>게시판 글쓰기</Link> </h2>
            <section>
                <table className='table_list'>
                    <tbody>
                        <tr id='tr_top'>
                            <th>번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                        {
                            boards.map((board) => {
                                return (<tr key={board.id}>
                                    <td>{board.id}</td>
                                    <td>{board.writer}</td>
                                    <td>{board.subject}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </section>
        </>
    )
}
export default ListBoard;