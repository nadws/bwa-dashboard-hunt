import { Button } from '@/components/ui/button';
import React, { FC } from 'react'
import { AiOutlineHome,AiOutlineMessage,AiOutlineUsergroupAdd,AiOutlineCalendar    } from 'react-icons/ai';
import { BiBuildings } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { TbLogout2 } from 'react-icons/tb';
interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = ({ }) => {
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <AiOutlineHome className='mr-2 text-lg' />
                        Home
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <AiOutlineMessage  className='mr-2 text-lg' />
                        Messages
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <BiBuildings  className='mr-2 text-lg' />
                        Company Profile
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <AiOutlineUsergroupAdd  className='mr-2 text-lg' />
                        All Applicants
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <HiOutlineClipboardDocumentList  className='mr-2 text-lg' />
                        Job Listing
                    </Button>
                    <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                        <AiOutlineCalendar className='mr-2 text-lg' />
                        My Schedule
                    </Button>
                </div>

            </div>
            
        </div>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Settings
                </h2>
                <Button variant={'ghost'} className='w-full justify-start rounded-none  hover:text-primary' >
                    <BsGear  className='mr-2 text-lg' />
                    Settings
                </Button>
                <Button variant={'ghost'} className='w-full justify-start rounded-none text-red-500  hover:bg-red-200 hover:text-red-500' >
                    <TbLogout2  className='mr-2 text-lg' />
                    Logout
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;
