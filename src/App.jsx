import './App.css'
import MainNavBar from './components/MainNavBar'

export default function App() {

  return (
    <>
      <MainNavBar />
      <HeroSection />
      <MoviesSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className='h-64 md:h-96 lg:h-128 group relative'>
      {/* HERO IMAGE */}
      <img src='https://m.media-amazon.com/images/S/pv-target-images/b9f4dd7d3f9fa2cb36c757c7aecb690e8fc416e4165eb2d68d5fbdb837a19541.jpg' alt='The Lord of The Rings The One Ring' className='h-full w-full object-cover'></img>

      {/* HERO CONTENT */}
      <div className='absolute bottom-0 w-full bg-gradient-to-b from-transparent px-3 xs:pt-1 md:pt-3 to-black hover:bg-black hover:bg-opacity-60'>
        <div className='container text-mov-grey'>
          <h3 className='text-mov-melon tracking-wider xs:group-hover:mb-1 md:group-hover:mb-2 duration-1000'>
            Fantasy, Adventure
          </h3>
          <h1 className='text-2xl lg:text-4xl xs:group-hover:mb-1 md:group-hover:mb-2 '>THE LORD OF THE RINGS: THE FELLOWSHIP OF THE RING</h1>
          <p className='xs:group-hover:mb-2 md:group-hover:mb-4 duration-1000 w-3/4 md:w-2/3 xs:text-sm md:text-base'>A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.</p>
          <div className='flex space-x-8 opacity-0 group-hover:opacity-100 xs:group-hover:mb-3 md:group-hover:mb-5 transition duration-1000'>
            <div className='flex space-x-6 items-center'>
              <a href='https://www.youtube.com/watch?v=V75dMMIW2B4' target='_blank' className='hover:text-mov-melon hover:underline text-base md:text-2xl'>WATCH TRAILER <i className="fa-brands fa-youtube ms-2"></i></a>
              <a href='https://www.imdb.com/title/tt0120737/' target='_blank' className='hover:text-mov-melon hover:underline text-base md:text-2xl'>IMDB<i className="fa-brands fa-imdb ms-2"></i></a>

            </div>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-chevron-right text-mov-grey absolute xs:text-7xl lg:text-9xl top-1/3 end-3 hover:text-mov-white cursor-pointer"></i>
    </section>
  )
}

function MoviesSection() {
  return (
    <section className='py-24 xs:p-6 md:p-8 lg:p-0 my-10'>
      <div className="container flex space-x-16">
        {/* MOVIE POSTERS */}
        <div className='sm:basis-2/3'>
          <div className="flex space-x-2 divide-x divide-mov-melon divide-opacity-70 mb-8 text-mov-grey xs:text-sm sm:text-2xl">
            <h2 className='text-mov-melon underline xs:text-sm sm:text-2xl'><a href="#">Recommended</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500 xs:text-sm sm:text-2xl'><a href="#">Popular</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500 xs:text-sm sm:text-2xl'><a href="#">Latest</a></h2>
          </div>
          <div className="flex flex-wrap">
            
            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Talk to Me</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=aLAKJu9aJys" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt10638522/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Smile_%282022_film%29.jpg/220px-Smile_%282022_film%29.jpg" alt="Smile 2022 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Smile</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=BcDK7lkzzsU" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt15474916/?ref_=fn_al_tt_1" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg" alt="The Conjuring 2 2016 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>The Conjuring 2</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=VFsmuRPClr4" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt3065204/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Ace Ventura: Pet Detective 1994 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Ace Ventura: Pet Detective</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=AIHIGB9hYgY" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt0109040/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BMTUxNTA5NTAzM15BMl5BanBnXkFtZTgwODE2NDkyMjE@._V1_.jpg" alt="Housebound 2014 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Housebound</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>A young woman is forced to return to her childhood home after being placed under house arrest, where she suspects that something evil may be lurking.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=Ysde4KaFirk" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt3504048/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="Don't Look Up 2021 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full h-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Don't Look Up</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.</p>
                <div className='absolute flex items-center space-x-8 opacity-0 -bottom-4 group-hover:bottom-2 group-hover:opacity-100 duration-500'>
                <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=RbIxYm3mKzI" target='_blank'><i className="fa-solid fa-play"></i></a>
                <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt11286314/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="basis-1/3">
          <h2 className='underline xs:text-sm sm:text-2xl text-mov-grey mb-8'>IMDB TOP PICKS</h2>
          <div className="flex flex-col h-full justify-center space-y-2">
            <div className="flex items-center group space-x-4">
              <div className='basis-1/3 h-full'>
                <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="The Shawshank Redemption 1994 Movie Poster" className='h-full w-full object-cover group-hover:scale-110 duration-500'/>
              </div>
              <div className='basis-2/3 text-mov-grey flex flex-col gap-1 group-hover:text-lg duration-500'>
                <h3 className='text-mov-melon'>THE SHAWSHANK REDEMPTION</h3>
                <p className='font-bold'>9.3/10</p>
                <p className='text-sm'>Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}