import React, { useEffect, useState } from 'react'

const Page = () => {
    const [categories, setCategories] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        const url = 'https://api.publicapis.org/categories'

        fetch(url).then(res => res.json()).then(response => {
            setCategories(response)
        })
    }, [])

    const handleEnterInput = e => setInput(e.target.value)

    return (
        <div className="container">
            <input
                type="text"
                placeholder="category"
                onChange={handleEnterInput}
                value={input}
            />

            <ul>
                {
                    categories.filter(c => c.toLowerCase().includes(input.toLowerCase())).map((category, i) =>
                        <li key={i}>{category}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Page