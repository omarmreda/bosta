import LogoEn from '../../svg/LogoEn'
import LogoAr from '../../svg/LogoAr'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import Cookies from 'js-cookie'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';


const Navbar = ({ isRtl, setIsRtl }) => {
    const { t } = useTranslation()
    const [isHovered, setHovered] = useState(false);
    return (
        <nav
            className="w-full py-5 px-20 flex justify-between items-center border-b border-gray-200"
            style={{ direction: isRtl ? 'rtl' : 'ltr' }}
        >
            {!isRtl && <LogoEn />}
            {isRtl && <LogoAr />}
            <ul className="flex gap-6 font-semibold">
                <li className="cursor-pointer hover:text-bostaRed hover:underline">
                    {t('nav.home')}
                </li>
                <li className="cursor-pointer hover:text-bostaRed hover:underline">
                    {t('nav.pricing')}
                </li>
                <li className="cursor-pointer hover:text-bostaRed hover:underline">
                    {t('nav.contact_sales')}
                </li>
            </ul>
            <ul className="flex font-semibold items-center">
                <li
                    className={`mr-3 cursor-pointer text-bostaRed flex items-center justify-center gap-1 li-container relative`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => {

                        setTimeout(() => {

                            setHovered(false);

                        }, 200);
                    }}
                >

                    {t('nav.track_shipment')}
                    {!isRtl && <FaChevronRight className="text-xs mt-1" />}
                    {isRtl && <FaChevronLeft className='text-xs mt-1' />}

                    {/* Add the search box inside the li */}
                    {isHovered && (
                        <div className="search-box absolute top-full mt-2 left-0 w-80 bg-white border border-gray-300 p-4" >
                            <h3>Track your shipment</h3>
                            <form className='flex w-full p-2 border border-gray-200'>
                                <input type="text" placeholder="Tracking No." className="bo border-none" />
                                <button className='bg-bostaRed'><SearchOutlinedIcon className='text-white' />
                                </button>
                            </form>
                        </div>
                    )}
                </li>
                <span
                    className="h-8 mr-3 border border-slate-100"
                    style={{
                        borderColor:
                            'transparent transparent transparent rgba(0, 0, 0, 0.5)'
                    }}
                ></span>
                <li className="cursor-pointer">{t('nav.signin')}</li>
                {!isRtl && (
                    <li
                        className="ml-4 text-red-600 cursor-pointer"
                        onClick={() => {
                            i18next.changeLanguage('ar')
                            Cookies.set('i18next', 'ar')
                            setIsRtl(true)
                            window.scrollTo(0, 0)
                        }}
                    >
                        العربية
                    </li>
                )}
                {isRtl && (
                    <li
                        className="mr-4 text-red-600 cursor-pointer"
                        onClick={() => {
                            i18next.changeLanguage('en')
                            Cookies.set('i18next', 'en')
                            setIsRtl(false)
                            window.scrollTo(0, 0)
                        }}
                    >
                        ENG
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
