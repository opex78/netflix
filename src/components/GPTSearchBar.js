import React, { useRef } from 'react'

function GPTSearchBar() {
    const searchText = useRef(null)
    return (

        < div >
            <form>
                <input ref={searchText} type="text" placeholder='Search Here' />
                <button>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar