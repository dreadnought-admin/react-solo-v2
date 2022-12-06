import JikanItem from './JikanItem';

const JikanList = ({ setJikan, setSearchQuery }) => {

    return (
       <ul className="jikans">
        {setSearchQuery.map(jikan => (
            <JikanItem 
            jikan={jikan}
            setJikan={setJikan} />
        ))}
       </ul>
    );
};

export default JikanList;
