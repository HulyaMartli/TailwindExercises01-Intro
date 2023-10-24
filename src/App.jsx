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
      <img src='https://c4.wallpaperflare.com/wallpaper/999/51/612/art-artistic-artwork-fantasy-wallpaper-preview.jpg' alt='The Lord of The Rings The One Ring' className='h-full w-full object-cover'></img>

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
    <section className='py-24 xs:p-6 md:p-8 lg:p-0 mt-10'>
      <div className="container flex space-x-16">
        {/* MOVIE POSTERS */}
        <div className='basis-2/3'>
          <div className="flex space-x-2 divide-x divide-mov-melon divide-opacity-70 mb-8 text-mov-grey">
            <h2 className='text-mov-melon underline'><a href="#">Best</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500'><a href="#">Popular</a></h2>
            <h2 className='ps-2 hover:text-mov-melon duration-500'><a href="#">Latest</a></h2>
          </div>
          <div className="flex flex-wrap">
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
            <div className='relative group overflow-hidden basis-1/3'>
              <img src="https://m.media-amazon.com/images/M/MV5BMmY5ZGE4NmUtZWI4OS00ZWJmLWFjMzgtOWUyZjI4NDg3Y2E5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX190_CR0,0,190,281_.jpg" alt="Talk To Me 2022" className='group-hover:scale-110 group-hover:opacity-50 duration-500 w-full' />
              <div className="absolute bottom-0 w-full p-3 bg-black bg-opacity-70 text-mov-grey">
                <h3 className='group-hover:text-mov-melon group-hover:mb-1 duration-500'>TALK TO ME</h3>
                <div className='hidden group-hover:block group-hover:mb-2 transition duration-1000 w-48'>
                  <p className='mb-2 group-hover:mb-4 duration-500 xs:text-xs md:text-base'>When a group of friends discover how to conjure spirits using an embalmed hand, they unleash terrifying supernatural forces.</p>
                  <a className='hover:text-mov-melon me-4 text-lg' href=""><i className="fa-solid fa-play"></i></a>
                  <a className='hover:text-mov-melon text-xl' href=""><i className="fa-brands fa-imdb"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/3"></div>
      </div>
    </section>
  )
}