import React, {useState} from 'react';
import style from './SearchBar.module.css';

const searchOptions = {
    'Best Match' : 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

function SearchBar({ searchYelp }) {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [option, setOption] = useState('best_match');


    const optionStyle = (searchOption) => {
        if(option === searchOption) {
            return style.active;
        }
        return '';
    }

    const renderOption = () => {
        return Object.keys(searchOptions).map((searchOption) => {
            let searchOptionValue = searchOptions[searchOption];
            return (
                <li className={optionStyle(searchOptionValue)}
                    key={searchOptionValue}
                    onClick={() => {
                        handleOptionChange(searchOptionValue);
                    } }
                >
                    {searchOption}
                </li>
            );
        });
    };


    const handleOptionChange = (searchOption) => {
        setOption(searchOption);
    }

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        searchYelp(term, location, option);
    }
    
    return(
        <div className={style.SearchContainer}>
            <div className={style.ViewOptionContainer}>
                <div className={style.ViewOption}>
                    <ul>
                        {renderOption()}
                    </ul>  
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={style.SearchBarContainer}><div className={style.ContainerContainer}>
                    <input onChange={handleTermChange} type='search' placeholder='Search businesses...' />
                    <input onChange={handleLocationChange} placeholder='Where?' />
                </div></div>

                <div className={style.BtnContainer}>
                    <div className={style.Btn}>
                        <button type='submit'>Let's Go!</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default SearchBar;