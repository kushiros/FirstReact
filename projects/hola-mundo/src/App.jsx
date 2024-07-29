import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App (){
    const formatUserName = (userName) => `@${userName}`;
    const users = [
        { 
            formatUserName: formatUserName,
            initialIsFollowing: false,
             userName: 'mcrisback44',
             name: 'VOLVIOQUANXI',
        },
        {
            formatUserName:formatUserName,
            userName:"kushi___chan", 
            name:"kushi__chan",
            initialIsFollowing:true,
        }
    ]
    return(
        <>
        <section className="App">
        {
                users.map(({userName,name,initialIsFollowing,formatUserName })=>(
                    <TwitterFollowCard 
                        userName={userName}
                        key={userName}
                        initialIsFollowing={initialIsFollowing}
                        name={name}
                        formatUserName={formatUserName}
                    >
                        
                    </TwitterFollowCard>
                ))
                }
            
        </section>
            
        </>
       
    )
}