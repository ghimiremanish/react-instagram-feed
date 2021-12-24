import React from 'react'

interface FeedProps {
    token: string,
}

const Feed = (props: FeedProps) => {
    return <>Hello world ! Your token is :{props.token} </>
}

export default Feed