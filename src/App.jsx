// importação de Profile
import Profile from './components/Profile'

export default function App(){
  return(
    <body>
      <Profile
      // Foto 
      img={'./avatar.jpg'} 

      // Nome
      name={'Paulo Lima'} 

      // Biografia
      bio={'Jogador de vôlei amador, desenvolvedor back-end, estudando DS na escola EEEP Dep. Roberto Mesquita'} 

      // Telefone
      phone={'+ 55 (85) 97400-1619'} 

      // Email
      email={'pl207754@gmail.com'} 
      // Links
      twitterUrl={'https://animeprofile.com.br/participant/plzin_-4/'} 
      githubUrl={'https://github.com/PauloLima4'} 
      linkedinUrl={'https://paulolima4.github.io/Portifolio'}>
      </Profile>
    </body> 
  )
}