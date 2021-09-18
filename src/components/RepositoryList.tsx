import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem"

import '../Styles.scss';

interface Repository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/allissonneo/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="grid-content" >



            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository} />
            })}


        </section>
    )
}