import React from 'react'
import { faker } from '@faker-js/faker';

const CommentsDetail = (props) => {


    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avtar" />
                </a>
                <div className="content">
                    <a href="/" className="author">
                    {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {faker.lorem.words(4)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  CommentsDetail;

