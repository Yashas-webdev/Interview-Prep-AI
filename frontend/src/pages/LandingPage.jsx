import { useNavigate } from 'react-router-dom'
import HERO_IMG from '../assets/hero-img.png'
import {APP_FEATURES} from '../utils/data'

function LandingPage() {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () =>{};
  return (
    <div className='w-full min-h-full bg-[#FFFCEF]'>
        <div className='w-[500px] h-500px bg-amber-200/20 blur-65px absolute top-0 left-0'/>

        <div className='container mx-auto px-4 pt-6 pb-200px relative z-10'>
            {/* Header */}
            <header className='flex justify-between items-center mb-16'>
                <div className='text-xl text-black font-bold'>
                    Interview Prep AI
                </div>
                <button 
                  className='bg-linear-to-r from-[#FF9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:bg-black hover:text-white border border-white transition-colors cursor-pointer'
                  onClick={()=>setOpenAuthModal(true)}
                >
                    Login / Sign Up
                </button>
            </header>

            {/* Hero Content */}
            <div className=''>
                <div className=''>
                    <div className=''>
                        <div className=''>
                            AI Powered
                        </div>
                    </div>

                    <h1 className=''>
                        Ace Interviews with <br/>
                        <span className=''>
                            AI-Powered
                        </span>{" "}
                        Learning
                    </h1>
                </div>

                <div className=''>
                    <p className=''>
                        Get reole-specific questions, expand answer when you need them,
                        dive deeper into concepts, and organize everything your way,
                        From preparation to mastery - your ultimate interview toolkit is 
                        here.
                    </p>

                    <button 
                     className=''
                     onClick={handleCTA}
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage