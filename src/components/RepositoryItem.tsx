import '../Styles.scss'

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

            <a href={props.repository.html_url} className='grid-image2'>
                <img className='grid-image2' src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="" />
                <h4>{props.repository.name}</h4>
                {/* <p>{props.repository.description}</p> */}
                <h5>
                    Acessar Repositório
                </h5>
            </a>

        </div>
    )
}