import { useLocation, useNavigate } from "react-router-dom"
import { MdArrowBackIosNew } from 'react-icons/md';
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr';

import { ISelfClientProps } from "../../module";

const SingleUser = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const userId = Number(location.pathname.split('/')[location.pathname.split('/').length - 1])

    const goBack = () => {
        navigate(`/happy-clients`)
    }
    const goNext = () => {
        navigate(`/happy-clients/${userId + 1} `)
    }
    const goPrev = () => {
        navigate(`/happy-clients/${userId - 1} `)
    }

    const singleComment: ISelfClientProps = JSON.parse(localStorage.comments)[userId - 1];

    return (
        <div className="page">
            <div className="singleUser">
                <div className="goBack" onClick={goBack}>
                    <MdArrowBackIosNew />
                    Go back!
                </div>
                <div className="singleComment">
                    <div className="singleCommentImg" style={{ backgroundImage: `url('${singleComment.img}')` }}></div>
                    <span className="singleCommentName">{singleComment.fullName} <div>{singleComment.id}</div></span>
                    <span className="singleCommentJob">{singleComment.job}</span>
                    <span className="singleCommentCom"> "{singleComment.comment}" </span>
                </div>
                <div className="nextAndPrev">
                    <button className="nextBtn btn" onClick={goPrev}> <GrFormPrevious/> Prev</button>
                    <button className="prevBtn btn" onClick={goNext}>Next <GrFormNext /></button>
                </div>
            </div>
        </div>
    )
}

export default SingleUser