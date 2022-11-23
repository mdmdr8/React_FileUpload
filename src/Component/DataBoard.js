import { Component } from 'react';
import './WriteBoard.css';
import axios from 'axios';



class DataBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writer: '',
            subject: '',
            content: '',
            imageUrl: '',
        }
    }

    componentDidMount = () => {
        axios.get('http://localhost:8090/boarddata/6')
            .then((response) => {
                const board = response.data;
                this.setState({ writer: board.writer, subject: board.subject, content: board.content, imageUrl: 'http://localhost:8090/img/' + board.filename });

            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <section>
                <h2>게시판 글등록</h2>
                <form>
                    <table>
                        <tr>
                            <td className='td_left'>
                                <label for='writer'>글쓴이</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='writer' id='writer' value={this.state.writer} readOnly></input>
                            </td>
                        </tr>

                        <tr>
                            <td className='td_left'>
                                <label for='subject'>제목</label>
                            </td>
                            <td className='td_right'>
                                <input type='text' name='subject' id='subject' value={this.state.subject} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='content'>내용</label>
                            </td>
                            <td className='td_right'>
                                <textarea type='text' name='content' id='content' cols='40' rows='15' value={this.state.content} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td className='td_left'>
                                <label for='file'>이미지</label>
                            </td>
                            <td className='td_right'>
                                <img src={this.state.imageUrl} alt='' width="200px" />
                            </td>
                        </tr>

                    </table>
                    <section id='commandCell'>
                        <a href="#">수정</a>&nbsp;&nbsp;
                        <a href="#">삭제</a>
                    </section>
                </form>
            </section>


        )
    }
}

export default DataBoard;