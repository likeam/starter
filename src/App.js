
import ApprovalCard from "./ApprovalCard";
import CommentsDetail from "./CommentsDetail";
// import { faker } from '@faker-js/faker';




function App() {
  return (
    <div className="ui container comments">
    <ApprovalCard >
      <CommentsDetail author="Qudsia" timeAgo="Today at 4:45PM" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentsDetail author="Rahi" timeAgo="Yesterday at 5:15Am" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentsDetail author="Lahoti" timeAgo="Yesterday at 8:12PM" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentsDetail author="Tabri" timeAgo="2 Days ago at 2:11PM" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentsDetail author="Boota" timeAgo="7 Days ago at 6:51PM" />
    </ApprovalCard>
    <ApprovalCard>
      <CommentsDetail author="Arshad" timeAgo="24 days agoeat 9:40PM" />
    </ApprovalCard>
    </div>
  );
}

export default App;
