import { useState, useEffect } from "react";


const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState([


        useEffect(() => {
            const media = window.matchMedia(query)
            if (media.matches !== matches) {
                setMatches(media.matches);
            }
        })
    ])
}