import { useState, useEffect } from 'react';
import './WriteBoard.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

//  useParams가 객체라서 {id} 객체로 묶어줌
function DataBoard() {
    const [detail, setData] = useState({ writer: '', subject: '', content: '', imageUrl: '' });

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8090/boarddata/${id}`)
            .then((response) => {
                const board = response.data;
                setData({
                    writer: board.writer, subject: board.subject,
                    content: board.content, imageUrl: 'http://localhost:8090/img/' + board.filename
                });
            }).catch((error) => {
                console.log(error);
            }, [])
    })




    // class DataBoard extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             writer: '',
    //             subject: '',
    //             content: '',
    //             imageUrl: '',
    //         }
    //     }

    //     componentDidMount = () => {
    //         axios.get('http://localhost:8090/boarddata/6')
    //             .then((response) => {
    //                 const board = response.data;
    //                 this.setState({ writer: board.writer, subject: board.subject, content: board.content, imageUrl: 'http://localhost:8090/img/' + board.filename });

    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //     }


    return (
        <section>
            <h2>게시판 글보기</h2>
            <form>
                <table>
                    <tr>
                        <td className='td_left'>
                            <label for='id'>번호</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='writer' id='writer' value={id} readOnly></input>
                        </td>
                    </tr>

                    <tr>
                        <td className='td_left'>
                            <label for='subject'>제목</label>
                        </td>
                        <td className='td_right'>
                            <input type='text' name='subject' id='subject' value={detail.subject} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label for='content'>내용</label>
                        </td>
                        <td className='td_right'>
                            <textarea type='text' name='content' id='content' cols='40' rows='15' value={detail.content} readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td className='td_left'>
                            <label for='file'>이미지</label>
                        </td>
                        <td className='td_right'>
                            <img src={detail.imageUrl} alt='' width="200px" />
                        </td>
                    </tr>

                </table>
                <section id='commandCell'>
                    <a href={"/update/" + id}>수정</a>&nbsp;&nbsp;
                    <a href="#">삭제</a>
                </section>
            </form>
        </section>


    )
}

export default DataBoard;