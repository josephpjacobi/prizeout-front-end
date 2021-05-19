import DisplayUserInfo from '../display-user-info/display-user-info';
function DisplayPage({user}) {
    return (
    <div className="display-gift-cards-container">
        <DisplayUserInfo user={user}/>
    </div>);
}

export default DisplayPage;