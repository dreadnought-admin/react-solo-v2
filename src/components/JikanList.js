import JikanItem from './JikanCard';
 
const JikanList = ({ jikans }) => {
    const jikanList = jikans.map((jikan) => {
        return <JikanItem key={jikan.id} jikan={jikan} />
    })
 
    return (
       <ul className="jikans">
        {jikanList}
       </ul>
    );
};
 
export default JikanList;