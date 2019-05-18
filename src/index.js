import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Learning</h4>
                <div>Are you sure you want to delete?</div>
            </ApprovalCard>
            <ApprovalCard>
                <Comment 
                    author="Sam"
                    date="Today at 8:50"
                    text="Learned React good job"
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment
                    author="John"
                    date="Yesterday at 12:13"
                    text="Could be better"
                    image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <Comment 
                    author="Maria"
                    date="2 days ago"
                    text="Nice blog post!"
                    image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root"));