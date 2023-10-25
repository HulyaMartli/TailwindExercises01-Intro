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
      <img src='https://m.media-amazon.com/images/S/pv-target-images/b9f4dd7d3f9fa2cb36c757c7aecb690e8fc416e4165eb2d68d5fbdb837a19541.jpg' alt='The Lord of The Rings Movie Poster' className='h-full w-full object-cover'></img>

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
              <i className="fa-solid fa-chevron-right text-mov-grey absolute xs:text-7xl lg:text-8xl bottom-1/4 xl:end-72 lg:end-58 xs:end-3 sm:end-28 md:end-48 hover:text-mov-melon cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function MoviesSection() {
  return (
    <section className='sm:py-16 xs:py-8 px-3'>
      <div className="container flex lg:space-x-10 lg:flex-row flex-col xs:gap-10 xs:space-x-0">
        {/* MOVIE POSTERS */}
        <div className='sm:basis-2/3 xs:basis-1'>
          <div className="flex space-x-2 divide-x divide-mov-melon divide-opacity-70 mb-8 text-mov-grey xs:text-sm sm:text-2xl">
            <h2 className='text-mov-melon underline xs:text-sm sm:text-2xl'><a href="#">Recommended</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500 xs:text-sm sm:text-2xl'><a href="#">Popular</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500 xs:text-sm sm:text-2xl'><a href="#">Latest</a></h2>
          </div>
          <div className="flex flex-wrap">

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://www.gscmovies.com.my/wp-content/uploads/2023/05/TKTME-Social-Media-1080-X-1350-px-H.jpg" alt="Talk To Me 2022 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full h-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 text-mov-grey opacity-0 group-hover:opacity-100">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Talk to Me</h3>
                <p className='text-xs group-hover:mb-10 duration-500'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=aLAKJu9aJys" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt10638522/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BZjE2ZWIwMWEtNGFlMy00ZjYzLWEzOWEtYzQ0MDAwZDRhYzNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg" alt="Smile 2022 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Smile</h3>
                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500'>After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=BcDK7lkzzsU" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt15474916/?ref_=fn_al_tt_1" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BZjU5OWVlN2EtODNlYy00MjhhLWI0MDUtMTA3MmQ5MGMwYTZmXkEyXkFqcGdeQXVyNjE5MTM4MzY@._V1_.jpg" alt="The Conjuring 2 2016 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>The Conjuring 2</h3>
                <p className='text-xs group-hover:mb-10 duration-500'>Ed and Lorraine Warren travel to North London to help a single mother raising four children alone in a house plagued by a supernatural spirit.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=VFsmuRPClr4" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt3065204/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BYmVhNmFmOGYtZjgwNi00ZGQ0LThiMmQtOGZjMDUzNzJhMGIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="Ace Ventura: Pet Detective 1994 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Ace Ventura: Pet Detective</h3>
                <p className='text-xs group-hover:mb-10 duration-500'>A goofy detective specializing in animals goes in search of the missing mascot of the Miami Dolphins.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=AIHIGB9hYgY" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt0109040/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BMTUxNTA5NTAzM15BMl5BanBnXkFtZTgwODE2NDkyMjE@._V1_.jpg" alt="Housebound 2014 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Housebound</h3>
                <p className='text-xs group-hover:mb-10 duration-500'>A young woman is forced to return to her childhood home after being placed under house arrest, where she suspects that something evil may be lurking.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=Ysde4KaFirk" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt3504048/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

            <div className='relative group overflow-hidden sm:basis-1/3 w-full'>
              <img src="https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="Don't Look Up 2021 Movie Poster" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full h-full' />
              <div className="absolute bottom-0 w-full p-3 group-hover:bg-black group-hover:bg-opacity-70 opacity-0 group-hover:opacity-100 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-2 duration-500'>Don't Look Up</h3>
                <p className='text-xs group-hover:mb-10 duration-500'>Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.</p>
                <div className='absolute flex items-center space-x-8 -bottom-4 group-hover:bottom-2 duration-500'>
                  <a className='hover:text-mov-melon text-lg xs:text-base' href="https://www.youtube.com/watch?v=RbIxYm3mKzI" target='_blank'><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-3xl xs:text-xl' href="https://www.imdb.com/title/tt11286314/" target='_blank'><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* IMDB TOP RATED */}
        <div className="basis-1/3">
          <h2 className='xs:text-sm sm:text-2xl text-mov-grey flex items-center'><i className="fa-brands fa-imdb text-3xl me-2 text-mov-melon"></i>TOP PICKS</h2>
          <div className="flex flex-col h-full justify-between xs:py-6 md:py-8 sm:gap-0 xs:gap-2">
            <div className="flex items-center group space-x-4">
              <div className='basis-1/3 h-full'>
                <img src="https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="The Shawshank Redemption 1994 Movie Poster" className='h-full w-full object-cover group-hover:scale-90 duration-500' />
              </div>
              <div className='basis-2/3 text-mov-grey flex flex-col gap-1 group-hover:text-lg duration-500'>
                <h3 className='text-mov-melon'>The Shawshank Redemption</h3>
                <p className='font-bold'><i className="fa-solid fa-star text-mov-melon"></i> 9.3/10</p>
                <p className='text-sm'>Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.</p>
              </div>
            </div>

            <div className="flex items-center group space-x-4">
              <div className='basis-1/3 h-full'>
                <img src="https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" alt="The Godfather 1972 Movie Poster" className='h-full w-full object-cover group-hover:scale-90 duration-500' />
              </div>
              <div className='basis-2/3 text-mov-grey flex flex-col gap-1 group-hover:text-lg duration-500'>
                <h3 className='text-mov-melon'>The Godfather</h3>
                <p className='font-bold'><i className="fa-solid fa-star text-mov-melon"></i> 9.2/10</p>
                <p className='text-sm'>Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.</p>
              </div>
            </div>

            <div className="flex items-center group space-x-4">
              <div className='basis-1/3 h-full'>
                <img src="https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg" alt="The Dark Knight 2008 Movie Poster" className='h-full w-full object-cover group-hover:scale-90 duration-500' />
              </div>
              <div className='basis-2/3 text-mov-grey flex flex-col gap-1 group-hover:text-lg duration-500'>
                <h3 className='text-mov-melon'>The Dark Knight</h3>
                <p className='font-bold'><i className="fa-solid fa-star text-mov-melon"></i> 9.0/10</p>
                <p className='text-sm'>When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
              </div>
            </div>

            <div className="flex items-center group space-x-4">
              <div className='basis-1/3 h-full'>
                <img src="https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" alt="The Godfather 1974 Movie Poster" className='h-full w-full object-cover group-hover:scale-90 duration-500' />
              </div>
              <div className='basis-2/3 text-mov-grey flex flex-col gap-1 group-hover:text-lg duration-500'>
                <h3 className='text-mov-melon'>The Godfather Part II</h3>
                <p className='font-bold'><i className="fa-solid fa-star text-mov-melon"></i> 9.0/10</p>
                <p className='text-sm'>The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}