import '../Styles.scss'
import Github from '../assets/github-original.svg';
interface RepositoryItemProps {

    repository: {
        name: string;
        description: string;
        html_url: string;
    }

}
export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <div>
            <a id = "ultima-imagem" target="_blank" rel="noreferrer" href={props.repository.html_url} className='grid-image2'>
                <img className='grid-image2 bounce' src={Github} alt="" />
                <h2 className = 'agadois' >{props.repository.name}</h2>
            </a>
        </div>
    )
}