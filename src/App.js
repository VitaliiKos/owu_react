import './App.css';
import Users from "./components/lesson1/Users/Users";
import Posts from "./components/lesson1/Posts/Posts";
import Comments from "./components/lesson1/Comments/Comments";

function App() {
    return (
        <div className="App">

            <div className={'Users'}>
                <h2>Users</h2>
                <Users/>
            </div>

            <div className={'Posts'}>
                <h2>Posts</h2>
                <Posts/>
            </div>

            <div className={'Comments'}>
                <h2>Comments</h2>
                <Comments/>
            </div>

        </div>
    );
}

export default App;
