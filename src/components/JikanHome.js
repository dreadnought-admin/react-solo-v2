import { useState } from 'react';
import JikanList from './JikanList';
import Search from './Search';
import NewSubmission from './NewSubmission';

const JikanHome = ({ jikanData, setJikan }) => {

    const [searchQuery, setSearchQuery] = useState("");

    const searchResults = jikanData.filter((jikan) => {
    return jikan.title.toLowerCase().includes(searchQuery.toLowerCase());
});


    return (
        <div className="temporary">

            <div>
                <Search 
                setSearchQuery={setSearchQuery}
                />
            </div>

            <div>
                <JikanList 
                jikan={jikanData} 
                setJikan={setJikan}
                setSearchQuery={searchResults}
                />
            </div>

        </div>
    );
};

export default JikanHome;