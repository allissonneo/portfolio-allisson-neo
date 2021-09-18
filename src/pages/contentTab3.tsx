import React, { useEffect, useState } from 'react';
import { RepositoryItem } from '../components/RepositoryItem';

import '../Styles.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const ContentTab3: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/allissonneo/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className='grid-content'>

      {repositories.map(repository => {
        return <RepositoryItem key={repository.name} repository={repository} />
      })}
    </section>
  );
}

export default ContentTab3;