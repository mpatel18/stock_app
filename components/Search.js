import { useState } from 'react'
import { useRouter } from 'next/router' 

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const onEnter = (e) => {
        e.key === 'Enter' && router.push(searchURL(search));
    }

    const searchURL = (search) => `/${search}`

    return (
        <>
            <input 
                className="input" 
                type="text" 
                value={search}
                placeholder="Search"
                onChange={handleChange}
                onKeyUp={onEnter}
            />
        </>
    )
}

export default Search
