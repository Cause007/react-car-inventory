import Background from '../assets/images/nightscene.jpeg'

const About = () => {
  return (
        <div
          style={{ backgroundImage: `url(${ Background })`, backgroundBlendMode: '35'}}
          className='flex flex-row justify-center mx-auto bg-cover bg-fixed bg-white bg-opacity-35'
          >
            <div className="flex place-items-start h-screen">
                <h3 className="p-5 bg-white bg-opacity-70 text-black rounded">Not much to talk about</h3>
            </div>
        </div>
      )
    }

export default About
