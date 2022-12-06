import { useState } from 'react';
import JikanList from './JikanList';
import Search from './Search';

const JikanHome = ({ jikanData, setJikan }) => {


    const [searchQuery, setSearchQuery] = useState("");

    const searchResults = jikanData.filter((jikan) => {
    return jikan.title.toLowerCase().includes(searchQuery.toLowerCase());
});


    return (
        <div className="temporary">
            <Search 
            setSearchQuery={setSearchQuery}
            />

            <JikanList 
            jikan={jikanData} 
            setJikan={setJikan}
            setSearchQuery={searchResults}/>
        </div>
    );
};

export default JikanHome;